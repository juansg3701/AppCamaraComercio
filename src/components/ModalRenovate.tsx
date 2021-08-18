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
    IonIcon, IonToolbar, IonItem, IonLabel, IonInput, IonCard, IonToast
} from '@ionic/react';
import {chevronBack} from "ionicons/icons";
import {expedientes} from "../data/expedientes";
import ConfecamarasContext from "../data/confecamaras";

interface modalFisrtCertificate {
    expediente: expedientes;
    dismissModal: () => void;
}

const ModalRenovate: React.FC<modalFisrtCertificate> = (props) => {

    const confecamaras = useContext(ConfecamarasContext)
    const valor1_search= useRef<HTMLIonInputElement>(null)
    const valor2_search= useRef<HTMLIonInputElement>(null)
    const valor3_search= useRef<HTMLIonInputElement>(null)
    const valor4_search= useRef<HTMLIonInputElement>(null)
    const valor5_search= useRef<HTMLIonInputElement>(null)
    const valor6_search= useRef<HTMLIonInputElement>(null)

    const [toast,setToast] = useState<string>("")

    const enviar_datos=()=>{
        const valor1_send=valor1_search.current?.value as number;
        const valor2_send= valor2_search.current?.value as number;
        const valor3_send= valor3_search.current?.value as number;
        const valor4_send=valor4_search.current?.value as number;
        const valor5_send= valor5_search.current?.value as number;
        const valor6_send= valor6_search.current?.value as number;

        if(valor1_send>0){
            //confecamaras.reportarTransaccion(props.expediente, valor1_send,valor2_send,
              //  valor3_send, valor4_send, valor5_send, valor6_send);
            props.dismissModal();
        }else{
            setToast("Por favor digite los campos")
        }
    }

    return (
        <React.Fragment>
            <IonToast isOpen={toast!=""} message={toast} duration={3000} onDidDismiss={()=>{setToast("")}}></IonToast>
            <IonContent>
                <IonGrid className='ion-no-padding'>
                    <IonRow>
                        <IonCol className='ion-text-center'>
                            <IonToolbar>
                                <IonTitle class="ion-text-center">
                                    <h2>Renovaciones</h2>
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
                                            Indique los siguientes datos:
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
                                <IonRow className="ion-align-items-center">
                                    <IonCol className="ion-text-center" size="12">
                                        <IonItem>
                                            <IonLabel position='floating'>
                                                No. de empleados:
                                            </IonLabel>
                                            <IonInput  type='number'></IonInput>
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
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
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </React.Fragment>

    );
};

export default ModalRenovate;
