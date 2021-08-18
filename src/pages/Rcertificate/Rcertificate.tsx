import React, {useContext, useEffect, useRef, useState} from "react";
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
import ConfecamarasContext, {typesProceedings, typesQuerys} from "../../data/confecamaras";
import {useHistory} from "react-router";

const Rcertificate: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const confecamaras = useContext(ConfecamarasContext);
    const valor_search= useRef<HTMLIonInputElement>(null);
    const [toastMsg, setToast] = useState<string>();
    const [toastMsg_2, setToast_2] = useState<string>();
    const history= useHistory()

    const consultarTramite= async ()=>{
        const valor_send= valor_search.current?.value as string;
        if(valor_send){
            setToast("Consultando, por favor espere...");
            let noExpedientes= confecamaras.consultarCertificadoRecuperacion(valor_send);

            noExpedientes.then(value => {
                if(value=="0000"){

                    history.push('/recuperatecertificate')
                }else{
                    setToast_2("No se encontró el certificado")
                }
            })
        }else{
            setToast("Por favor llene todos los campos")
        }
    }
    const openCompleteModal = () => {
        let message="Con el número de recuperación y liquidación del certificado puede saber "+
        "el estado sobre el pago de su certificado y volver a generar el enlace si es necesario";
        setStateModal(message);
    };
    const closeModal = () => {
        setStateModal("");
    };

    return(
        <React.Fragment>
            <IonModal isOpen={stateModal!=""}>
                <ModalInformation message={stateModal} dismissModal={closeModal}></ModalInformation>
            </IonModal>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={3000}
                      onDidDismiss={()=>{setToast("")}}/>
            <IonToast isOpen={!!toastMsg_2} message={toastMsg_2} color="warning" position="middle" duration={3000}
                      onDidDismiss={()=>{setToast_2("")}}/>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-left">
                            <IonRouterLink className="color" href="/session">
                                <IonIcon color="white"  icon={chevronBack} />  Atrás
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
                                <IonCard href="/session">
                                    <IonImg src="assets/img/logo.jpg"/>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonLabel className="titulos">
                                    Recuperación de certificado
                                </IonLabel>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese el valor...
                                    </IonLabel>
                                    <IonInput  type='text' ref={valor_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonButton expand='block' fill='outline' onClick={()=>{consultarTramite()}}>
                                    Consultar
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    );
};
export default Rcertificate;
