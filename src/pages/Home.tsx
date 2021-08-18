import {
    IonButton,
    IonCard,
    IonCol,
    IonContent, IonFab, IonFabButton, IonFooter,
    IonGrid,
    IonHeader, IonIcon, IonImg,
    IonLabel, IonModal,
    IonPage, IonRouterLink,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import  './Home.css';
import {card, informationCircle} from 'ionicons/icons';
import React, {useContext, useState} from "react";
import itemContext from "../data/capacitation";
import wordpressApi from "../api/wordpressApi";
import ConfecamarasContext from "../data/confecamaras";
import ModalAbout from "../components/ModalAbout";
import ModalInformation from "../components/ModalInformation";

const Home: React.FC = () => {
    const [stateModal,setStateModal] = useState("");
    const itemsCtxt = useContext(itemContext);
    const itemsCtxt2 = useContext(ConfecamarasContext);

    const openCompleteModal = () => {
        let message="2021";
        setStateModal(message);
    };
    const closeModal = () => {
        setStateModal("");
    };
// @ts-ignore
// @ts-ignore
return (
    <React.Fragment>
        <IonModal isOpen={stateModal!=""}>
            <ModalAbout message={stateModal} dismissModal={closeModal}></ModalAbout>
        </IonModal>
<IonPage>
<IonHeader>
    <IonToolbar>
        <IonTitle class="ion-text-left">
            CCS
        </IonTitle>
    </IonToolbar>
</IonHeader>
<IonContent fullscreen>
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={()=>{openCompleteModal()}}>
            <IonIcon icon={informationCircle} />
        </IonFabButton>
    </IonFab>
<IonGrid>
  <IonRow className="ion-align-items-center">
      <IonCol size="12">
          <IonCard>
              <IonImg src="assets/img/logo.jpg"/>
          </IonCard>
      </IonCol>
  </IonRow>
      <IonRow className="ion-align-items-center">
          <IonCol className="ion-text-center" size="12">
            <IonLabel className="titulos">
            Cámara de Comercio de Sogamoso
            </IonLabel>
          </IonCol>
      </IonRow>
    <IonCol>
        <IonRow></IonRow>
    </IonCol>
  <IonRow className="ion-align-items-center">
      <IonCol className="ion-text-center" size="4" >
          <IonRouterLink href="/information">
              <img src="assets/img/info.png" height="50" width="50"/>
              <br></br>
              Información
          </IonRouterLink>
      </IonCol>
      <IonCol className="ion-text-center" size="4">
          <IonRouterLink href="/process">
              <img src="assets/img/tramites.png" height="50" width="50"/>
              <br></br>
              Trámites registrales
          </IonRouterLink>
      </IonCol>
      <IonCol className="ion-text-center" size="4">
              <iframe width="85" height="60" src="https://cloudoledgo.com:2000/AudioPlayer/ccs?"
              className="emisora"></iframe>
              <br></br>
          <IonRouterLink>
              Emisora virtual
          </IonRouterLink>
      </IonCol>
  </IonRow>
  <IonCol>
      <IonRow>
      </IonRow>
  </IonCol>
    <IonRow>
        <IonCol size="12" className="ion-text-center">
            <IonLabel className="titulos">
                Capacitaciones
            </IonLabel>
        </IonCol>
        <IonCol size="12">
        </IonCol>
        <IonCol size="12" className="ion-text-center">
            <IonCard>
                <IonRouterLink href="https://campusvirtualccs.org/">
                    <IonImg src="assets/img/campus.jpg"/>
                </IonRouterLink>
            </IonCard>
        </IonCol>
    </IonRow>
    <IonCol>
        <IonRow>
        </IonRow>
    </IonCol>
  <IonRow>
      <IonCol size="12">
      </IonCol>
      <IonCol size="12" className="ion-text-center">
          <IonLabel className="titulos">
              Noticias
          </IonLabel>
      </IonCol>
      {/*  -   {posts.length} -*/}
      {itemsCtxt.capacitation!=undefined?
          itemsCtxt.capacitation.map((item,key) => (

                  <IonCard className={card}>
                      <IonRow key={key} className="ion-align-items-center">
                          <IonRouterLink href={item.link}>
                              <IonCol className="ion-text-center" size="4">
                                  <IonImg src={item.featured_media}/>
                              </IonCol>
                              <IonCol size="8">
                                  {item.title.rendered}
                              </IonCol>
                          </IonRouterLink>
                      </IonRow>
                  </IonCard>
          )): <IonCol size="12" className="ion-text-center">
              <IonLabel className="titulos-busquedas">
                  No hay publicaciones
              </IonLabel>
          </IonCol>

      }

  </IonRow>

</IonGrid>
</IonContent>
<IonFooter>
</IonFooter>
</IonPage>
    </React.Fragment>
);
};

export default Home;
