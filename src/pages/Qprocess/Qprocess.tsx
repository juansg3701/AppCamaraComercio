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
    const [toastMsg_2, setToast_2]= useState<string>();

    const consultarTramite= async ()=>{
        const tipo_send= tipo_search.current?.value as typesQuerys;
        const valor_send= valor_search.current?.value as string;

        if(tipo_send && valor_send){
            setToast("Consultando, por favor espere...");
            let noResultados= confecamaras.consultarTramite(tipo_send,valor_send);

            noResultados.then(value=>{
                if(value>0){
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
                    setToast_2("No hay resultados con estos datos");
                }
            })

        }else{
            setToast("Por favor llene todos los campos");
        }
    }

        const openCompleteModal = () => {
        let message="Esta opci??n le permite conocer el " +
            "estado de los tr??mites que se han radicado en " +
            "la C??mara de Comercio. Por favor indique el criterio a " +
            "trav??s del cual desea realizar la consulta. Seleccione solamente " +
            "uno de los criterios que se disponen para la consulta. Indicado " +
            "el contenido del criterio a utilizar, oprima el bot??n \"CONSULTAR\".";
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
                                    Consulta de tr??mites
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
                                        Ingrese el n??mero...
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
