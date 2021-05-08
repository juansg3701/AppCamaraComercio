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
    IonIcon, IonToolbar
} from '@ionic/react';
import {chevronBack} from "ionicons/icons";

interface ModalInformationyProps {
    message: string;
    dismissModal: () => void;
}

const ModalInformation: React.FC<ModalInformationyProps> = (props) => {

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">
                                     <h2>Información</h2>
                            </IonTitle>
                        </IonToolbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"/>
                    <IonCol className='ion-text-center ion-no-padding' size="10">
                        <IonText color='medium'>
                            <p className="ion-text-justify">
                                {props.message}
                            </p>
                        </IonText>
                    </IonCol>
                    <IonCol size="1"/>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={props.dismissModal}>
                            Cerrar
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default ModalInformation;
