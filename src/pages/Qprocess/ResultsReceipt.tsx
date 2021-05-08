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
                            <IonLabel className="titulos-busquedas">
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
                                            <b>Tipo de trámite:</b>  {confecamaras.recibos.tipotramite} <br/>
                                            <b>Tipo de registro:</b>  {confecamaras.recibos.tiporegistro} <br/>
                                        </IonCol>
                                    </IonRow>
                                </IonCard>
                        </IonCol>
                        <IonCol size="12">
                            <IonRow>
                                <IonCol className="ion-text-center titulos-busquedas" size="12">
                                    <b>Servicios</b>
                                </IonCol>
                                <IonCol size="12">
                                    {confecamaras.recibos.servicios.map(item=>(
                                        <IonCard className={card}>
                                            <IonRow className="ion-align-items-center">
                                                <IonCol size="12" className="ion-text-left">
                                                    <b> No. servicio: </b>{item.nservicio} <br/>
                                                    <b> Proponente:</b> {item.proponente} <br/>
                                                    <b>Nombre:</b>  {item.nombre} <br/>
                                                    <b>Identificación:</b>  {item.identificacion} <br/>
                                                    <b>Mátricula:</b>  {item.matricula} <br/>
                                                </IonCol>
                                            </IonRow>
                                        </IonCard>
                                    ))}
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        <IonCol size="12">
                            <IonRow>
                                <IonCol className="ion-text-center titulos-busquedas" size="12">
                                    <b>Documentos</b>
                                </IonCol>
                                <IonCol size="12">
                                    {confecamaras.recibos.imagenes.map(item=>(
                                        <IonCard className={card}>
                                            <IonRow  className="ion-align-items-center">
                                                <IonCol size="12" className="ion-text-left">
                                                    <b> Nombre: </b>{item.nombre} <br/>
                                                    <b> Fecha: </b>{item.fechadocumento} <br/>
                                                    <b> Url:</b> <IonRouterLink href={item.url}>Enlace del documento</IonRouterLink><br/>
                                                </IonCol>
                                            </IonRow>
                                        </IonCard>
                                    ))}
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        <IonCol size="12">
                            <IonRow>
                                <IonCol className="ion-text-center titulos-busquedas" size="12">
                                    <b>Certificados</b>
                                </IonCol>
                                <IonCol size="12">
                                    {confecamaras.recibos.certificados.map(item=>(
                                        <IonCard className={card}>
                                            <IonRow  className="ion-align-items-center">
                                                <IonCol size="12" className="ion-text-left">
                                                    <b> Ruta: </b>{item.path} <br/>
                                                </IonCol>
                                            </IonRow>
                                        </IonCard>
                                    ))}
                                </IonCol>
                            </IonRow>
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
