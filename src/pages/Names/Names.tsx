import React, {useContext, useEffect, useRef, useState} from "react";
import {
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage,
    IonRouterLink,
    IonRow,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonInput,
    IonItem,
    IonButton,
    IonFab,
    IonFabButton,
    IonModal,
    IonRouterOutlet
} from "@ionic/react";
import  '../Home.css';
import { chevronBack, informationCircle } from 'ionicons/icons';
import ModalInformation from "../../components/ModalInformation";
import ConfecamarasContext from "../../data/confecamaras";
import {IonReactRouter} from "@ionic/react-router";
import Qprocess from "../Qprocess/Qprocess";
import {Route, useHistory} from "react-router-dom";
import QueryNames from "./QueryNames";
import {nombres} from "../../data/nombres";

const Names: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const confecamaras = useContext(ConfecamarasContext);
    const history = useHistory();
    const name_search = useRef<HTMLIonInputElement>(null);
    const consultaNombres= async ()=>{
        const name_send = name_search.current?.value as string;
       await confecamaras.consultarNombre(name_send);
        history.replace('/querynames');
    }
    const openCompleteModal = () => {
        let message="Información sobre consulta de nombres";
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
                                    Consulta de nombres
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Ingrese el nombre...
                                    </IonLabel>
                                    <IonInput ref={name_search} type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonButton expand='block' fill='outline' onClick={()=>{consultaNombres()}}>
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
export default Names;
