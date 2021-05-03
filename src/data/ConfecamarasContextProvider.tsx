import React, {useEffect, useState} from "react";
import ConfecamarasContext, {confecamaras, ConfecamarasContextModel} from "./confecamaras";

const ConfecamarasContextProvider: React.FC = (props) => {
    const[confecamaras, setConfecamaras] = useState("");

    const solicitarToken= async ()=>{

        let url="https://siisogamoso.confecamaras.co/librerias/wsRestSII/v1/solicitarToken";
        const json_send={
            codigoempresa:"35",
            usuariows:"appccs",
            clavews:"MHh9lHCu}H"
        }
        /*
        const data = await fetch(url,{method:'POST',
            body:JSON.stringify(json_send),})
        const datas = await data.json();
        setConfecamaras(datas.token);

         */
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(json_send), // data can be `string` or {object}!
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response.token)
                setConfecamaras(response.token);
            });

    }
    const confecamarasContext: ConfecamarasContextModel={
        confecamaras,
        solicitarToken
    };
    return(
        <ConfecamarasContext.Provider value={confecamarasContext}>
            {props.children}
        </ConfecamarasContext.Provider>
    );

}
export default ConfecamarasContextProvider;

