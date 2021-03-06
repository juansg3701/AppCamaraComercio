import React, {useContext, useState} from "react";
import {
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon, IonImg, IonLabel, IonModal,
    IonPage,
    IonRouterLink, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import ConfecamarasContext from "../../data/confecamaras";
import {card, chevronBack} from "ionicons/icons";
import {useHistory} from "react-router";
import ModalFirstCertificate from "../../components/ModalFisrtCertificate";
import {expedientes} from "../../data/expedientes";

const QueryProceedings: React.FC=()=>{
    const confecamaras = useContext(ConfecamarasContext);
    const history = useHistory()
    const [expedientesF,setExpedientesF]= useState<expedientes>({matricula:"",identificacion:"",nit:"",emailcom:"",idclase:""
        ,estadomatricula:"",nombre:"",certificados:[], direccion:"",municipio:"",telcom1:"",proponente:"" })
    const firstCertficate=(expediente: expedientes)=>{
        setExpedientesF(expediente);
    };
    const closeModal=()=>{
        let prueba_expedientes: expedientes={matricula:"",identificacion:"",nit:"",emailcom:"",idclase:""
        ,estadomatricula:"",nombre:"",certificados:[],direccion:"",municipio:"",telcom1:"",proponente:""};
        setExpedientesF(prueba_expedientes)
    };
    const recuperar_certificado=()=>{
        history.replace('/rcertificate');
    }
    return(
        <React.Fragment>
            <IonModal isOpen={expedientesF?.matricula!=""}>
                <ModalFirstCertificate expediente={expedientesF as expedientes} dismissModal={closeModal}/>
            </IonModal>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-left">
                            <IonRouterLink className="color" href="/certificate">
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
                                <IonButton expand='block' color='warning' onClick={()=>{recuperar_certificado()}}>
                                    Recuperar certificado
                                </IonButton>
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
                                {confecamaras.expedientes.map((item,key) => (
                                    <IonCard className={card}>
                                        <IonRow className="ion-align-items-center">
                                            <IonCol className="ion-text-center titulos-busquedas" size="12">
                                                <b>{item.nombre}</b>
                                            </IonCol>
                                            <IonCol size="12" className="ion-text-left">
                                                <b> Mátricula: </b>{item.matricula} <br/>
                                                <b>Tipo identificación:</b>  {item.idclase} <br/>
                                                <b> Identificación:</b> {item.identificacion} <br/>
                                                <b>Nit:</b>  {item.nit} <br/>
                                                <b>Estado mátricula:</b>  {item.estadomatricula} <br/>
                                                {/*
                                            <b>Correo:</b>  {item.emailcom} <br/>
                                            <b>Servicio:</b>  {item.servicio} <br/>
                                            <b>Valor:</b>  {item.valor} <br/>
                                            */}
                                            </IonCol>
                                            <IonCol size="12">
                                                <IonButton  className="ion-color-primary" onClick={()=>{firstCertficate(item)}}>
                                                    Certificado automático
                                                </IonButton>
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
        </React.Fragment>

    );
};
export default QueryProceedings;
