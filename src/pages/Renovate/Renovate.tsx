import React, {useState} from "react";
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

const Renovate: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const [toastMsg, setToast]= useState<string>();
    const openCompleteModal = () => {
        let message="Apreciado usuario, para renovar una matrícula mercantil o una " +
            "Entidad Sin Animo de Lucro debe indicar el número de la matrícula o de " +
            "inscripción o el número de identificación del expediente que se desea renovar " +
            "y oprima el botón Continuar." +
            "Si usted había realizado previamente el trámite y lo salvó " +
            "(para pago en caja o pago en línea) puede retormar dicho " +
            "trámite indicando a continuación el número de recuperación que " +
            "el sistema le informó al momento de salvarlo. Igualmente este " +
            "número viene impreso en los formularios que se imprimen luego" +
            " del diligenciamiento.";
        setStateModal(message);
    };
    const closeModal = () => {
        setStateModal("");
    };
    const renovar=()=>{
        if(2==2){
            //codigo
        }else{
            setToast("Por favor llene todos los campos")
        }
    }
    return(
        <React.Fragment>
            <IonModal isOpen={stateModal!=""}>
                <ModalInformation message={stateModal} dismissModal={closeModal}></ModalInformation>
            </IonModal>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={3000}
            color="medium" onDidDismiss={()=>{setToast("")}}/>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-left">
                            <IonRouterLink className="color" href="/process">
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
                                    Renovaciones
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese el documento...
                                    </IonLabel>
                                    <IonInput  type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese el correo...
                                    </IonLabel>
                                    <IonInput  type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese la contraseña...
                                    </IonLabel>
                                    <IonInput  type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="6">
                                <IonButton expand='block' fill='outline'>
                                    Ingresar
                                </IonButton>
                            </IonCol>
                            <IonCol className="ion-text-center" size="6">
                                <IonButton expand='block' fill='outline' color='danger'>
                                    Registrarse
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    );
};
export default Renovate;
