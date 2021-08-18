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
    IonToast,
    IonTabs
} from "@ionic/react";
import  '../Home.css';
import {card, chevronBack, informationCircle} from 'ionicons/icons';
import ModalInformation from "../../components/ModalInformation";
import ConfecamarasContext, {typesProceedings, typesQuerys} from "../../data/confecamaras";
import {useHistory} from "react-router";

const QueryRcertificate: React.FC = ()=>{
    const [stateModal,setStateModal] = useState("");
    const confecamaras = useContext(ConfecamarasContext);
    const valor_search= useRef<HTMLIonInputElement>(null);
    const [toastMsg, setToast] = useState<string>();
    const history= useHistory()

    const consultarTramite= async ()=>{
        const valor_send= valor_search.current?.value as string;
        if(valor_send){
            let noExpedientes= confecamaras.consultarCertificadoRecuperacion(valor_send);
        }else{
            setToast("Por favor llene todos los campos")
        }
    }
    const openCompleteModal = () => {
        let message="Con el número de recuperación y liquidación del certificado puede saber "+
            "el estado sobre el pago de su certificado y volver a generar el enlace si es necesario";
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
                            <IonRouterLink className="color" href="/rcertificate">
                                <IonIcon color="white"  icon={chevronBack} />  Atrás
                            </IonRouterLink>
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
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
                                    Información del certificado
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonCard className={card}>
                                    <IonRow className="ion-align-items-center">
                                        <IonCol className="ion-text-center titulos-busquedas" size="12">
                                            <b>{confecamaras.consultaCertificado.nombre}</b>
                                        </IonCol>
                                        <IonCol size="12" className="ion-text-left">
                                            <b> Nombre: </b>{confecamaras.consultaCertificado.nombre} <br/>
                                            <b>numerorecuperacion:</b>  {confecamaras.consultaCertificado.numerorecuperacion} <br/>
                                            <b> Estado:</b> {confecamaras.consultaCertificado.mensajestado} <br/>
                                        </IonCol>
                                    </IonRow>
                                </IonCard>
                                <hr></hr>
                                <IonCol>
                                    <IonRow></IonRow>
                                </IonCol>
                                <IonRow>
                                    <IonCol className="ion-text-center titulos" size="12">
                                        <b>Detalles certificado</b>
                                    </IonCol>
                                </IonRow>
                                {confecamaras.consultaCertificado.liquidaciondetalle.map((item,key) => (
                                    <IonCard className={card}>
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="12" className="ion-text-left">
                                                <b>Servicio:</b>  {item.idservicio} <br/>
                                                <b>Nombre:</b>  {item.txtservicio} <br/>
                                                <b>Expediente: </b>{item.expediente} <br/>
                                                <b>Cantidad:</b>  {item.cantidad} <br/>
                                                <b>Valor unitario:</b>  {item.valorservicio} <br/>
                                                <b>Valor parcial:</b>  {item.valorbase} <br/>
                                            </IonCol>
                                        </IonRow>
                                    </IonCard>
                                ))}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-center titulos" size="12">
                                <b>Pago total: {confecamaras.consultaCertificado.valor}</b>
                            </IonCol>
                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                {confecamaras.consultaCertificado.idestado=='04' ||
                                confecamaras.consultaCertificado.idestado=='08' ||
                                confecamaras.consultaCertificado.idestado=='05' ||
                                confecamaras.consultaCertificado.idestado=='66'?<IonRouterLink href={confecamaras.consultaCertificado.urlPago}>
                                    <IonButton expand='block' fill='outline' >
                                        Pagar
                                    </IonButton>
                                </IonRouterLink>:<IonButton expand='block' fill='outline' disabled={true}>
                                        Pagar
                                    </IonButton>}

                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    );
};
export default QueryRcertificate;
