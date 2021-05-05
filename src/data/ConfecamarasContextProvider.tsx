import React, {useEffect, useState} from "react";
import ConfecamarasContext, {confecamaras, ConfecamarasContextModel, typesQuerys} from "./confecamaras";
import {nombres} from "./nombres";
import {radicados} from "./radicados";
import {recibos} from "./recibos";


const ConfecamarasContextProvider: React.FC = (props) => {
    const[token, setToken] = useState("");
    const[names, setNames] = useState<nombres[]>([]);
    const[recibos, setRecibos] = useState<recibos>({identificacion:"",nombre:"",
        radicado:"",recibo:"",tipotramite:"",url:"",valorneto:0});
    const[radicados, setRadicados] = useState<radicados>({estado:"",estadofinal:"",fecha:"",
    identificacion:"",nombre:"",radicado:"",recibo:""});


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
    /*
    const consultarNombre= async (nombre:string)=>{
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
                //console.log(response.renglones)
                nombres_a=response.renglones;
                //setNames(response.renglones)
            });
       // setNames(nombres_a)
        setNames(await nombres_a)
        console.log(names.length+" <--largo")
      //  return nombres_a
    }
    */

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
    const consultarTramite= async (tipo:typesQuerys, valor:string)=>{
        let token_p = await solicitarToken();
        //let radicados_a = {};
        //let recibos_a={};
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
                        console.log('Success:', response)
                        setRadicados(response);
                    });

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
                        console.log('Success:', response)
                        setRecibos(response)
                    });

                break;
        }

    }
    const confecamarasContext: ConfecamarasContextModel={
        token,
        names,
        recibos,
        radicados,
        solicitarToken,
        consultarNombre,
        consultarTramite,
    };
    return(
        <ConfecamarasContext.Provider value={confecamarasContext}>
            {props.children}
        </ConfecamarasContext.Provider>
    );

}
export default ConfecamarasContextProvider;

