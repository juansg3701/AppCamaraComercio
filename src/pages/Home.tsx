import {
    IonButton, IonCard,
    IonCol,
    IonContent, IonFooter,
    IonGrid,
    IonHeader, IonIcon, IonImg,
    IonItem, IonItemDivider, IonLabel,
    IonPage, IonRouterLink, IonRouterOutlet,
    IonRow, IonSlide, IonSlides,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import  './Home.css';
import {card, colorFill, documentText, image} from 'ionicons/icons';
import apiwp from '../api/wordpressApi';
import React, {useContext, useEffect, useState} from "react";
import itemContext,{capacitation} from "../data/capacitation";
import Logo from "../components/Logo";
import axios from "axios";
import { useHistory } from 'react-router-dom';
const Home: React.FC = () => {

/*
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState<capacitation>();

    const itemsCtxt = useContext(itemContext);

        // Note: the empty deps array [] means
        // this useEffect will run once
        // similar to componentDidMount()
        useEffect(() => {
            fetch("https://camarasogamoso.org/wp-json/wp/v2/categories/")
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                        itemsCtxt.items=result;
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }, [])
*/
    const history = useHistory();
    const itemsCtxt = useContext(itemContext);
    const [capaci, setCapaci] = useState([]);
    const [capaci2, setCapaci2] = useState([]);
    let capa2:[any]=[{}];
    const variable=[];
    /*
    useEffect(()=>{
        getCapa()
    },[]);

    const getCapa = async ()=>{
        setCapaci( await apiwp.getCapa())
        capaci.map( async (item,key)=>{
            const {id,featured_media,title}= item
            //siempre poner await a aplciacion externa
            if(featured_media!="0"){
            const {guid} = await apiwp.getImage(featured_media)
               //capaci.push(...capaci,'title');
                capa2.push({'featured_media':guid.rendered,'title':title,id})
                //console.log(key);
                for (let i=0;i<capaci.length;i++){

                    variable.push(id,guid.rendered)
                }
            /*
                setCapaci(actCapitations=>{
                    const updateCapacitions = [...actCapitations];
                    const selectedCapacitionIndex = capaci.findIndex(cap=>cap===id);
                    const updatedCapacition = {...updateCapacitions[id], "featured_media": guid.rendered};
                    updateCapacitions[selectedCapacitionIndex] = updatedCapacition;
                    return updateCapacitions;
                });
                console.log(capa2)



            }
            //apiwp.getImage(item.featured_media)
        });
    }
    */
    const defaultPosts:capacitation[] = [];
    const [posts, setPosts]= useState(defaultPosts);

        useEffect(() => {
            axios
                .get<capacitation[]>("https://camarasogamoso.org/wp-json/wp/v2/posts/")
                .then(response => {
                    setPosts(response.data);
                });

        }, []);

    const prueba=()=> {
        posts.map(async (item) => {
            //siempre poner await a aplciacion externa
            if (item.featured_media != "0") {
                const {guid} = await apiwp.getImage(item.featured_media)
                const a = posts.findIndex(cap => cap.id === item.id);
                posts[a].featured_media = guid.rendered;
                setPosts(actCapitations => {
                    const updateCapacitions = [...actCapitations];
                    const selectedCapacitionIndex = posts.findIndex(cap => cap.id === item.id);
                    const updatedCapacition = {
                        ...updateCapacitions[selectedCapacitionIndex],
                        featured_media: guid.rendered
                    };
                    updateCapacitions[selectedCapacitionIndex] = updatedCapacition;
                    return updateCapacitions;
                });
            }
        });
        history.replace('/information');
        console.log(posts[0].featured_media);
    }


//    console.log(posts)
//console.log(posts.length);

// @ts-ignore
// @ts-ignore
return (
<IonPage>
<IonHeader>
    <IonToolbar>
        <IonTitle class="ion-text-center">
            App móvil
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

  {posts.map((item) => (

      <IonCard className={card}>
      <IonRow key={item.id} className="ion-align-items-center">
              <IonCol className="ion-text-center" size="4">
                  <IonImg src={item.featured_media}/>
              </IonCol>
          <IonCol size="8">
              {item.title.rendered}
              <br/>
              {item.featured_media}
              <br/>
              {itemsCtxt.capacitation.length}
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
