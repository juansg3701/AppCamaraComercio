import React from "react";

export interface confecamaras {
    token: string;
}
export interface ConfecamarasContextModel {
    confecamaras: string;
    solicitarToken:()=>void;
}
const ConfecamarasContext = React.createContext<ConfecamarasContextModel>({
    confecamaras:"",
    solicitarToken: () => {}
});

export default ConfecamarasContext;
