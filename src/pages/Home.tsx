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
      <IonCol size="12">
      </IonCol>
      <IonCol size="12" className="ion-text-center">
          <IonLabel className="titulos">
              Noticias - Capacitaciones
          </IonLabel>
      </IonCol>
      {/*  -   {posts.length} -*/}

  {itemsCtxt.capacitation.map((item,key) => (

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
