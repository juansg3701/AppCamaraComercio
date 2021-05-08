import React, { useContext } from 'react';
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
    IonIcon, IonToolbar, IonItem, IonLabel, IonInput, IonCard
} from '@ionic/react';
import {chevronBack} from "ionicons/icons";
import {expedientes} from "../data/expedientes";
import ConfecamarasContext from "../data/confecamaras";

interface modalSecondCertificate {
    expediente: expedientes;
    dismissModal: () => void;
}

const ModalSecondCertificate: React.FC<modalSecondCertificate> = (props) => {

    const confecamaras = useContext(ConfecamarasContext)

    const enviar_datos=()=>{
        props.dismissModal();
    }

    return (
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
                                            Tipo de certificado (*):
                                        </IonLabel>
                                        <IonInput  type='number' defaultValue="0"></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-align-items-center">
                                <IonCol className="ion-text-center" size="12">
                                    <IonItem>
                                        <IonLabel position='floating'>
                                            Explique la certificación que necesita (*):
                                        </IonLabel>
                                        <IonInput  type='number' defaultValue="0"></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-align-items-center">
                                <IonCol className="ion-text-center" size="12">
                                    <IonItem>
                                        <IonLabel position='floating'>
                                            Cantidad (*):
                                        </IonLabel>
                                        <IonInput  type='number' defaultValue="0"></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="6">
                                <IonButton expand='block' fill='outline'>
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
    );
};

export default ModalSecondCertificate;
