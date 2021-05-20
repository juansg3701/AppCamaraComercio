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
            "Será enviada a su correo electrónico si los datos suministrados son correctos";
        setStateModal(message);
    };
    const closeModal = () => {
        setStateModal("");
    };
    const confecamaras = useContext(ConfecamarasContext)
    const documento_search=useRef<HTMLIonInputElement>(null)
    const correo_search= useRef<HTMLIonInputElement>(null)
    const celular_search= useRef<HTMLIonInputElement>(null)
    const clave_search= useRef<HTMLIonInputElement>(null)

    const autenticarUsuario=()=>{
        const documento_send= documento_search.current?.value as string
        const correo_send = correo_search.current?.value as string
        const celular_send= celular_search.current?.value as string
        const clave_send = clave_search.current?.value as string
        if(documento_send && correo_send && celular_send && clave_send){
            let verificacion = confecamaras.autenticarUsuarioRegistrado(documento_send,correo_send,clave_send,celular_send)
            verificacion.then(value => {
                console.log(value)
                switch (value) {
                    case "0000":
                        history.push('/session')
                        break;
                    case "0003":
                        setToast("Clave erronea")
                        break;
                    case "0001":
                        setToast("Usuario no registrado o datos erroneos")
                        break;
                    default:
                        setToast("Por favor llene todos los campos correctamente")
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
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={3000}
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
                                <IonButton expand='block' fill='outline' onClick={()=>{autenticarUsuario()}}>
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
