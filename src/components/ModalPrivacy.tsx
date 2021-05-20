import React, { useContext } from 'react';
import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonText,
    IonButton,
    IonTitle,
    IonRouterLink,
    IonIcon, IonToolbar
} from '@ionic/react';
import {chevronBack} from "ionicons/icons";

interface ModalInformationyProps {
    dismissModal: () => void;
}

const ModalPrivacy: React.FC<ModalInformationyProps> = (props) => {

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">
                                <h2>Política de Privacidad </h2>
                            </IonTitle>
                        </IonToolbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"/>
                    <IonCol className='ion-text-center ion-no-padding' size="10">
                        <IonText color='medium'>
                            <h3>Declaración de Privacidad </h3>
                            <p className="ion-text-justify">
                                Introducción. sii2.confecamaras.co pertenece y es operada por Camara de Comercio de Sogamoso. Camara de Comercio de Sogamoso está comprometida a respetar los requerimientos legales existentes respecto de la privacidad de las personas que utilizan este Sitio. Esta Declaración de Privacidad describe las políticas y prácticas actuales de Camara de Comercio de Sogamoso respecto de la información personal recolectada por Camara de Comercio de Sogamoso a través de este Sitio.
                            </p>
                            <p className="ion-text-justify">
                                Definiciones. El término "datos personales" comprende la información relacionada con una persona natural o jurídica identificada o susceptible de ser identificada, como por ejemplo, nombre, edad, dirección electrónica o postal de una persona. El término "Sitio" se refiere al sitio de red en sii2.confecamaras.co.
                            </p>
                            <p className="ion-text-justify">
                                Notificación de Cambios en la Declaración de Privacidad. Camara de Comercio de Sogamoso continuamente mejora y añade nuevas funcionalidades y características a este Sitio. Estas continuas mejoras, como así también los cambios en la legislación o en la tecnología, requieren efectuar cambios a esta Política de Privacidad. Camara de Comercio de Sogamoso se reserva el derecho a actualizar o modificar esta Declaración de Privacidad en cualquier momento sin previo aviso.
                            </p>
                            <p className="ion-text-justify">
                                Los cambios a esta Política de Privacidad serán informados publicando la versión actualizada o modificada de esta Declaración de Privacidad en el Sitio. El uso de este Sitio por parte de cualquier persona luego de efectuarse alguna de las modificaciones citadas constituye la aceptación de que la información personal recogida relacionada con dicha persona a través de este Sitio, luego de la publicación de la revisión de esta Declaración de Privacidad, quedará sujeta a los términos de la Declaración de Privacidad revisada. Camara de Comercio de Sogamoso no aplicará ningún cambio en esta Declaración de Privacidad respecto de ninguna información personal que Camara de Comercio de Sogamoso hubiere recolectado con anterioridad a la publicación de la revisión de esta Declaración de Privacidad en el Sitio.
                            </p>
                            <p className="ion-text-justify">
                                Para su conveniencia, toda vez que esta Declaración de Privacidad sea modificada, le enviaremos una alerta que se publicará en este sitio durante treinta días.
                            </p>
                            <p className="ion-text-justify">
                                Por favor, revise esta Declaración de Privacidad periódicamente. Puede acceder a la versión actual de esta Declaración de Privacidad en cualquier momento, haciendo clic sobre el botón de “Declaración de Privacidad” que aparece en la parte inferior de todas las páginas de este Sitio.
                            </p>
                            <p className="ion-text-justify">
                                Esta Declaración de Privacidad fue revisada por última vez el 24 de septiembre de 2011.
                            </p>
                            <p className="ion-text-justify">
                                Su Consentimiento. Esta Declaración de Privacidad se incluye y forma parte de los Términos y Condiciones de sii2.confecamaras.co. La aceptación de estos términos y la utilización de este Sitio implican su consentimiento respecto de la recolección, utilización y revelación de su información personal, según se establece en esta Declaración de Privacidad.
                            </p>
                            <p className="ion-text-justify">
                                Datos Personales Recolectados a Través de sii2.confecamaras.co
                            </p>
                            <p className="ion-text-justify">
                                Datos Personales Suministrados por Usted. Camara de Comercio de Sogamoso recoge los datos personales que usted nos suministra al utilizar este Sitio. Esta información puede incluir, por ejemplo, su nombre, el nombre de su empresa, su domicilio postal o el de su empresa y su dirección electrónica.
                            </p>
                            <p className="ion-text-justify">
                                Camara de Comercio de Sogamoso utiliza los datos personales suministrados por usted al utilizar este Sitio para proveer la información, los servicios y los productos que usted solicita. Por ejemplo, podemos utilizar su dirección electrónica para responder a sus comentarios o inquietudes. En algunos casos, este sitio permitirá la inscripción a eventos promocionales; utilizaremos su dirección electrónica o postal para enviarle catálogos, mapas e información sobre el evento.
                            </p>
                            <p className="ion-text-justify">
                                Camara de Comercio de Sogamoso también utiliza la información personal recogida en este Sitio para mejorar el contenido y la funcionalidad de este Sitio, para comprender mejor a nuestros clientes y a los mercados, para optimizar nuestros productos y servicios y para comercializar nuestros productos y servicios a los clientes y clientes potenciales, incluyendo aquellos que se inscriben como usuarios de este Sitio. Podemos contactarlo periódicamente para informarle acerca de nuestros productos y servicios agropecuarios. Si no desea que lo contactemos para tal fin, por favor, háganoslo saber.
                            </p>
                            <p className="ion-text-justify">
                                Datos Click-Stream. Camara de Comercio de Sogamoso utiliza tecnología para rastrear el uso que usted hace de este Sitio; por ejemplo, las páginas que usted visita y los enlaces que usted utiliza. Esta información sobre el uso que usted hace de este Sitio se denomina "click-stream data." Los datos Click-stream (flujo del clic) nos ayudan a determinar lo que usted considera y no considera importante. Nos ayuda a decidir el contenido y las características que podemos agregar o descartar. Asimismo, nos ayuda a determinar si nuestro Sitio es de uso fácil o si debemos rediseñar algunas páginas y enlaces. Los datos Click-stream no lo identifican a usted de manera personal. Si Camara de Comercio de Sogamoso vincula cualquier dato click-stream a su nombre personal, lo trataremos como un dato personal.
                            </p>
                            <p className="ion-text-justify">
                                Cookies. Podemos obtener información sobre usted instalando nuestro propio marcador en su computadora. Este marcador se conoce comúnmente con el nombre de “cookie”, y nos permite conocerlo a través de un identificador exclusivo generado por la computadora. Al suministrarle un identificador exclusivo, podemos crear una base de datos en base a sus elecciones y preferencias anteriores, y en los casos en que dichas elecciones o preferencias deban ser recolectadas nuevamente, podemos acceder a ellas de forma automática, y ahorrar de esta forma tiempo y esfuerzos. Por ejemplo, en el caso de que usted desee comprar nuevamente un producto o servicio que ya compró anteriormente, las características de su elección anterior pueden ser retenidos y re-ingresados más rápidamente. Su computadora puede configurarse específicamente para rechazar los cookies: por favor, vaya al navegador para obtener mayor información.
                            </p>
                            <p className="ion-text-justify">
                                Revelación de Información Personal a Afiliadas. Camara de Comercio de Sogamoso comparte la información personal recogida a través de este Sitio con sus afiliadas, las cuales pueden utilizar la información de la misma forma que Camara de Comercio de Sogamoso. Si no desea que Camara de Comercio de Sogamoso comparta su información personal con las afiliadas, por favor háganoslo saber.
                            </p>
                            <p className="ion-text-justify">
                                Revelación de Información Personal a Terceros No Relacionados. Tanto Camara de Comercio de Sogamoso como sus afiliadas NO ESTAN AUTORIZADAS a compartir la información personal recogida a través de este Sitio con terceros en ninguna parte del mundo, es por esta razón que haremos todo lo que esté técnicamente y legalmente a nuestro alcance para salvaguardar su identidad y los datos personales y empresariales que usted haya indicado en este sitio. La información personal que usted reporte en este sitio será utilizada única y exclsuivamente por Camara de Comercio de Sogamoso para las gestiones inherentes a nuestra razón de ser y con el único objeto de mantenerlo al tanto de las actividades que realizamos y de notificarle información de interes para usted en nuestra relación comercial o contractual.
                            </p>
                            <p className="ion-text-justify">
                                Pueden producirse circunstancias limitadas en las cuales Camara de Comercio de Sogamoso o sus afiliadas compartan o transfieran la información contenida en sus bases de datos a un tercero no relacionado; por ejemplo, para cumplir con un requerimiento legal, para la administración de justicia, para proteger algún interés vital suyo o de su empresa, o en el caso de una venta, fusión, reorganización o disolución corporativa, o cualquier otro acontecimiento similar.
                            </p>
                            <p className="ion-text-justify">
                                Donde sea apropiado, antes de revelar cualquier información personal a un tercero, Camara de Comercio de Sogamoso requerirá por contrato que el tercero tome todas las precauciones adecuadas para proteger los datos contra cualquier uso o revelación no autorizados. Si no desea que Camara de Comercio de Sogamoso comparta su información personal con terceros bajo estas condiciones de estricto control, por favor háganoslo saber.
                            </p>
                            <p className="ion-text-justify">
                                Integridad y Seguridad de la Información. Camara de Comercio de Sogamoso adoptará las medidas comerciales razonables para resguardar la confiabilidad, la precisión, la integridad y la actualización de la información en nuestras bases de datos y para proteger la seguridad de las mismas. Mantenemos su información personal durante el tiempo que sea razonablemente necesario de acuerdo con los fines para los cuales fue recogida o para cumplir con algún reporte legal requerido o algún requerimiento de retención de documentos. Nuestros servidores y bases de datos están protegidos por tecnología de seguridad estándar industrial, como por ejemplo firewalls estándar industriales y protección de contraseñas. Los empleados que tienen acceso a la información personal han sido capacitados para manejar dicha información correctamente y de conformidad con nuestros protocolos de seguridad. Si bien no podemos garantizar la ocurrencia de alguna pérdida, uso indebido, revelación no autorizada, alteración o destrucción de datos, tratamos de prevenir tales situaciones desafortunadas.
                            </p>
                            <p className="ion-text-justify">
                                Acceso y Corrección de Datos. Usted puede desear acceder o corregir algún dato personal recogido a través de este Sitio escribiendo a nuestro webmaster a: direccionjuridica@camarasogamoso.org. Por favor, mencione información suficiente que nos permite identificar su información personal. Responderemos a sus preguntas de forma rápida y correcta. Trataremos en la medida de lo posible ubicar su solicitud sin incurrir en costos significativos. Las solicitudes de corrección o eliminación de datos personales están sujetas a todos los reportes legales aplicables u obligaciones de retención de documentos requeridos de Camara de Comercio de Sogamoso.
                            </p>
                            <p className="ion-text-justify">
                                Menores. Camara de Comercio de Sogamoso no recoge conscientemente ninguna información personal de personas menores de dieciocho años. Si usted es menor de dieciocho, por favor no nos suministre ningún dato personal. Si usted tiene motivos para creer que algún menor ha suministrado información personal a Camara de Comercio de Sogamoso, por favor contáctenos y haremos nuestros mejores esfuerzos para borrar la información de nuestras bases de datos.
                            </p>
                            <p className="ion-text-justify">
                                Hipervínculos a otros Sitios. Esta Declaración de Privacidad es aplicable únicamente a sii2.confecamaras.co . Camara de Comercio de Sogamoso y sus afiliadas operan una gran variedad de tipos de sitios de red para diversos fines y en distintos países en los cuales se aplican legislaciones diferentes. Si usted visita un sitio de red operado por Camara de Comercio de Sogamoso o sus afiliadas, por favor tómese unos minutos para revisar la declaración de privacidad publicada en el sitio y así informarse sobre la información personal que puede recogerse a través de ese sitio y cómo será procesada.
                            </p>
                            <p className="ion-text-justify">
                                sii2.confecamaras.co contiene hipervínculos a otros sitios de red que no son operados por Camara de Comercio de Sogamoso o sus afiliadas. Estos hipervínculos se suministran para su referencia y conveniencia únicamente, y no implican ningún aval a las actividades de tales sitios de red de terceros o ninguna asociación con sus operadores. Syngenta no ejerce ningún control sobre esos sitios de red y no es responsable por las prácticas respecto de los datos recogidos. Lo instamos a revisar la política de privacidad publicada en cualquier sitio que usted visite antes de utilizarlo o de suministrar alguna información personal suya.
                            </p>
                            <p className="ion-text-justify">
                                Preguntas Sobre Nuestra Declaración de Privacidad. Si usted tiene alguna pregunta respecto de esta Declaración de Privacidad o alguna inquietud sobre la forma en que sii2.confecamaras.co procesa sus datos personales, por favor no dude en notificarnos.
                            </p>
                        </IonText>
                    </IonCol>
                    <IonCol size="1"/>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={props.dismissModal}>
                            Cerrar
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default ModalPrivacy;
