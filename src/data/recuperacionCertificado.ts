export interface recuperacionCertificado {
    valor:string,
    nombre: string,
    idestado: string,
    numerorecuperacion: string,
    urlPago: string,
    mensajestado:string,
    liquidaciondetalle: liquidaciondetalle[]
    
}

interface liquidaciondetalle {
    nombre:string,
    expediente: string,
    txtservicio: string,
    idservicio: string,
    cantidad: string,
    valorservicio: string
    valorbase: string
}
