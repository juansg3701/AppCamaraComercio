import React, {useContext, useEffect} from "react";
import {
    IonCard,
    IonCol, IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg, IonItemDivider,
    IonPage, IonRouterLink,
    IonRow,
    IonTitle,
    IonToolbar,
    IonLabel, IonButton
} from "@ionic/react";
import  '../Home.css';
import { chevronBack } from 'ionicons/icons';
import {useHistory} from "react-router";

const Process: React.FC = ()=>{
    const history = useHistory()
    const cerrarsesion=()=>{
        window.localStorage.clear()
        history.replace('/login')
    }


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-left">
                    <IonRouterLink className="color" href="/home">
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
                            Trámites registrales
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonCol>
                        <IonRow></IonRow>
                    </IonCol>

                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="6">
                            <IonRouterLink href="/names">
                                <img src="assets/img/nombres.png" height="50" width="50"/>
                                <br></br>
                                Consulta de nombres
                            </IonRouterLink>
                        </IonCol>
                        <IonCol className="ion-text-center" size="6">
                            <IonRouterLink href="/qprocess">
                                <img src="assets/img/consulta_tramites.png" height="50" width="50"/>
                                <br></br>
                                Consulta de trámites
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                    <IonCol>
                        <IonRow></IonRow>
                    </IonCol>

                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                            <a onClick={()=>{cerrarsesion()}}>
                                <img src="assets/img/certificados.png" height="50" width="50"/>
                                <br></br>
                                Certificados
                            </a>
                        </IonCol>
                    </IonRow>

                    {/*
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                            <IonRouterLink href="/certificate">
                                <img src="assets/img/certificados.png" height="50" width="50"/>
                                <br></br>
                                Certificados
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                    */}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default Process;
