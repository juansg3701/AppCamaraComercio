import React, {useContext, useRef, useState} from "react";
import {
    IonCard,
    IonCol, IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage, IonRouterLink,
    IonRow,
    IonTitle,
    IonToolbar,
    IonLabel, IonSegment, IonSegmentButton, IonInput, IonItem, IonButton, IonFab, IonFabButton, IonModal, IonToast
} from "@ionic/react";
import  '../Home.css';
import { chevronBack, informationCircle } from 'ionicons/icons';
import ModalInformation from "../../components/ModalInformation";
import ConfecamarasContext from "../../data/confecamaras";
import {useHistory} from "react-router";

const ForgetPassword: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const [toastMsg, setToast]= useState<string>();
    const history= useHistory()
    const openCompleteModal = () => {
        let message="Apreciado usuario, puede solicitar una nueva contraseña para iniciar sesión en nuestro sistema." +
            " Esta le será enviada a su correo electrónico si los datos suministrados son correctos";
        setStateModal(message);
    };
    const closeModal = () => {
        setStateModal("");
    };
    const confecamaras = useContext(ConfecamarasContext)
    const documento_search=useRef<HTMLIonInputElement>(null)
    const correo_search= useRef<HTMLIonInputElement>(null)

    const restauraraClave=()=>{
        const documento_send= documento_search.current?.value as string
        const correo_send = correo_search.current?.value as string
        if(documento_send && correo_send ){
            let verificacion = confecamaras.restaurarClaveRegistro(documento_send,correo_send)
            verificacion.then(value => {
                console.log(value)
                switch (value) {
                    case "0000":
                        history.push('/messagesuccess')
                        break;
                    case "9995":
                        setToast("Los datos no son correctos, por favor verifiquelos")
                        break;
                    case "9996":
                        setToast("Los datos no son correctos, por favor verifiquelos")
                        break;
                    default:
                        setToast("Por favor verifique los datos")
                        break;
                }
            })
        }else{
            setToast("Por favor llene todos los campos correctamente")
        }
    }
    return(
        <React.Fragment>
            <IonModal isOpen={stateModal!=""}>
                <ModalInformation message={stateModal} dismissModal={closeModal}></ModalInformation>
            </IonModal>
            <IonToast isOpen={!!toastMsg} message={toastMsg} color="warning"  duration={3000}
                      onDidDismiss={()=>{setToast("")}}/>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-left">
                            <IonRouterLink className="color" href="/login">
                                <IonIcon color="white"  icon={chevronBack} />  Atras
                            </IonRouterLink>
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton onClick={()=>{openCompleteModal()}}>
                            <IonIcon icon={informationCircle} />
                        </IonFabButton>
                    </IonFab>

                    <IonGrid>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center">
                                <IonCard href="/home">
                                    <IonImg src="assets/img/logo.jpg"/>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonLabel className="titulos">
                                    Restaurar contraseña
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese el documento...
                                    </IonLabel>
                                    <IonInput  type='text' ref={documento_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese el correo...
                                    </IonLabel>
                                    <IonInput  type='email' ref={correo_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonButton expand='block' fill='outline' onClick={()=>{restauraraClave()}}>
                                    Restaurar
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    );
};
export default ForgetPassword;
