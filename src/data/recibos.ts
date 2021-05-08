export interface serviciosRecibos {
    nservicio: string,
    matricula: string,
    proponente: string,
    identificacion: string,
    nombre: string
}
export interface imagenesRecibos{
    url:string,
    nombre: string
    fechadocumento: string,
}
export interface certificadoRecibos {
    path: string
}
export interface recibos {
    radicado: string,
    recibo:string,
    identificacion: string,
    nombre: string,
    tipotramite: string,
    tiporegistro: string
    servicios: serviciosRecibos[],
    imagenes: imagenesRecibos[],
    certificados: certificadoRecibos[]
}
