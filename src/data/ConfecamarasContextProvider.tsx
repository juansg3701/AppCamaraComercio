import React, {useEffect, useState} from "react";
import ConfecamarasContext, {
    confecamaras,
    ConfecamarasContextModel, typeDocument,
    typesProceedings,
    typesQuerys
} from "./confecamaras";
import {nombres} from "./nombres";
import {radicados} from "./radicados";
import {recibos} from "./recibos";
import {certificadoConsultaExpedienteMercantil, expedientes, serviciosReportarTransaccion} from "./expedientes";
import {resultados} from "./resultados";
import {recuperacionCertificado} from "./recuperacionCertificado";
//import CryptoJS from 'crypto-js';


const ConfecamarasContextProvider: React.FC = (props) => {
    const[token, setToken] = useState("");
    const[names, setNames] = useState<nombres[]>([]);
    const[recibos, setRecibos] = useState<recibos>({identificacion:"",
        nombre:"",radicado:"",recibo:"",tipotramite:"",tiporegistro: "",
        certificados:[],imagenes:[],
        servicios:[]});
    const[radicados, setRadicados] = useState<radicados>({estadofinal:"",
    identificacion:"",nombre:"",radicado:"",recibo:"",actoreparto:"",fechaestadofinal:"",fecharadicacion:"",tipotramite:""});
    const [expedientes, setExpedientes] = useState<expedientes[]>([]);
    const [consultaCertificado, setConsultaCertificado]= useState<recuperacionCertificado>({valor:"",
    urlPago:"",numerorecuperacion:"",nombre:"",idestado:"",liquidaciondetalle:[],mensajestado:""});



    const solicitarToken= async ()=>{
        let token_p="";
        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/solicitarToken";
        const json_send={
            codigoempresa:"35",
            usuariows:"appccs",
            clavews:"MHh9lHCu}H"
        }
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                setToken(response.token);
                token_p=response.token
            });
        return token_p

    }

    async function consultarNombre(nombre: string) : Promise<nombres[]>{
        let token_p = await solicitarToken();
        let nombres_a:nombres[]=[];
        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/consultarRuesRazonSocial";
        const json_send={
            codigoempresa:"35",
            usuariows:"appccs",
            token:token_p,
            palabrasbuscar:nombre
        }
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                //console.log('Success:', response)
                nombres_a=response.renglones;
            });
        setNames(nombres_a)
        return nombres_a
    }

    const consultaEstadoFinal=(valor:string)=>{
       let cadena_final="";
        switch (valor) {
            case "01":
                cadena_final=valor+" - Radicado";
                break;
            case "04":
                cadena_final=valor+" - Asignado a Estudio";
                break;
            case "05":
                cadena_final=valor+" - Devuelto";
                break;
            case "06":
                cadena_final=valor+" - Entregado al usuario";
                break;
            case "09":
                cadena_final=valor+" - Reingresado";
                break;
            case "11":
                cadena_final=valor+" - Inscrito";
                break;
            case "15":
                cadena_final=valor+" - Enviado a archivo";
                break;
            case "16":
                cadena_final=valor+" - Archivado";
                break;
            case "23":
                cadena_final=valor+" - En digitación";
                break;
            case "34":
                cadena_final=valor+" - En proceso de firma";
                break;
            case "38":
                cadena_final=valor+" - En control de calidad";
                break;
            case "39":
                cadena_final=valor+" - Desistido";
                break;
            case "99":
                cadena_final=valor+" - Anulado";
                break;
            default:
                cadena_final=valor;
                break;
        }
        return cadena_final;
    }

    const consultaTipoTramite=(valor:string)=>{
        let cadena_final="";
        switch (valor) {
            case "aceptacionesesadl":
                cadena_final="Aceptaciones Registro de ESADL";
                break;
            case "aceptacionesregmer":
                cadena_final="Aceptaciones Registro Mercantil";
                break;
            case "actualizacioncircular19":
                cadena_final="Solicitud de actualizaciona circular 19";
                break;
            case "actualizacioncircular3":
                cadena_final="Actualización Circular 3";
                break;
            case "actualizacionproponente":
                cadena_final="Actualización del registro de proponentes";
                break;
            case "cambiodomicilioproponente":
                cadena_final="Cambio de domicilio de proponentes";
                break;
            case "cancelacionfacturas":
                cadena_final="Cancelación de facturas";
                break;
            case "cancelacionmatricula":
                cadena_final="Cancelación automática de matrículas";
                break;
            case "cancelacionproponente":
                cadena_final="Cancelación del Registro de proponentes";
                break;
            case "certificadoselectronicos":
                cadena_final="Certificados desde CERPLE";
                break;
            case "certificadosespeciales":
                cadena_final="Certificados Especiales";
                break;
            case "certificadosvirtuales":
                cadena_final="Expedición de certificados a través del Portal";
                break;
            case "cobrorentasregmer":
                cadena_final="COBRO RENTAS MUNICIPALES (REGMER)";
                break;
            case "compraventa":
                cadena_final="Contratos de compraventa";
                break;
            case "constitucionesadl":
                cadena_final="Constitución de ESADL";
                break;
            case "constitucionpjur":
                cadena_final="Constitución de persona juridica";
                break;
            case "correccionesesadl":
                cadena_final="Correcciones del Registro Esadl";
                break;
            case "correccionesregmer":
                cadena_final="Correcciones del Registro Mercantil ";
                break;
            case "correccionesregpro":
                cadena_final="Correcciones del Registro proponentes";
                break;
            case "crm_alquilersalones":
                cadena_final="Tramites desde el CRM - Alquiler de salones";
                break;
            case "crm_cuotaafiliacion":
                cadena_final="Tramites desde el CRM - Cuota de afiliación";
                break;
            case "crm_inscripcionferias":
                cadena_final="Tramites desde el CRM - Inscripción a ferias";
                break;
            case "crm_inscripcionseminarios":
                cadena_final="Tramites desde el CRM - Inscripción a seminarios";
                break;
            case "crm_renovacionafiliacion":
                cadena_final="Tramites desde el CRM - Renovación de afiliación";
                break;
            case "crm_ventapublicaciones":
                cadena_final="Tramites desde el CRM -  Venta de publicaciones";
                break;
            case "desembargosesadl":
                cadena_final="Desembargos Registro de ESADL";
                break;
            case "desembargosregmer":
                cadena_final="Desembargos Registro Mercantil";
                break;
            case "dispensadorcertificados":
                cadena_final="Expedición de certificados a través del dispensador";
                break;
            case "embargosesadl":
                cadena_final="Embargos y medidas cautelares de ESADL";
                break;
            case "embargosregmer":
                cadena_final="Embargos y medidas cautelares";
                break;
            case "inscripciondocumentos":
                cadena_final="Inscripción de Documentos";
                break;
            case "inscripcionesesadl":
                cadena_final="Inscripción de Actos y Documentos Esadl";
                break;
            case "inscripcionesregmer":
                cadena_final="Inscripción de Actos y Documentos";
                break;
            case "inscripcionproponente":
                cadena_final="Inscripción al registro de proponentes";
                break;
            case "libroscomercioesadl":
                cadena_final="Libros del comerciante en Registro ESADL";
                break;
            case "libroscomercioregmer":
                cadena_final="Libros del comerciante en Registro Mercantil";
                break;
            case "matriculacae":
                cadena_final="Matrículas a través del CAE";
                break;
            case "matriculacambidom":
                cadena_final="Matrícula por cambio de domicilio";
                break;
            case "matriculaest":
                cadena_final="Matricula mercantil - establecimiento ";
                break;
            case "matriculapjur":
                cadena_final="Matrícula mercantil - personan jurídica";
                break;
            case "matriculapnat":
                cadena_final="Matrícula mercantil -  persona natural y-o establecimiento";
                break;
            case "matriculasuc":
                cadena_final="Matrícula de Sucursales y Agencias";
                break;
            case "mutacionactividad":
                cadena_final="Mutación de Actividad";
                break;
            case "mutaciondireccion":
                cadena_final="Mutación de Dirección";
                break;
            case "mutacionnombre":
                cadena_final="Mutación de Nombre";
                break;
            case "nombramientosregmer":
                cadena_final="NOMBRAMIENTOS";
                break;
            case "oficiosesadl":
                cadena_final="Oficios de Autoridad Competente - ESADL";
                break;
            case "oficiosregmer":
                cadena_final="Oficios de Autoridad Competente - RegMer";
                break;
            case "oficiosregpro":
                cadena_final="Oficios de Autoridad Competente - RegPro";
                break;
            case "pqresadl":
                cadena_final="PQRs del Registro ESADL";
                break;
            case "pqrregmer":
                cadena_final="PQRs del Registro Mercantil ";
                break;
            case "pqrregpro":
                cadena_final="PQRs del Registro Proponentes";
                break;
            case "prepago":
                cadena_final="Prepago de servicios virtualmente";
                break;
            case "recursosreposicionesadl":
                cadena_final="Recursos de Reposición - ESADL";
                break;
            case "recursosreposicionregmer":
                cadena_final="Recursos de Reposición - Registro Mercantil";
                break;
            case "recursosreposicionregpro":
                cadena_final="Recursos de Reposición - Registro Proponentes";
                break;
            case "reformascapitalregmer":
                cadena_final="Reformas de Capital";
                break;
            case "reformasestatutregmer":
                cadena_final="Reformas Estatutarias del Registro Mercantil";
                break;
            case "renovacionesadl":
                cadena_final="Renovación Entidad Sin Animo de Lucro";
                break;
            case "renovacionmatricula":
                cadena_final="Renovación de matrícula mercantil ";
                break;
            case "renovacionproponente":
                cadena_final="Renovación del Registro de Proponentes";
                break;
            case "rues01receptora":
                cadena_final="RUE - Certificados - Receptora";
                break;
            case "rues01responsable":
                cadena_final="RUE - Certificados - Responsable ";
                break;
            case "rues02receptora":
                cadena_final="RUE - Renovacion - Receptora";
                break;
            case "rues02responsable ":
                cadena_final="RUE - Renovacion - Responsable";
                break;
            case "rues03receptora":
                cadena_final="RUE - Matriculas - Receptora";
                break;
            case "rues03responsable ":
                cadena_final="RUE - Matriculas - Responsable";
                break;
            case "rues04receptora":
                cadena_final="RUE - Documentos - Receptora ";
                break;
            case "rues04responsable":
                cadena_final="RUE - Documentos - Responsable";
                break;
            case "rues05receptora":
                cadena_final="RUE - Proponentes - Receptora";
                break;
            case "rues05responsable":
                cadena_final="RUE - Proponentes - Responsable ";
                break;
            case "rues06receptora":
                cadena_final="RUE - Cancelaciones - Receptora";
                break;
            case "rues06responsable":
                cadena_final="RUE - Cancelaciones - Responsable";
                break;
            case "serviciosempresariales":
                cadena_final="Otros servicios no relacionados con los registros públicos";
                break;
            case "solicitudcambiodomicilio":
                cadena_final="Solicitud Cambio Domicilio RegMercantil";
                break;
            case "solicitudcancelacionesadl":
                cadena_final="Solicitud de Cancelación ESADL ";
                break;
            case "solicitudcancelacionest":
                cadena_final="Solicitud de Cancelación Establecimiento";
                break;
            case "solicitudcancelacionpjur":
                cadena_final="Solicitud de Cancelación Persona Jurídica";
                break;
            case "solicitudcancelacionpnat":
                cadena_final="Solicitud de Cancelación Persona Natural";
                break;
            default:
                cadena_final=valor;
                break;
        }
        return cadena_final;
    }

    const consultaActoReparto=(valor:string)=>{
        let cadena_final="";
        switch (valor) {
            case "01":
                cadena_final=valor+" - CONSTITUCIONES REGMER";
                break;
            case "02":
                cadena_final=valor+" - CONSTITUCIONES ESADL";
                break;
            case "03":
                cadena_final=valor+" - REFORMAS REGMER";
                break;
            case "04":
                cadena_final=valor+" - REFORMAS ESADL";
                break;
            case "05":
                cadena_final=valor+" - ACTAS REGMER";
                break;
            case "06":
                cadena_final=valor+" - ACTAS ESADL";
                break;
            case "07":
                cadena_final=valor+" - EMBARGOS REGMER";
                break;
            case "08":
                cadena_final=valor+" - CONTRATOS DE PREDA Y AGENCIA COMERCIAL";
                break;
            case "09":
                cadena_final=valor+" - TRAMITES DE PROPONENTES";
                break;
            case "10":
                cadena_final=valor+" - PODERES";
                break;
            case "11":
                cadena_final=valor+" - APERTURA DE SUCURSALES";
                break;
            case "12":
                cadena_final=valor+" - CASOS ESPECIALES";
                break;
            case "13":
                cadena_final=valor+" - RESOLUCIONES Y CONCORDATOS";
                break;
            case "14":
                cadena_final=valor+" - OTROS";
                break;
            case "15":
                cadena_final=valor+" - RENOVACIONES - MANUALES";
                break;
            case "16":
                cadena_final=valor+" - LIBROS DE COMERCIO - REGMER ";
                break;
            case "17":
                cadena_final=valor+" - MATRICULAS PNAT + EST";
                break;
            case "18":
                cadena_final=valor+" - MUTACIONES";
                break;
            case "19":
                cadena_final=valor+" - RECURSOS DE REPOSICION";
                break;
            case "20":
                cadena_final=valor+" - CANCELACION DE MATRICULAS";
                break;
            case "21":
                cadena_final=valor+" - RENOVACIONES - PAGOS EN LINEA";
                break;
            case "22":
                cadena_final=valor+" - RENOVACIONES - PAGOS EN CAJA";
                break;
            case "23":
                cadena_final=valor+" - RECURSOS DE QUEJA";
                break;
            case "25":
                cadena_final=valor+" - COMPRAVENTAS";
                break;
            case "26":
                cadena_final=valor+" - LIBROS DE COMERCIO - ESADL";
                break;
            case "31":
                cadena_final=valor+" - CORRECCIONES - REGMER ";
                break;
            case "32":
                cadena_final=valor+" - CORRECCIONES - REGESADL";
                break;
            case "33":
                cadena_final=valor+" - CORRECCIONES - PROPONENTES";
                break;
            case "34":
                cadena_final=valor+" - DEPOSITO DE ESTADOS FINANCIEROS";
                break;
            case "41":
                cadena_final=valor+" - PQRS";
                break;
            case "42":
                cadena_final=valor+" - CARTAS DE ACEPTACION - REGMER";
                break;
            case "43":
                cadena_final=valor+" - CARTAS DE ACEPTACION - REGESADL";
                break;
            case "51":
                cadena_final=valor+" - RUE - REGMER";
                break;
            case "52":
                cadena_final=valor+" - RUE - REGESADL ";
                break;
            case "53":
                cadena_final=valor+" - RUE - REGPRO";
                break;
            case "54":
                cadena_final=valor+" - RUE - RECURSOS DE REPOSICION";
                break;
            case "61":
                cadena_final=valor+" - CONCILIACIONES";
                break;
            case "81":
                cadena_final=valor+" - OFICIOS Y REQUERIMIENTOS";
                break;

            default:
                cadena_final=valor;
                break;
        }
        return cadena_final;
    }

    const transformarFecha=(valor:string)=>{
        let resultado="";
        if(valor.length>0){
            let year=valor[0]+valor[1]+valor[2]+valor[3];
            let month=valor[4]+valor[5];
            let day=valor[6]+valor[7];
            resultado=year+"-"+month+"-"+day;
        }else{
            resultado=valor;
        }
        return resultado;
    }

    const consultaEstadoExpediente=(valor:string)=>{
        let cadena_final="";
        switch (valor) {
            case "MA":
                cadena_final=valor+" - Activo";
                break;
            case "MI":
                cadena_final=valor+" - Inactivo";
                break;
            case "MF":
                cadena_final=valor+" - Matricula cancelada por cambio de jurisdicción";
                break;
            case "MC":
                cadena_final=valor+" - Matrícula cancelada";
                break;
            case "NA":
                cadena_final=valor+" - Matrícula no asignada o anulada";
                break;
            default:
                cadena_final=valor;
                break;
        }
        return cadena_final;
    }

    const consultaTipoDocumento=(valor:string)=>{
        let cadena_final="";
        switch (valor) {
            case "1":
                cadena_final="Cédula de ciudadania";
                break;
            case "2":
                cadena_final="NIT";
                break;
            case "3":
                cadena_final="Cédula de extranjería";
                break;
            case "4":
                cadena_final="Tarjeta de identidad";
                break;
            case "5":
                cadena_final="Pasaporte";
                break;
            case "6":
                cadena_final="Personería jurídica";
                break;
            case "E":
                cadena_final="Documento extranjero";
                break;
            case "R":
                cadena_final="Registro Civil";
                break;
            default:
                cadena_final=valor;
                break;
        }
        return cadena_final;
    }

   // const consultarTramite= async (tipo:typesQuerys, valor:string)=>{
    async function consultarTramite(tipo:typesQuerys, valor:string): Promise<number>{
        let noResultados=0;
        let token_p = await solicitarToken();
        let radicados_a:radicados={estadofinal:"",
            identificacion:"",nombre:"",radicado:"",recibo:"",actoreparto:"",fechaestadofinal:"",fecharadicacion:"",tipotramite:""};
        let recibos_a:recibos={identificacion:"",
            nombre:"",radicado:"",recibo:"",tipotramite:"",tiporegistro: "",
            certificados:[],imagenes:[],
            servicios:[]};
        switch (tipo) {
            case "radicado":
                let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/consultarRadicado";
                const json_send={
                    codigoempresa:"35",
                    usuariows:"appccs",
                    token:token_p,
                    radicado:valor
                }
                await fetch(url, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(json_send), // data can be `string` or {object}!
                }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => {
                        radicados_a=response;
                    });
                radicados_a.estadofinal=consultaEstadoFinal(radicados_a.estadofinal);
                radicados_a.tipotramite=consultaTipoTramite(radicados_a.tipotramite);
                radicados_a.actoreparto=consultaActoReparto(radicados_a.actoreparto);
                radicados_a.fecharadicacion=transformarFecha(radicados_a.fecharadicacion);
                radicados_a.fechaestadofinal=transformarFecha(radicados_a.fechaestadofinal);
                setRadicados(radicados_a)
                radicados_a.identificacion!=""?noResultados=1:noResultados=0;
                break;
            case "recibo":
                let url_r="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/consultarRecibo";
                const json_send_r={
                    codigoempresa:"35",
                    usuariows:"appccs",
                    token:token_p,
                    recibo:valor
                }
                await fetch(url_r, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(json_send_r), // data can be `string` or {object}!
                }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => {
                        recibos_a=response;

                    });
                recibos_a.tipotramite=consultaTipoTramite(recibos_a.tipotramite);
                for (let i=0; i<recibos_a.imagenes.length;i++){
                    recibos_a.imagenes[i].fechadocumento=transformarFecha(recibos_a.imagenes[i].fechadocumento);
                }
                setRecibos(recibos_a)
                recibos_a.identificacion!=""?noResultados=1:noResultados=0;
                break;
        }
        return noResultados;
    }

    // const consultarExpediente= async (tipo:typesProceedings, valor: string) => {
    async function consultarExpediente(tipo:typesProceedings, valor: string): Promise<number>{
        let noExpedientes=0;
        let token_p = await solicitarToken();
        let expendientes_p:expedientes[]=[];
        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/busquedaExpedientes";
        let json_send={};
    switch (tipo) {
        case "identificacion":
            json_send={
                codigoempresa:"35",
                usuariows:"appccs",
                token:token_p,
                identificacion:valor,
                semilla:0
            }
            break;
        case "matricula":
            json_send={
                codigoempresa:"35",
                usuariows:"appccs",
                token:token_p,
                matriculainicial:valor,
                semilla:0
            }
            break;
        case "nombre":
            json_send={
                codigoempresa:"35",
                usuariows:"appccs",
                token:token_p,
                nombreinicial:valor,
                semilla:0
            }
            break;
    }
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                //console.log('Success:', response)
                expendientes_p=response.expedientes;
            });
        for (let i=0; i<expendientes_p.length; i++){
            expendientes_p[i].estadomatricula=consultaEstadoExpediente(expendientes_p[i].estadomatricula);
            expendientes_p[i].idclase=consultaTipoDocumento(expendientes_p[i].idclase);
        }
        noExpedientes=expendientes_p.length;
        setExpedientes(expendientes_p);
        return noExpedientes;
    }

    const solicitarCertificado= async (expediente: expedientes, valor1: number, valor2: number,
                                       valor3: number,valor4: number, valor5: number, valor6: number)=>{

    }
    const encriptarClave=(clave:string)=>{
        const CryptoJS = require("crypto-js");
        let secret_key = 'c0nf3c4m4r4s';
        let secret_iv = 'c0nf3c4m4r4s';
        const dato=clave;

        let key = CryptoJS.SHA256(secret_key).toString();
        let iv = CryptoJS.SHA256(secret_iv).toString().substr(0, 16);

        key = CryptoJS.enc.Utf8.parse(key.substr(0, 32));
        iv = CryptoJS.enc.Utf8.parse(iv);

        var encrypted = CryptoJS.AES.encrypt(dato, key, {iv: iv});

        var rawStr = encrypted.toString();
        var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
        var base64 = CryptoJS.enc.Base64.stringify(wordArray);

        return base64;

    }
    async function autenticarUsuarioRegistrado(identificacion: string, correo: string, clave: string,celular: string): Promise<string> {

        const clave_encriptada= encriptarClave(clave);
        let estado="";
        let  token_p =  await solicitarToken();
        let nombreusu="";


        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/autenticarUsuarioRegistrado";
        const json_send={
            codigoempresa:"35",
            usuariows:"appccs",
            token:token_p,
            identificacionusuario:identificacion,
            emailusuario:correo,
            celularusuario:celular,
            claveusuario:clave_encriptada
        }


        /*
        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/verificarRegistro";
        const json_send={
            codigoempresa:"35",
            usuariows:"appccs",
            token:token_p,
            identificacion:identificacion,
            email:correo,
            clave:clave_encriptada

        }

         */


        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                estado=response.codigoerror;
                nombreusu=response.nombreusuario;
            });
        setToken(token_p);
        const json={
            token:token_p,
            identificacionusuario:identificacion,
            emailusuario:correo,
            celularusuario:celular,
            nombreusuario:nombreusu,
        }
        if(estado=="0000"){
            window.localStorage.setItem("usuario",JSON.stringify(json));
        }
        return estado;
    }

    const arreglarFechaEnviar=(valor:string)=>{
        let resultado="";
        if(valor.length>0){
            let year=valor[0]+valor[1]+valor[2]+valor[3];
            let month=valor[5]+valor[6];
            let day=valor[8]+valor[9];
            resultado=year+""+month+""+day;
        }else{
            resultado=valor;
        }
        return resultado;
    }

    async function solicitarRegistro(tipo_documento: typeDocument, identificacion:string, nombre1:string, nombre2:string, apellido1:string,
                                     apellido2:string, correo:string, celular:string, fecha_nacimiento: string,
                                     fecha_expedicion: string):Promise<string>{
        const fecha_final_nacimiento=arreglarFechaEnviar(fecha_nacimiento)
        const fecha_final_expedicion=arreglarFechaEnviar(fecha_expedicion)

        let estado="";
        let  token_p =  await solicitarToken();
        let tipo_documento_final="";
        switch (tipo_documento) {
            case "cedula":
                tipo_documento_final="1"
                break;
            case "nit":
                tipo_documento_final="2"
                break;
        }
        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/solicitarRegistro";
        const json_send={
            codigoempresa:"35",
            usuariows:"appccs",
            token:token_p,
            tipoidentificacion:tipo_documento_final,
            identificacion:identificacion,
            apellido1:apellido1,
            apellido2:apellido2,
            nombre1: nombre1,
            nombre2:nombre2,
            email:correo,
            celular:celular,
            fechanacimiento:fecha_final_nacimiento,
            fechaexpediciondocumento:fecha_final_expedicion,
        }
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                //console.log('Success:', response)
                estado=response.codigoerror;
            });
        return estado;
    }
    async function restaurarClaveRegistro(documento: string, correo: string):Promise<string> {
        let estado="";
        let  token_p =  await solicitarToken();

        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/restaurarClaveRegistro";
        const json_send={
        codigoempresa:"35",
        usuariows:"appccs",
        token:token_p,
        identificacion:documento,
        email:correo,
    }
        await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(json_send), // data can be `string` or {object}!
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
        //console.log('Success:', response)
        estado=response.codigoerror;
    });
        return estado;
    }

    const consultarExpedienteMercantil= async (valor: string)=>{
        let estado="";
        let  token_p = await solicitarToken();
        let expedientes:certificadoConsultaExpedienteMercantil={apellido1:"",apellido2:"",idclase:"",matricula:""
        ,nombre:"",nombre1:"",nombre2:"",tamanoempresa:""};

        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/consultarExpedienteMercantil";

        const json_send={
            codigoempresa:"35",
            usuariows:"appccs",
            token:token_p,
            identificacion:valor,
            tipo:"A",
        }
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                //console.log('Success:', response)
                expedientes=response.codigoerror;
            });
        return expedientes;
    }
    async function reportarTransaccion(expediente: expedientes,valor1: number, valor2: number,
                                       valor3: number,valor4: number, valor5: number, valor6: number): Promise<resultados>{
        const consultaExpediente = await consultarExpedienteMercantil(expediente.identificacion);
        let estado="";
        let resultados_array:resultados={
         codigoerror:"",idliquidacion:"",mensajeerror:"",numerorecuperacion:"", descuentoaplicado:""
        };
        let tipoIdentificacion=expediente.idclase;
        tipoIdentificacion!="1" && tipoIdentificacion!="2"?tipoIdentificacion="2":tipoIdentificacion=tipoIdentificacion;

        let celular_cliente= JSON.parse(window.localStorage.getItem("usuario") as string).celularusuario;
        let  token_p = await solicitarToken();
        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/reportarTransaccion";
        let url_liquidacion="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/aplicar1756Liquidacion";
        let email_control=JSON.parse(window.localStorage.getItem("usuario") as string).emailusuario;
        let nombre_control=JSON.parse(window.localStorage.getItem("usuario") as string).nombreusuario;
        let identificacion_control=JSON.parse(window.localStorage.getItem("usuario") as string).identificacionusuario;
        let celular_control=JSON.parse(window.localStorage.getItem("usuario") as string).celularusuario;
        let json_send={};
        let valor_total_servicios=0;
        let servicios_reporte:serviciosReportarTransaccion[]=[];
        let hoy = new Date();
        let ano_base = hoy.getFullYear();
        let identificacion_no="";
        if(expediente.identificacion==undefined){
            identificacion_no=expediente.nit;
        }else{
            identificacion_no=expediente.identificacion;
        }


            expediente.certificados.map(value => {
                {
                    if(valor1>0 && value.tipocertificado=="CerMat"){
                        valor_total_servicios=valor_total_servicios+value.valor;
                        servicios_reporte.push({idservicio:value.servicio,
                            anobase:ano_base.toString(),
                            base:0,
                            cantidad:valor1,
                            detallecertespecial:"",
                            identificacioncertespecial:"",
                            matricula:expediente.matricula,
                            nombrecertespecial:"",
                            porcentaje:0,
                            proponente:expediente.proponente,
                            tipocertespecial:"",
                            tipolibro:"",
                            valorservicio:value.valor
                        })
                    }
                    if(valor2>0 && value.tipocertificado=="CerExi"){
                        valor_total_servicios=valor_total_servicios+value.valor;
                        servicios_reporte.push({idservicio:value.servicio,
                            anobase:ano_base.toString(),
                            base:0,
                            cantidad:valor2,
                            detallecertespecial:"",
                            identificacioncertespecial:"",
                            matricula:expediente.matricula,
                            nombrecertespecial:"",
                            porcentaje:0,
                            proponente:expediente.proponente,
                            tipocertespecial:"",
                            tipolibro:"",
                            valorservicio:value.valor
                        })
                    }
                    if(valor3>0 && value.tipocertificado=="CerEsadl"){
                        valor_total_servicios=valor_total_servicios+value.valor;
                        servicios_reporte.push({idservicio:value.servicio,
                            anobase:ano_base.toString(),
                            base:0,
                            cantidad:valor3,
                            detallecertespecial:"",
                            identificacioncertespecial:"",
                            matricula:expediente.matricula,
                            nombrecertespecial:"",
                            porcentaje:0,
                            proponente:expediente.proponente,
                            tipocertespecial:"",
                            tipolibro:"",
                            valorservicio:value.valor
                        })
                    }
                    if(valor4>0 && value.tipocertificado=="CerLibRegMer"){
                        valor_total_servicios=valor_total_servicios+value.valor;
                        servicios_reporte.push({idservicio:value.servicio,
                            anobase:ano_base.toString(),
                            base:0,
                            cantidad:valor4,
                            detallecertespecial:"",
                            identificacioncertespecial:"",
                            matricula:expediente.matricula,
                            nombrecertespecial:"",
                            porcentaje:0,
                            proponente:expediente.proponente,
                            tipocertespecial:"",
                            tipolibro:"",
                            valorservicio:value.valor
                        })
                    }
                    if(valor5>0 && value.tipocertificado=="CerLibRegEsadl"){
                        valor_total_servicios=valor_total_servicios+value.valor;
                        servicios_reporte.push({idservicio:value.servicio,
                            anobase:ano_base.toString(),
                            base:0,
                            cantidad:valor5,
                            detallecertespecial:"",
                            identificacioncertespecial:"",
                            matricula:expediente.matricula,
                            nombrecertespecial:"",
                            porcentaje:0,
                            proponente:expediente.proponente,
                            tipocertespecial:"",
                            tipolibro:"",
                            valorservicio:value.valor
                        })
                    }
                    if(valor6>0 && value.tipocertificado=="CerPro"){
                        valor_total_servicios=valor_total_servicios+value.valor;
                        servicios_reporte.push({idservicio:value.servicio,
                            anobase:ano_base.toString(),
                            base:0,
                            cantidad:valor6,
                            detallecertespecial:"",
                            identificacioncertespecial:"",
                            matricula:expediente.matricula,
                            nombrecertespecial:"",
                            porcentaje:0,
                            proponente:expediente.proponente,
                            tipocertespecial:"",
                            tipolibro:"",
                            valorservicio:value.valor
                        })
                    }
                }
            })

        switch (parseInt(tipoIdentificacion)) {
            case 1:
                json_send={
                    codigoempresa:"35",
                    usuariows:"appccs",
                    token:token_p,
                    operador: "USUPUBXX",
                    emailcontrol:email_control,
                    identificacioncontrol:identificacion_control,
                    nombrecontrol:nombre_control,
                    celularcontrol:celular_control,
                    codificacionservicios:"S",
                    tipoidentificacioncliente:tipoIdentificacion,
                    identificacioncliente:identificacion_no,
                    nombre1cliente:consultaExpediente.nombre1,
                    nombre2cliente:consultaExpediente.nombre2,
                    apellido1cliente:consultaExpediente.apellido1,
                    apellido2cliente:consultaExpediente.apellido2,
                    emailcliente:expediente.emailcom,
                    direccioncliente:expediente.direccion,
                    telefonocliente:expediente.telcom1,
                    celularcliente:celular_cliente,
                    municipiocliente:expediente.municipio,
                    valorbruto:valor_total_servicios,
                    valorbaseiva:0,
                    valoriva:0,
                    valortotal:valor_total_servicios,
                    tipotramite:"certificadosvirtuales",
                    subtipotramite:"",
                    proyecto:"1",
                    tamanoempresarial957:consultaExpediente.tamanoempresa,
                    servicios:servicios_reporte
                }
                break;
            case 2:
                json_send={
                    codigoempresa:"35",
                    usuariows:"appccs",
                    token:token_p,
                    operador: "USUPUBXX",
                    emailcontrol:email_control,
                    identificacioncontrol:identificacion_control,
                    nombrecontrol:nombre_control,
                    celularcontrol:celular_control,
                    codificacionservicios:"S",
                    tipoidentificacioncliente:tipoIdentificacion,
                    identificacioncliente:identificacion_no,
                    razonsocialcliente:expediente.nombre,
                    emailcliente:expediente.emailcom,
                    direccioncliente:expediente.direccion,
                    telefonocliente:expediente.telcom1,
                    celularcliente:celular_cliente,
                    municipiocliente:expediente.municipio,
                    valorbruto:valor_total_servicios,
                    valorbaseiva:0,
                    valoriva:0,
                    valortotal:valor_total_servicios,
                    tipotramite:"certificadosvirtuales",
                    subtipotramite:"",
                    proyecto:"1",
                    tamanoempresarial957:consultaExpediente.tamanoempresa,
                    servicios:servicios_reporte
                }
                break;
        }
        //console.log(json_send);

        let codigo_error="";
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                //console.log('Success:',response)
                resultados_array=response;
            });

        const fecha_actual=new Date();
        if(resultados_array.codigoerror=="0000" && fecha_actual.getFullYear()==2021){
            let json_send_liquidacion={
                codigoempresa:"35",
                usuariows:"appccs",
                token:token_p,
                idliquidacion: resultados_array.idliquidacion
            };

            await fetch(url_liquidacion,{
                method: 'POST', // or 'PUT'
                body: JSON.stringify(json_send_liquidacion), // data can be `string` or {object}!
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    //console.log('Success:',response)
                    resultados_array.descuentoaplicado=response.descuentoaplicado;
                });
        }
        return resultados_array;
        
        }

        async function consultarCertificadoRecuperacion(recuperacion:string):Promise<string>{
           const token_p= await solicitarToken();

           let recuperacionCertificado:recuperacionCertificado={idestado:"",nombre:"",numerorecuperacion:""
           ,urlPago:"",valor:"",liquidaciondetalle:[],mensajestado:""}
            let estado="";
            let tipo_documento_final="";
            let email_control=JSON.parse(window.localStorage.getItem("usuario") as string).emailusuario;
            let nombre_control=JSON.parse(window.localStorage.getItem("usuario") as string).nombreusuario;
            let identificacion_control=JSON.parse(window.localStorage.getItem("usuario") as string).identificacionusuario;
            let celular_control=JSON.parse(window.localStorage.getItem("usuario") as string).celularusuario;


            let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/consultarLiquidacion";
            const json_send={
                codigoempresa:"35",
                usuariows:"appccs",
                token:token_p,
                idusuario:"USUPUBXX",
                identificacioncontrol:identificacion_control,
                nombrecontrol:nombre_control,
                emailcontrol:email_control,
                celularcontrol:celular_control,
                idliquidacion:"",
                numerorecuperacion:recuperacion

            }
            await fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(json_send), // data can be `string` or {object}!
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    //console.log('Success:', response)
                    estado=response.codigoerror;
                    recuperacionCertificado=response
                });
            recuperacionCertificado.mensajestado=valores_estado_recuperacion(recuperacionCertificado.idestado);
            setConsultaCertificado(recuperacionCertificado);
            return estado;
        }

        const valores_estado_recuperacion=(numero:string)=>{
        let mensaje="";

        switch (numero) {
            case '01':
                mensaje="Liquidada en proceso"
            break;
            case '02':
                mensaje="Salvada"
                break;
            case '03':
                mensaje="Validada"
                break;
            case '04':
                mensaje="Impresa"
                break;
            case '05':
                mensaje="Para pago en la caja"
                break;
            case '06':
                mensaje="Para pago en la caja"
                break;
            case '07':
                mensaje="Confirmado pago electrónico"
                break;
            case '08':
                mensaje="Rechazado pago electrónico"
                break;
            case '09':
                mensaje="Pagada en la caja"
                break;
            case '10':
                mensaje="Devuelta"
                break;
            case '11':
                mensaje="Enviada al SIREP desde caja SII"
                break;
            case '12':
                mensaje="Reingresado"
                break;
            case '13':
                mensaje="Enviado a digitación"
                break;
            case '14':
                mensaje="Enviado a registro"
                break;
            case '15':
                mensaje="Inscrito"
                break;
            case '16':
                mensaje="Enviado a archivo"
                break;
            case '17':
                mensaje="Archivado"
                break;
            case '18':
                mensaje="Desistimiento declarado"
                break;
            case '19':
                mensaje="Firmado electrónicamente"
                break;
            case '20':
                mensaje="Pagada en bancos"
                break;
            case '21':
                mensaje="Pagada en ATH"
                break;
            case '22':
                mensaje="Pagado PSE/ACH"
                break;
            case '25':
                mensaje="Cargo a Prepago"
                break;
            case '33':
                mensaje="Pendiente de firmado electrónico"
                break;
            case '44':
                mensaje="Firmado en forma manuscrita"
                break;
            case '66':
                mensaje="Pago electrónico solicitado"
                break;
            case '77':
                mensaje="Recibido tramite RUE recibo pendiente"
                break;
            case '99':
                mensaje="Anulada"
                break;

            default:
                mensaje="";
                break;
        }
        return mensaje;
    }

    const confecamarasContext: ConfecamarasContextModel={
        token,
        names,
        recibos,
        radicados,
        expedientes,
        consultaCertificado,
        solicitarToken,
        consultarNombre,
        consultarTramite,
        consultarExpediente,
        solicitarCertificado,
        autenticarUsuarioRegistrado,
        solicitarRegistro,
        restaurarClaveRegistro,
        reportarTransaccion,
        consultarCertificadoRecuperacion,
    };
    return(
        <ConfecamarasContext.Provider value={confecamarasContext}>
            {props.children}
        </ConfecamarasContext.Provider>
    );

}
export default ConfecamarasContextProvider;

