import React, {useState} from 'react';

export interface capacitation {
    id: string;
    title: any;
    featured_media: string;
    guid: any;
}

export interface CapacitationContextModel {
    capacitation: capacitation[];

    //obtenerDatos: ()=>void;
}

const CapacitationContext = React.createContext<CapacitationContextModel>({
    capacitation: [],

});

export default CapacitationContext;
