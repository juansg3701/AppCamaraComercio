import React, {useState} from 'react';

export interface capacitation {
    id: string;
    title: any;
    featured_media: string;
    guid: any;
}

export interface CapacitationContextModel {
    capacitation: capacitation[];
    consumirCapa: ()=>void;
    getImage: (number:string)=>void;
    //obtenerDatos: ()=>void;
}

const CapacitationContext = React.createContext<CapacitationContextModel>({
    capacitation: [],
    consumirCapa: ()=>{},
    getImage: ()=>{}
    //obtenerDatos: ()=>{}
});

export default CapacitationContext;
