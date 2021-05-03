import React, {useEffect, useState} from 'react';
import CapacitationContext, {capacitation, CapacitationContextModel} from './capacitation';
import {apiwp} from "../api";

const CapatitationContextProvider: React.FC = (props) => {

    const [capacitation, setCapacitations] = useState<capacitation[]>([]);
    const [image, setImage] = useState<capacitation[]>([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        obtenerDatos();
/*
        fetch("https://camarasogamoso.org/wp-json/wp/v2/posts/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCapacitations(result);

                    capacitation.forEach(item=>{
                        if (item.featured_media!="0"){
                            const images =  fetch("https://camarasogamoso.org/wp-json/wp/v2/media/"+item.featured_media)
                                .then(rest => rest.json()).then(
                                    (result)=>{
                                        //console.log(result.guid.rendered)
                                        item.featured_media=result.guid.rendered;
                                        //console.log(item.featured_media)
                                        setCapacitations(actCapacitations=>{
                                            const updateCapacitions = [...actCapacitations];
                                            const selectedCapacitionIndex = capacitation.findIndex(cap => cap.id === item.id);
                                            const updatedCapacition = {...updateCapacitions[selectedCapacitionIndex], featured_media: result.guid.rendered};
                                            updateCapacitions[selectedCapacitionIndex] = updatedCapacition;
                                            return updateCapacitions;
                                        });
                                    })
                        }


                    })

                    // console.log(capacitation.map(item =>(item.id)));
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

 */


    }, [])

    const consumirCapa=()=>{
        return apiwp.get('posts/').
        then((resp)=>resp.data).catch((error)=>error.message);
    }
    const getImage=(number:string)=>{
        return apiwp.get(`media/${number}`).
        then((resp)=>resp.data).catch((error)=>error.message);
    }
    const obtenerDatos= async ()=>{
        const data = await fetch("https://camarasogamoso.org/wp-json/wp/v2/posts/")
        const datas = await data.json();
        setCapacitations(datas);
/*
        capacitation.forEach(item=>{
            if (item.featured_media!="0"){

                const images =  fetch("https://camarasogamoso.org/wp-json/wp/v2/media/"+item.featured_media)
                    .then(rest => rest.json()).then(
                        (result)=>{
                            //console.log(result.guid.rendered)
                            item.featured_media=result.guid.rendered;
                            //console.log(item.featured_media)
                            setCapacitations(actCapacitations=>{
                                const updateCapacitions = [...actCapacitations];
                                const selectedCapacitionIndex = capacitation.findIndex(cap => cap.id === item.id);
                                const updatedCapacition = {...updateCapacitions[selectedCapacitionIndex], featured_media: result.guid.rendered};
                                updateCapacitions[selectedCapacitionIndex] = updatedCapacition;
                                return updateCapacitions;
                            });
                        })
            }
        })


 */

    };


    const capacitationContext: CapacitationContextModel = {
        capacitation,
        consumirCapa,
        getImage
        //obtenerDatos,
    };

    return (
        <CapacitationContext.Provider value={capacitationContext}>
            {props.children}
        </CapacitationContext.Provider>
    );
};

export default CapatitationContextProvider;
