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
    IonLabel, IonButton, IonFab, IonFabButton
} from "@ionic/react";
import  '../Home.css';
import {chevronBack, informationCircle, logIn, logOut} from 'ionicons/icons';
import {useHistory} from "react-router";

const Session: React.FC = ()=>{
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
                        <IonRouterLink className="color" onClick={()=>{cerrarsesion()}}>
                            <IonIcon color="white"  icon={chevronBack} />  Atras
                        </IonRouterLink>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    { window.localStorage.length>0?
                        <IonFabButton onClick={()=>{cerrarsesion()}}>
                            <IonIcon icon={logOut} />
                        </IonFabButton>:
                        <IonFabButton href="/login">
                                <IonIcon icon={logIn} />
                        </IonFabButton>
                    }

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
                                Tr??mites registrales
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                            <IonLabel className="titulos-busquedas">
                                Usuario:
                            </IonLabel>

                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                            <IonLabel className="titulos">
                                { window.localStorage.length>0?
                                    (JSON.parse(window.localStorage.getItem("usuario") as string)).nombreusuario
                                    : <IonLabel>No ha iniciado sesi??n </IonLabel>
                                }
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonCol>
                        <IonRow></IonRow>
                    </IonCol>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                            { window.localStorage.length>0?
                                <IonRouterLink href="/certificate">
                                    <img src="assets/img/certificados.png" height="50" width="50"/>
                                    <br></br>
                                    Certificados electr??nicos
                                </IonRouterLink>
                                :<IonRouterLink>
                                    <img src="assets/img/certificados.png" height="50" width="50"/>
                                    <br></br>
                                    Certificados electr??nicos
                                </IonRouterLink>
                            }
                        </IonCol>
                    </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                    <IonRow className="ion-align-items-center">
                        {/*
                        <IonCol className="ion-text-center" size="12">
                            { window.localStorage.length>0?
                                <IonRouterLink href="/renovate">
                                    <img src="assets/img/renovacion.png" height="50" width="50"/>
                                    <br></br>
                                    Renovaciones
                                </IonRouterLink>: <IonRouterLink >
                                    <img src="assets/img/renovacion.png" height="50" width="50"/>
                                    <br></br>
                                    Renovaciones
                                </IonRouterLink>
                            }

                        </IonCol>
                        */}
                        <IonCol className="ion-text-center" size="12">
                            { window.localStorage.length>0?
                                <IonRouterLink href="/rcertificate">
                                    <img src="assets/img/renovacion.png" height="50" width="50"/>
                                    <br></br>
                                    Recuperar certificado
                                </IonRouterLink>: <IonRouterLink >
                                    <img src="assets/img/renovacion.png" height="50" width="50"/>
                                    <br></br>
                                    Recuperar certificado
                                </IonRouterLink>
                            }

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default Session;
