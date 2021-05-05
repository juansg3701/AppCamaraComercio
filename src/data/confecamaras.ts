import React from "react";
import {nombres} from "./nombres";
import {recibos} from "./recibos";
import {radicados} from "./radicados";

export type typesQuerys = 'radicado' | 'recibo';
export interface confecamaras {
    token: string;
}
export interface ConfecamarasContextModel {
    token: string;
    names: nombres[];
    recibos: recibos;
    radicados: radicados;
    solicitarToken:()=>void;
    consultarNombre:(nombre: string)=>Promise<nombres[]>;
    consultarTramite:(tipo: typesQuerys,valor:string)=>void;
}
const ConfecamarasContext = React.createContext<ConfecamarasContextModel>({
    token:"",
    names:[],
    recibos:<recibos>{},
    radicados:<radicados>{},
    solicitarToken: () => {},
    consultarNombre:(nombre)=><Promise<nombres[]>>{},
    consultarTramite:(tipo,valor)=>{},

});

export default ConfecamarasContext;
