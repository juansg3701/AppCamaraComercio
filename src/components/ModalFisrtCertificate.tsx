import React, {useContext, useRef, useState} from 'react';
import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonText,
    IonButton,
    IonTitle,
    IonRouterLink,
    IonIcon, IonToolbar, IonItem, IonLabel, IonInput, IonCard, IonToast, IonRedirect
} from '@ionic/react';
import {chevronBack} from "ionicons/icons";
import {expedientes} from "../data/expedientes";
import ConfecamarasContext from "../data/confecamaras";
import {useHistory} from "react-router";
import {getElement} from "ionicons/dist/types/stencil-public-runtime";

interface modalFisrtCertificate {
    expediente: expedientes;
    dismissModal: () => void;
}

const ModalFirstCertificate: React.FC<modalFisrtCertificate> = (props) => {
    const history = useHistory();
    const confecamaras = useContext(ConfecamarasContext)
    const valor1_search= useRef<HTMLIonInputElement>(null)
    const valor2_search= useRef<HTMLIonInputElement>(null)
    const valor3_search= useRef<HTMLIonInputElement>(null)
    const valor4_search= useRef<HTMLIonInputElement>(null)
    const valor5_search= useRef<HTMLIonInputElement>(null)
    const valor6_search= useRef<HTMLIonInputElement>(null)

    const [toast,setToast] = useState<string>("")
    const recuperar_certificado=()=>{
        history.replace('/rcertificate');
    }
    const enviar_datos=()=>{
        const valor1_send=valor1_search.current?.value as number;
        const valor2_send= valor2_search.current?.value as number;
        const valor3_send= valor3_search.current?.value as number;
        const valor4_send=valor4_search.current?.value as number;
        const valor5_send= valor5_search.current?.value as number;
        const valor6_send= valor6_search.current?.value as number;

       // if(valor1_send>0 ){
            setToast("Consultando, por favor espere...");
           // @ts-ignore
            document.getElementById('input_certificado').setAttribute('disabled','true');
           let resultado =  confecamaras.reportarTransaccion(props.expediente, valor1_send,valor2_send,
                valor3_send, valor4_send, valor5_send, valor6_send);
           resultado.then(value => {
               if(value.codigoerror=="0000"){
                   //setToast("Redirigiendo a página para pago");
                   //props.dismissModal();
                   // eslint-disable-next-line no-restricted-globals
                   location.href = "https://siisogamoso.confecamaras.co/lanzarVirtual.php?_empresa=35&_opcion=pagoelectronico&_numrec="+value.numerorecuperacion;
               }else{
                   // @ts-ignore
                   document.getElementById('input_certificado').setAttribute('disabled','false');
                   setToast("Por favor digite los campos");
               }
           });
        //}else{
         //   setToast("Por favor digite los campos")
        //}
    }


    return (
        <React.Fragment>
            <IonToast isOpen={toast!=""} message={toast} duration={15000} onDidDismiss={()=>{setToast("")}}></IonToast>
            <IonContent>
                <IonGrid className='ion-no-padding'>
                    <IonRow>
                        <IonCol className='ion-text-center'>
                            <IonToolbar>
                                <IonTitle class="ion-text-center">
                                    <h2>Certificados automáticos</h2>
                                </IonTitle>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <IonCard>
                                <IonRow className="ion-align-items-center">
                                    <IonCol className="ion-text-center" size="12">
                                        <IonLabel className="titulos-busquedas">
                                            POR FAVOR ANOTE EL NÚMERO DE RECUPERACIÓN
                                            CUANDO SEA REDIRECCIONADO A LA PÁGINA DE
                                            PAGO PARA PROXIMAS CONSULTAS.
                                        </IonLabel>
                                        <hr></hr>
                                        <IonLabel className="titulos">
                                            Indique las cantidades de certificados a
                                            expedir por cada tipo de certificado disponible:
                                        </IonLabel>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="ion-align-items-center">
                                    <IonCol className="ion-text-center p" size="12">
                                        <IonItem className="p">
                                            <IonLabel position='floating'>
                                                Nombre o razón social:
                                            </IonLabel>
                                            <IonInput disabled type='text' value={props.expediente.nombre}></IonInput>
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="ion-align-items-center">
                                    <IonCol className="ion-text-center" size="12">
                                        <IonItem>
                                            <IonLabel position='floating'>
                                                Mátricula:
                                            </IonLabel>
                                            <IonInput disabled type='text' value={props.expediente.matricula}></IonInput>
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
                                {
                                    props.expediente.certificados.map(item=>(
                                        <IonRow className="ion-align-items-center">
                                            <IonCol className="ion-text-center" size="12">

                                                    {item.tipocertificado=="CerMat"?
                                                        <IonItem>
                                                            <IonLabel position='floating'>
                                                                Certificados de Matrícula (Min.1):
                                                            </IonLabel>
                                                            <IonInput min="0" type='number' value="0" id="input_certificado" ref={valor1_search}/>
                                                        </IonItem>
                                                    :item.tipocertificado=="CerExi"?
                                                            <IonItem>
                                                                <IonLabel position='floating'>
                                                                    Certificados de Existencia (Min.1):
                                                                </IonLabel>
                                                                <IonInput min="0"  type='number' value="0" id="input_certificado" ref={valor2_search}></IonInput>
                                                            </IonItem>
                                                            :item.tipocertificado=="CerEsadl"?
                                                                <IonItem>
                                                                    <IonLabel position='floating'>
                                                                        Certificados de Esadl (Min.1):
                                                                    </IonLabel>
                                                                    <IonInput min="0"  type='number' value="0" id="input_certificado" ref={valor3_search}></IonInput>
                                                                </IonItem>
                                                                        :item.tipocertificado=="CerPro"?
                                                                            <IonItem>
                                                                                <IonLabel position='floating'>
                                                                                    Certificados de Proponentes (Min.1):
                                                                                </IonLabel>
                                                                                <IonInput min="0"  type='number' value="0" id="input_certificado" ref={valor6_search}></IonInput>
                                                                            </IonItem>
                                                                            :''}
                                            </IonCol>
                                        </IonRow>
                                    ))
                                }
                                {/*
                                                                :item.tipocertificado=="CerLibRegMer"?
                                                                    <IonItem>
                                                                        <IonLabel position='floating'>
                                                                            Certificados de Libros (Min.1):
                                                                        </IonLabel>
                                                                        <IonInput  type='number' value="0" ref={valor4_search}></IonInput>
                                                                    </IonItem>

                                                                    :item.tipocertificado=="CerLibRegEsadl"?
                                                                        <IonItem>
                                                                            <IonLabel position='floating'>
                                                                                Certificados de Libros (Min.1):
                                                                            </IonLabel>
                                                                            <IonInput  type='number' value="0" ref={valor5_search}></IonInput>
                                                                        </IonItem>
                                                                        */}
                            </IonCard>
                            <IonRow className="ion-align-items-center">
                                <IonCol className="ion-text-center" size="6">
                                    <IonButton expand='block' fill='outline' onClick={()=>{enviar_datos()}}>
                                        Generar
                                    </IonButton>
                                </IonCol>
                                <IonCol className="ion-text-center" size="6">
                                    <IonButton expand='block' fill='outline' color='danger' onClick={props.dismissModal}>
                                        Cerrar
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-align-items-center">
                                <IonCol className="ion-text-center" size="12">
                                        <IonButton expand='block' fill='outline' color='warning' onClick={()=>{recuperar_certificado()}}>
                                            Recuperar certificado
                                        </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </React.Fragment>

    );
};

export default ModalFirstCertificate;
