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
    municipio: string,
    direccion: string,
    telcom1: string,
    proponente: string
    certificados: certificados[]
}
export interface certificadoConsultaExpedienteMercantil {
    matricula: string,
    nombre: string,
    nombre1: string,
    nombre2: string,
    apellido1: string,
    apellido2: string,
    idclase:string,
    tamanoempresa: string,

}
