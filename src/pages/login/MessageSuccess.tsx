import React, {useContext, useRef, useState} from "react";
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
    IonToast,
    IonDatetime, IonCheckbox
} from "@ionic/react";
import  '../Home.css';
import { chevronBack, informationCircle } from 'ionicons/icons';
import ModalInformation from "../../components/ModalInformation";
import ConfecamarasContext from "../../data/confecamaras";
import {useHistory} from "react-router";
import ModalPrivacy from "../../components/ModalPrivacy";
import ModalDatatreatment from "../../components/ModalDatatreatment";

const MessageSuccess: React.FC = ()=>{

    return(
        <React.Fragment>
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
                                    Registro exitoso
                                </IonLabel>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                    <IonLabel >
                                        Mensaje
                                    </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonButton expand='block' fill='outline' color='danger' >
                                    Volver a inicio de sesión
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    );
};
export default MessageSuccess;
