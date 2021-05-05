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

const ResultsReceipt: React.FC=()=>{
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
                            <IonLabel className="titulos">
                                Resultados recibos:
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                                <IonCard className={card}>
                                    <IonRow key={confecamaras.recibos.recibo} className="ion-align-items-center">
                                        <IonCol className="ion-text-center" size="12">
                                            <b>{confecamaras.recibos.recibo}</b>
                                        </IonCol>
                                        <IonCol size="12" className="ion-text-left">
                                            <b> Radicado: </b>{confecamaras.recibos.radicado} <br/>
                                            <b> Identificación:</b> {confecamaras.recibos.identificacion} <br/>
                                            <b>Nombre:</b>  {confecamaras.recibos.nombre} <br/>
                                            <b>Tipo:</b>  {confecamaras.recibos.tipotramite} <br/>
                                            <b>Valor neto:</b>  {confecamaras.recibos.valorneto} <br/>
                                            <b>url:</b>  {confecamaras.recibos.url} <br/>
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
export default ResultsReceipt;
