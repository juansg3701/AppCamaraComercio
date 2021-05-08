import React from "react";
import {nombres} from "./nombres";
import {recibos} from "./recibos";
import {radicados} from "./radicados";
import {expedientes} from "./expedientes";

export type typesQuerys = 'radicado' | 'recibo';
export type  typesProceedings = 'identificacion' | 'matricula' | 'nombre';
export interface confecamaras {
    token: string;
}
export interface ConfecamarasContextModel {
    token: string;
    names: nombres[];
    recibos: recibos;
    radicados: radicados;
    expedientes: expedientes[];
    solicitarToken:()=>void;
    consultarNombre:(nombre: string)=>Promise<nombres[]>;
    consultarTramite:(tipo: typesQuerys,valor:string)=>void;
    consultarExpediente:(tipo: typesProceedings, valor: string)=>void;
    solicitarCertificado:(expediente: expedientes, valor1: number, valor2: number, valor3:number)=>void;
}
const ConfecamarasContext = React.createContext<ConfecamarasContextModel>({
    token:"",
    names:[],
    recibos:<recibos>{},
    radicados:<radicados>{},
    expedientes:[],
    solicitarToken: () => {},
    consultarNombre:(nombre)=><Promise<nombres[]>>{},
    consultarTramite:(tipo,valor)=>{},
    consultarExpediente:(tipo, valor)=>{},
    solicitarCertificado:(expediente, valor1, valor2, valor3)=>{}

});

export default ConfecamarasContext;
