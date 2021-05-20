import React, {useContext, useRef, useState} from "react";
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
    IonDatetime, IonCheckbox
} from "@ionic/react";
import  '../Home.css';
import { chevronBack, informationCircle } from 'ionicons/icons';
import ModalInformation from "../../components/ModalInformation";
import ConfecamarasContext, {typeDocument} from "../../data/confecamaras";
import {useHistory} from "react-router";
import ModalPrivacy from "../../components/ModalPrivacy";
import ModalDatatreatment from "../../components/ModalDatatreatment";

const SignupCCS: React.FC = ()=>{
    const [stateModalPrivacy,setStateModalPrivacy] = useState("");
    const [stateModalData,setStateModalData] = useState("");
    const [toastMsg, setToast]= useState<string>();
    const [checked, setChecked] = useState(false);
    const history= useHistory()
    const openCompleteModalPrivacy = (valor:number) => {
        let message="";
        setStateModalPrivacy("1");
    };
    const closeModalPrivacy = () => {
        setStateModalPrivacy("");
    };
    const openCompleteModalData = (valor:number) => {
        let message="";
        setStateModalData("1");
    };
    const closeModalData = () => {
        setStateModalData("");
    };
    const confecamaras = useContext(ConfecamarasContext)
    const tipo_documento=useRef<HTMLIonSegmentElement>(null)
    const documento_search=useRef<HTMLIonInputElement>(null)
    const nombre1_search= useRef<HTMLIonInputElement>(null)
    const nombre2_search= useRef<HTMLIonInputElement>(null)
    const apellido1_search= useRef<HTMLIonInputElement>(null)
    const apellido2_search= useRef<HTMLIonInputElement>(null)
    const correo_search= useRef<HTMLIonInputElement>(null)
    const celular_search= useRef<HTMLIonInputElement>(null)
    const fecha_nacimiento_search= useRef<HTMLIonDatetimeElement>(null)
    const fecha_expedicion_search= useRef<HTMLIonDatetimeElement>(null)

    const registrarse=()=>{
        const tipo_documento_send= tipo_documento.current?.value as typeDocument
        const documento_send= documento_search.current?.value as string
        const nombre1_send= nombre1_search.current?.value as string
        const nombre2_send= nombre2_search.current?.value as string
        const apellido1_send= apellido1_search.current?.value as string
        const apellido2_send= apellido2_search.current?.value as string
        const correo_send= correo_search.current?.value as string
        const celular_send= celular_search.current?.value as string
        const fecha_nacimiento_send= fecha_nacimiento_search.current?.value as string
        const fecha_expedicion_send= fecha_expedicion_search.current?.value as string


        if(checked){
            if(documento_send && nombre1_send && apellido1_send && apellido2_send &&correo_send && celular_send
                && fecha_nacimiento_send && fecha_expedicion_send){
                let verificacion = confecamaras.solicitarRegistro(tipo_documento_send ,documento_send,nombre1_send, nombre2_send,
                    apellido1_send,apellido2_send,correo_send,celular_send,fecha_nacimiento_send,fecha_expedicion_send)
                verificacion.then(value => {
                    console.log(value)
                    switch (value) {
                        case "0000":
                            history.replace('/messagesuccess')
                            break;
                        case "9996":
                            setToast("Solicitud ya existe y está confirmada")
                            break;
                        case "9997":
                            setToast("Solicitud ya existe y no está confirmada")
                            break;
                        default:
                            setToast("Verifique los datos ingresados")
                            break;
                    }
                })
            }else{
                setToast("Por favor llene todos los campos correctamente")
            }
        }else{
            setToast("Por favor acepte la autorización de datos para continuar")
        }

    }
    return(
        <React.Fragment>
            <IonModal isOpen={stateModalPrivacy!=""}>
                <ModalPrivacy dismissModal={closeModalPrivacy}></ModalPrivacy>
            </IonModal>
            <IonModal isOpen={stateModalData!=""}>
                <ModalDatatreatment dismissModal={closeModalData}></ModalDatatreatment>
            </IonModal>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={5000}
                      onDidDismiss={()=>{setToast("")}}/>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-left">
                            <IonRouterLink className="color" href="/login">
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
                                    Registro
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonLabel className="texto">
                                    Seleccione el tipo de documento...
                                </IonLabel>
                                <IonSegment color="danger"  ref={tipo_documento}>
                                    <IonSegmentButton value='cedula' >
                                        <IonLabel>Cédula:</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='nit'>
                                        <IonLabel>Nit:</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Ingrese el documento...
                                    </IonLabel>
                                    <IonInput  type='text' ref={documento_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Nombre No1...
                                    </IonLabel>
                                    <IonInput  type='text' ref={nombre1_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Nombre No2...
                                    </IonLabel>
                                    <IonInput  type='text' ref={nombre2_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Apellido No1...
                                    </IonLabel>
                                    <IonInput  type='text' ref={apellido1_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Apellido No2...
                                    </IonLabel>
                                    <IonInput  type='text' ref={apellido2_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Ingrese el correo...
                                    </IonLabel>
                                    <IonInput  type='email' ref={correo_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Ingrese el celular...
                                    </IonLabel>
                                    <IonInput  type='number' ref={celular_search}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Fecha de nacimiento...
                                    </IonLabel>
                                    <IonDatetime ref={fecha_nacimiento_search} displayFormat="YYYY/MM/DD" pickerFormat="YYYYMMDD" />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonItem>
                                    <IonLabel position="floating">
                                        Fecha de expedicion cédula...
                                    </IonLabel>
                                    <IonDatetime ref={fecha_expedicion_search} displayFormat="YYYY/MM/DD" pickerFormat="YYYYMMDD" />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="2">
                                    <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                            </IonCol>
                            <IonCol className="ion-text-justify" size="10">
                                Al continuar con su solicitud de registro,
                                    <b>USTED AUTORIZA</b> a la <b>CAMARA DE COMERCIO DE SOGAMOSO</b> para
                                    hacer uso de la información que ha incluido en este
                                    formulario para los fines que la entidad considere
                                    necesarios en desarrollo de sus funciones registrales,
                                    tal y como se puede evidenciar en la siguiente <IonRouterLink onClick={()=>{openCompleteModalPrivacy(1)}}> Declaración
                                de privacidad </IonRouterLink> y en las<IonRouterLink onClick={()=>{openCompleteModalData(0)}}> Políticas de Tratamiento de la Información</IonRouterLink>
                            </IonCol>

                        </IonRow>
                        <IonCol>
                            <IonRow></IonRow>
                        </IonCol>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="12">
                                <IonButton expand='block' fill='outline' color='danger' onClick={()=>{registrarse()}}>
                                    Registrarse
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    );
};
export default SignupCCS;
