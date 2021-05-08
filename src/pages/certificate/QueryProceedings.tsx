import React, {useContext} from "react";
import {
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon, IonImg, IonLabel,
    IonPage,
    IonRouterLink, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import ConfecamarasContext from "../../data/confecamaras";
import {card, chevronBack} from "ionicons/icons";

const QueryProceedings: React.FC=()=>{
    const confecamaras = useContext(ConfecamarasContext);

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-left">
                        <IonRouterLink className="color" href="/Names">
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
                                Resultados encontrados:
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center" size="12">
                            {confecamaras.names.map((item,key) => (
                                <IonCard className={card}>
                                    <IonRow key={key} className="ion-align-items-center">
                                        <IonCol className="ion-text-center" size="12">
                                            <b>{item.razon_social}</b>
                                        </IonCol>
                                        <IonCol size="12" className="ion-text-left">
                                            <b> Cámara: </b>{item.desc_camara} <br/>
                                            <b> Mátricula:</b> {item.matricula} <br/>
                                            <b>No.Identificación:</b>  {item.numero_identificacion} <br/>
                                            <b>Tipo:</b>  {item.desc_tipo_sociedad} <br/>
                                            <b>Categoría:</b>  {item.desc_categoria_matricula} <br/>
                                            <b>Estado:</b>  {item.desc_estado_matricula} <br/>
                                        </IonCol>
                                    </IonRow>
                                </IonCard>
                            ))}
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
export default QueryProceedings;
