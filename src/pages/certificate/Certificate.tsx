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
import itemContext from "../../data/capacitation";
import {useHistory} from "react-router";

const Certificate: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const confecamaras = useContext(ConfecamarasContext);
    const tipo_search= useRef<HTMLIonSegmentElement>(null);
    const valor_search= useRef<HTMLIonInputElement>(null);
    const [toastMsg, setToast] = useState<string>();
    const history= useHistory()

    const consultarTramite= async ()=>{
        const tipo_send= tipo_search.current?.value as typesProceedings;
        const valor_send= valor_search.current?.value as string;
        if(tipo_send && valor_send){
              let noExpedientes= confecamaras.consultarExpediente(tipo_send, valor_send);
              noExpedientes.then(value => {
                  if(value>0){
                      //history.replace("/queryproceedings")
                      history.push("/queryproceedings")
                  }else{
                      setToast("No hay expedientes con estos datos")
                  }
              })

        }else{
            setToast("Por favor llene todos los campos")
        }
    }
    const openCompleteModal = () => {
        let message="Solicite en forma automática, certificados de matrícula " +
            "mercantil, certificados de existencia y representación legal, " +
            "certificados de libros de comercio, certificados de existencia y " +
            "representación de entidades sin ánimo de lucro y certificados " +
            "de proponentes. " +
            "Si desea expedir alguno de los certificados antes mencionados, " +
            "por favor realice a continuación la consulta para encontrar el" +
            " expediente que desea certificar y siga las instrucciones.";
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
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={3000} onDidDismiss={()=>{setToast("")}}/>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-left">
                            <IonRouterLink className="color" href="/session">
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
                                <IonCard href="/session">
                                    <IonImg src="assets/img/logo.jpg"/>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonLabel className="titulos">
                                    Certificados
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
export default Certificate;
