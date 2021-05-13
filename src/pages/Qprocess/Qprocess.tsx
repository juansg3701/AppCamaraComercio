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
import ConfecamarasContext, {typesQuerys} from "../../data/confecamaras";
import {useHistory} from "react-router-dom";

const Qprocess: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const confecamaras = useContext(ConfecamarasContext);
    const history = useHistory();
    const tipo_search = useRef<HTMLIonSegmentElement>(null);
    const valor_search = useRef<HTMLIonInputElement>(null);
    const [toastMsg, setToast]= useState<string>();

    const consultarTramite= async ()=>{
        const tipo_send= tipo_search.current?.value as typesQuerys;
        const valor_send= valor_search.current?.value as string;

        if(tipo_send && valor_send){
            await confecamaras.consultarTramite(tipo_send,valor_send);
            switch (tipo_send) {
                case "recibo":
                    //history.replace('/resultsreceipt')
                    history.push('/resultsreceipt')
                    break;
                case "radicado":
                    //history.replace('/resultsradicate')
                    history.push('/resultsradicate')
                    break;
            }
        }else{
            setToast("Por favor llene todos los campos");
        }
    }

        const openCompleteModal = () => {
        let message="Esta opción le permite conocer el " +
            "estado de los trámites que se han radicado en " +
            "la Cámara de Comercio. Por favor indique el criterio a " +
            "través del cual desea realizar la consulta. Seleccione solamente " +
            "uno de los criterios que se disponen para la consulta. Indicado " +
            "el contenido del criterio a utilizar, oprima el botón \"CONSULTAR\".";
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
                                    Consulta de trámites
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonSegment color="danger" ref={tipo_search}>
                                    <IonSegmentButton value='radicado'>
                                        <IonLabel>Radicado</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='recibo'>
                                        <IonLabel>Recibo</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese el número...
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
                                <IonButton expand='block' fill='outline' onClick={consultarTramite}>
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
export default Qprocess;
