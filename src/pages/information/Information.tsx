import React from "react";
import {
    IonCard,
    IonCol, IonContent, IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg, IonItemDivider,
    IonPage, IonRouterLink,
    IonRow,
    IonTitle,
    IonToolbar,
    IonLabel
} from "@ionic/react";
import  '../Home.css';
import { chevronBack } from 'ionicons/icons';

const Information: React.FC = ()=>{
  return(
      <IonPage>

          <IonHeader>
              <IonToolbar>
                  <IonTitle class="ion-text-left">
                      <IonRouterLink className="color" href="/home">
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
                    Información
                    </IonLabel>
                </IonCol>
            </IonRow>

              <IonRow className="ion-align-items-center">
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://camarasogamoso.org/asesoria-empresarial/#crear" >
                          <img src="assets/img/crear.png" height="50" width="50"/>
                          <br></br>
                          Crear empresa
                      </IonRouterLink>
                  </IonCol>
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://camarasogamoso.org/asesoria-empresarial/#empresas">
                          <img src="assets/img/servicios.png" height="50" width="50"/>
                          <br></br>
                          Servicios empresariales
                      </IonRouterLink>
                  </IonCol>
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://camarasogamoso.org/afiliados-premium/">
                          <img src="assets/img/afiliado.png" height="50" width="50"/>
                          <br></br>
                          Afiliados
                      </IonRouterLink>
                  </IonCol>
              </IonRow>
              <IonCol>
                  <IonRow>
                  </IonRow>
              </IonCol>
              <IonRow className="ion-align-items-center">
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://camarasogamoso.org/centro-de-conciliacion-y-arbitraje/">
                          <img src="assets/img/conciliacion.png" height="50" width="50"/>
                          <br></br>
                          Conciliación y arbitraje
                      </IonRouterLink>
                  </IonCol>
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://camarasogamoso.org/alquiler-de-auditorio-faova/">
                          <img src="assets/img/auditorio.png" height="50" width="50"/>
                          <br></br>
                          Auditorios
                      </IonRouterLink>
                  </IonCol>
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://camarasogamoso.org/noticias/">
                          <img src="assets/img/noticias.png" height="50" width="50"/>
                          <br></br>
                          Noticias
                      </IonRouterLink>
                  </IonCol>
              </IonRow>
              <IonCol>
                  <IonRow>
                  </IonRow>
              </IonCol>
              <IonRow className="ion-align-items-center">
                  <IonCol className="ion-text-center" size="6">
                      <IonRouterLink href="https://camarasogamoso.org/otros-programas/">
                          <img src="assets/img/sitios.png" height="50" width="50"/>
                          <br></br>
                          Sitios de interés
                      </IonRouterLink>
                  </IonCol>
                  <IonCol className="ion-text-center" size="6">
                      <IonRouterLink href="https://camarasogamoso.org/datos-de-contacto/">
                          <img src="assets/img/contacto.png" height="50" width="50"/>
                          <br></br>
                          Contáctenos
                      </IonRouterLink>
                  </IonCol>
              </IonRow>
              <IonCol>
                  <IonRow>
                  </IonRow>
              </IonCol>
              <IonRow className="ion-align-items-center">
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://www.facebook.com/camaracomerciosogamoso/">
                          <img src="assets/img/facebook.png" height="50" width="50"/>
                          <br></br>
                          Facebook
                      </IonRouterLink>
                  </IonCol>
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://twitter.com/camarasogamoso">
                          <img src="assets/img/twitter.png" height="50" width="50"/>
                          <br></br>
                          Twitter
                      </IonRouterLink>
                  </IonCol>
                  <IonCol className="ion-text-center" size="4">
                      <IonRouterLink href="https://www.instagram.com/camaradecomerciosogamoso/">
                          <img src="assets/img/instagram.png" height="50" width="50"/>
                          <br></br>
                          Instagram
                      </IonRouterLink>
                  </IonCol>
              </IonRow>
              <IonCol>
                  <IonRow>
                  </IonRow>
              </IonCol>

          </IonGrid>
          </IonContent>
      </IonPage>
  );
};
export default Information;
