import React, {useEffect, useState} from 'react';
import CapacitationContext, {capacitation, CapacitationContextModel} from './capacitation';
import {apiwp} from "../api";

const CapatitationContextProvider: React.FC = (props) => {

    const [capacitation, setCapacitations] = useState<capacitation[]>([]);

    useEffect(() => {
        obtenerDatos();
    }, [])


    const obtenerDatos=async ()=>{
        let capacitation_p:capacitation[]=[];
        let url="https://camarasogamoso.org/wp-json/wp/v2/posts?categories=44";


        await fetch(url, {
            method: 'GET',
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                capacitation_p=response;
            });
        for (let i=0;i<capacitation_p.length;i++) {
            if (capacitation_p[i].featured_media != "0") {
                const images =await fetch("https://camarasogamoso.org/wp-json/wp/v2/media/" + capacitation_p[i].featured_media)
                    .then(rest => rest.json()).then(
                        (result) => {
                            if(result.status==undefined){
                                capacitation_p[i].featured_media = "assets/img/logo.jpg";
                            }else{
                            capacitation_p[i].featured_media = result.guid.rendered;
                                 }
                        })
            }else{
                capacitation_p[i].featured_media = "assets/img/logo.jpg";
            }
        }
        setCapacitations(capacitation_p)
    }

    const capacitationContext: CapacitationContextModel = {
        capacitation,
    };

    return (
        <CapacitationContext.Provider value={capacitationContext}>
            {props.children}
        </CapacitationContext.Provider>
    );
};

export default CapatitationContextProvider;
