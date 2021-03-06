import React, {useContext, useState} from "react";
import {
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonFab,
    IonFabButton, IonGrid,
    IonHeader,
    IonIcon, IonImg, IonInput, IonItem, IonLabel,
    IonPage,
    IonRouterLink, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {nombres} from "../../data/nombres";
import ConfecamarasContext from "../../data/confecamaras";
import {card, chevronBack, informationCircle} from "ionicons/icons";

const ResultsRadicate: React.FC=()=>{
    const confecamaras = useContext(ConfecamarasContext);
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-left">
                        <IonRouterLink className="color" href="/qprocess">
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
                            <IonLabel className="titulos-busquedas">
                                Resultados radicados:
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                                <IonCard className={card}>
                                    <IonRow  className="ion-align-items-center">
                                        <IonCol className="ion-text-center" size="12">
                                            <b>{confecamaras.radicados.radicado}</b>
                                        </IonCol>
                                        <IonCol size="12" className="ion-text-left">
                                            <b> Recibo: </b>{confecamaras.radicados.recibo} <br/>
                                            <b> Identificaci??n:</b> {confecamaras.radicados.identificacion} <br/>
                                            <b>Nombre:</b>  {confecamaras.radicados.nombre} <br/>
                                            <b>Tipo tr??mite:</b>  {confecamaras.radicados.tipotramite} <br/>
                                            <b>Fecha radicado:</b>  {confecamaras.radicados.fecharadicacion} <br/>
                                            <b>Fecha estado final:</b>  {confecamaras.radicados.fechaestadofinal} <br/>
                                            <b>Acto reparto:</b>  {confecamaras.radicados.actoreparto} <br/>
                                            <b>Estado final:</b>  {confecamaras.radicados.estadofinal} <br/>
                                        </IonCol>
                                    </IonRow>
                                </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonCol>
                        <IonRow></IonRow>
                    </IonCol>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default ResultsRadicate;
