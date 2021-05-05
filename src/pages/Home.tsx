import {
    IonCard,
    IonCol,
    IonContent, IonFooter,
    IonGrid,
    IonHeader, IonImg,
    IonLabel,
    IonPage, IonRouterLink,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import  './Home.css';
import {card} from 'ionicons/icons';
import React, {useContext} from "react";
import itemContext from "../data/capacitation";

const Home: React.FC = () => {

    const itemsCtxt = useContext(itemContext);


// @ts-ignore
// @ts-ignore
return (
<IonPage>
<IonHeader>
    <IonToolbar>
        <IonTitle class="ion-text-left">
            CCS
        </IonTitle>
    </IonToolbar>
</IonHeader>
<IonContent fullscreen>
<IonGrid>
  <IonRow className="ion-align-items-center">
      <IonCol className="ion-text-center">
          <IonCard >
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
    {/*
    <IonRow>
        <IonCol>
            <IonButton onClick={()=>{prueba()}}>boton de prueba</IonButton>
        </IonCol>
    </IonRow>
    */}

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
          <IonRouterLink href="https://www.facebook.com/camarastereo/">
              <img src="assets/img/radio.png" height="50" width="50"/>
              <br></br>
              Emisora virtual
          </IonRouterLink>
      </IonCol>
  </IonRow>
  <IonCol>
      <IonRow>
      </IonRow>
  </IonCol>
  <IonRow>
      <IonCol size="12">
      </IonCol>
      {/*  -   {posts.length} -*/}

  {itemsCtxt.capacitation.map((item,key) => (

      <IonCard className={card}>
      <IonRow key={key} className="ion-align-items-center">
              <IonCol className="ion-text-center" size="4">
                  <IonImg src={item.featured_media}/>
              </IonCol>
          <IonCol size="8">
              {item.title.rendered}

          </IonCol>
      </IonRow>
      </IonCard>
  ))}
  </IonRow>

</IonGrid>
</IonContent>
<IonFooter>
</IonFooter>
</IonPage>
);
};

export default Home;
