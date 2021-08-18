import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonContent, IonFab, IonFabButton, IonIcon, IonPage, IonRouterLink, IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CapatitationContextProvider from "./data/CapatitationContextProvider";
import Information from "./pages/information/Information";
import Process from "./pages/process/Process";
import Certificate from "./pages/certificate/Certificate";
import Renovate from "./pages/Renovate/Renovate";
import Names from "./pages/Names/Names";
import Qprocess from "./pages/Qprocess/Qprocess";
import ConfecamarasContextProvider from "./data/ConfecamarasContextProvider";
import QueryNames from "./pages/Names/QueryNames";
import React from "react";
import ResultsReceipt from "./pages/Qprocess/ResultsReceipt";
import ResultsRadicate from "./pages/Qprocess/ResultsRadicate";
import QueryProceedings from "./pages/certificate/QueryProceedings";
import LoginStart from "./pages/login/LoginStart";
import Session from "./pages/login/Session";
import SignupCCS from "./pages/login/SignupCCS";
import MessageSuccess from "./pages/login/MessageSuccess";
import ForgetPassword from "./pages/login/ForgetPassword";
import QueryProceedingsRenovate from "./pages/Renovate/QueryProceedingsRenovate";
import Rcertificate from "./pages/Rcertificate/Rcertificate";
import QueryRcertificate from "./pages/Rcertificate/QueryRcertificate";
const App: React.FC = () => (
  <IonApp>
    <IonContent>
      {/*
      <IonFab vertical="top" horizontal="end" slot="fixed">

          <iframe width="120" height="60" src="https://cloudoledgo.com:2000/AudioPlayer/ccs?" className="border:5"></iframe>

      </IonFab>
      */}
    </IonContent>
    <IonReactRouter>
      <IonRouterOutlet>
        <CapatitationContextProvider>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
          <Route exact path='/information'>
            <Information/>
          </Route>
          <ConfecamarasContextProvider>
            <Route exact path='/process'>
              <Process/>
            </Route>
          <Route exact path='/certificate'>
            <Certificate/>
          </Route>
          <Route exact path='/renovate'>
            <Renovate/>
          </Route>
          <Route exact path='/names'>
            <Names/>
          </Route>
          <Route exact path='/querynames'>
              <QueryNames/>
          </Route>
          <Route exact path='/qprocess'>
            <Qprocess/>
          </Route>
          <Route exact path='/login'>
            <LoginStart/>
          </Route>
          <Route exact path='/session'>
            <Session/>
          </Route>
          <Route exact path='/signup'>
            <SignupCCS/>
          </Route>
          <Route exact path='/messagesuccess'>
            <MessageSuccess/>
          </Route>
            <Route exact path='/recuperatecertificate'>
              <QueryRcertificate/>
            </Route>
            <Route exact path='/rcertificate'>
              <Rcertificate/>
            </Route>
            <Route exact path='/forgetpassword'>
              <ForgetPassword/>
            </Route>
            <Route exact path='/queryproceedingsrenovate'>
              <QueryProceedingsRenovate/>
            </Route>

            <Route exact path='/resultsreceipt'>
              <ResultsReceipt/>
            </Route>
            <Route exact path='/resultsradicate'>
              <ResultsRadicate/>
            </Route>
            <Route exact path='/queryproceedings'>
              <QueryProceedings/>
            </Route>
          </ConfecamarasContextProvider>
        </CapatitationContextProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);



export default App;
