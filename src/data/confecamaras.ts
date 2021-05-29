import React from "react";
import {nombres} from "./nombres";
import {recibos} from "./recibos";
import {radicados} from "./radicados";
import {expedientes} from "./expedientes";

export type typesQuerys = 'radicado' | 'recibo';
export type  typesProceedings = 'identificacion' | 'matricula' | 'nombre';
export type typeDocument = 'cedula' | 'nit';
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
    consultarTramite:(tipo: typesQuerys,valor:string)=>Promise<number>;
    consultarExpediente:(tipo: typesProceedings, valor: string)=>Promise<number>;
    solicitarCertificado:(expediente: expedientes, valor1: number, valor2: number, valor3:number,
                          valor4: number, valor5: number, valor6: number)=>void;

    autenticarUsuarioRegistrado:(identificacion: string, correo: string, clave: string, celular: string)=>Promise<string>;
    solicitarRegistro:(tipo_documento: typeDocument,identificacion:string, nombre1:string, nombre2:string, apellido1:string,
                       apellido2:string, correo:string, celular:string, fecha_nacimiento: string,
                       fecha_expedicion: string)=>Promise<string>;
    restaurarClaveRegistro:(documento: string, correo: string)=>Promise<string>

    reportarTransaccion:(expediente:expedientes,valor1: number,valor2:number,valor3: number,
    valor4: number, valor5: number, valor6: number)=>Promise<string>
}
const ConfecamarasContext = React.createContext<ConfecamarasContextModel>({
        token: "",
        names: [],
        recibos: <recibos>{},
        radicados: <radicados>{},
        expedientes: [],
        solicitarToken: () => {
        },
        consultarNombre: (nombre) => <Promise<nombres[]>>{},
        consultarTramite: (tipo, valor) => <Promise<0>>{
        },
        consultarExpediente: (tipo, valor) =><Promise<0>> {
        },
        solicitarCertificado: (expediente, valor1, valor2, valor3,
                               valor4, valor5, valor6) => {
        },
        autenticarUsuarioRegistrado: (identificacion, correo, clave, celular) => <Promise<"">>{},
        solicitarRegistro:(tipo_documento,identificacion,nombre1,nombre2,apellido1,apellido2,
                           correo,celular,fecha_nacimiento,fecha_expedicion)=><Promise<"">>{},
        restaurarClaveRegistro:(documento,correo)=><Promise<"">>{},
        reportarTransaccion:(expediente,valor1,valor2,valor3,
                             valor4,valor5,valor6)=><Promise<"">>{}

    }
);

export default ConfecamarasContext;
