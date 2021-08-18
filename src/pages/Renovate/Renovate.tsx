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
import ConfecamarasContext, {typesProceedings} from "../../data/confecamaras";
import {useHistory} from "react-router";

const Renovate: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const [toastMsg, setToast]= useState<string>();
    const confecamaras = useContext(ConfecamarasContext);
    const tipo_search= useRef<HTMLIonSegmentElement>(null);
    const valor_search= useRef<HTMLIonInputElement>(null);
    const history= useHistory()

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
    const renovar= async ()=>{

            const tipo_send= tipo_search.current?.value as typesProceedings;
            const valor_send= valor_search.current?.value as string;
            if(tipo_send && valor_send){
                let noExpedientes= confecamaras.consultarExpediente(tipo_send, valor_send);
                noExpedientes.then(value => {
                    if(value>0){
                        //history.replace("/queryproceedings")
                        history.push("/queryproceedingsrenovate")
                    }else{
                        setToast("No hay expedientes con estos datos")
                    }
                })

            }else{
                setToast("Por favor llene todos los campos")
            }

    }
    return(
        <React.Fragment>
            <IonModal isOpen={stateModal!=""}>
                <ModalInformation message={stateModal} dismissModal={closeModal}></ModalInformation>
            </IonModal>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={3000} onDidDismiss={()=>{setToast("")}}/>
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
                                    Renovaciones
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonLabel className="texto">
                                    Seleccione el tipo de valor...
                                </IonLabel>
                                <IonSegment color="danger" ref={tipo_search}>
                                    <IonSegmentButton value='identificacion' >
                                        <IonLabel>Documento de<br/>identificación</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='nombre'>
                                        <IonLabel>Nombre</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='matricula'>
                                        <IonLabel>Mátricula</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
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
                                <IonButton expand='block' fill='outline' onClick={()=>{renovar()}}>
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
export default Renovate;
