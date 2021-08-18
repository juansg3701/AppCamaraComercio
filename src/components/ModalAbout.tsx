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

interface ModalAboutProps {
    message: string;
    dismissModal: () => void;
}

const ModalAbout: React.FC<ModalAboutProps> = (props) => {

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">
                                <h2>Acerca de</h2>
                            </IonTitle>
                        </IonToolbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"/>
                    <IonCol className='ion-text-center ion-no-padding' size="10">
                        <IonText color='medium'>
                            <p className="ion-text-center">
                                Política de Datos personales de Cámara de Comercio de Sogamoso
                            </p>
                            <p className="ion-text-center">
                                a). Aviso de Privacidad:
                                <br/>
                                <IonRouterLink href="http://camarasogamoso.org/wp-content/uploads/2017/10/Aviso_de_privacidad.pdf">
                                    http://camarasogamoso.org/wp-content/uploads/2017/10/Aviso_de_privacidad.pdf
                                </IonRouterLink>
                            </p>
                            <p className="ion-text-center">
                                b). Política de Tratamiento de la Información:
                                <br/>
                                <IonRouterLink href="http://camarasogamoso.org/wp-content/uploads/2017/10/Politica_Tratamiento_Informacion.pdf">
                                    http://camarasogamoso.org/wp-content/uploads/2017/10/Politica_Tratamiento_Informacion.pdf
                                </IonRouterLink>
                            </p>
                            <p className="ion-text-center">
                                c). Manual de políticas y procedimientos de seguridad de la información:
                                <br/>
                                <IonRouterLink href="http://camarasogamoso.org/wp-content/uploads/2017/10/Manual_Politicas_y_Procedimientos_Seguridad_Informacion.pdf">
                                    http://camarasogamoso.org/wp-content/uploads/2017/10/Manual_Politicas_y_Procedimientos_Seguridad_Informacion.pdf
                                </IonRouterLink>
                            </p>
                            <hr/>
                            <p className="ion-text-center">
                                Desarrollado por:
                            </p>
                            <img src="assets/img/logo_uptc.jpg" height="100" width="200"/>
                            <p className="ion-text-center">
                                Universidad Pedagógica y Tecnológica de Colombia
                            </p>
                            <br/>
                            <p className="ion-text-center">
                                Desarrollador:
                            </p>
                            <p className="ion-text-center">
                                Juan José Sánchez Gómez
                            </p>
                            <br/>
                            <p className="ion-text-center">
                                Director:
                            </p>
                            <p className="ion-text-center">
                                Ingeniero Camilo Harvey Bohorquez Dallos
                            </p>
                            <p className="ion-text-center">
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

export default ModalAbout;
