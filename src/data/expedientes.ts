export interface certificados {
    tipocertificado: string,
    descripciontipocertificado: string,
    servicio: string,
    valor: number
}

export interface expedientes {
    matricula: string,
    nombre: string,
    idclase: string,
    identificación: string,
    nit: string,
    estadomatricula: string,
    emailcom: string,
    certificados: certificados[]
}
