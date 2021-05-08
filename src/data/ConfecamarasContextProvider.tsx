import React, {useEffect, useState} from "react";
import ConfecamarasContext, {
    confecamaras,
    ConfecamarasContextModel,
    typesProceedings,
    typesQuerys
} from "./confecamaras";
import {nombres} from "./nombres";
import {radicados} from "./radicados";
import {recibos} from "./recibos";
import {expedientes} from "./expedientes";


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
                console.log('Success:', response)
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

    const consultarTramite= async (tipo:typesQuerys, valor:string)=>{
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
                break;
        }

    }

    const consultarExpediente= async (tipo:typesProceedings, valor: string)=>{
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
                console.log('Success:', response)
                expendientes_p=response.expedientes;
            });
        for (let i=0; i<expendientes_p.length; i++){
            expendientes_p[i].estadomatricula=consultaEstadoExpediente(expendientes_p[i].estadomatricula);
            expendientes_p[i].idclase=consultaTipoDocumento(expendientes_p[i].idclase);
        }

        setExpedientes(expendientes_p);
    }

    const solicitarCertificado= async (expediente: expedientes, valor1: number, valor2: number, valor3: number)=>{

    }

    const confecamarasContext: ConfecamarasContextModel={
        token,
        names,
        recibos,
        radicados,
        expedientes,
        solicitarToken,
        consultarNombre,
        consultarTramite,
        consultarExpediente,
        solicitarCertificado,
    };
    return(
        <ConfecamarasContext.Provider value={confecamarasContext}>
            {props.children}
        </ConfecamarasContext.Provider>
    );

}
export default ConfecamarasContextProvider;

