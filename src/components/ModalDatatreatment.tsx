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

const ModalDatatreatment: React.FC<ModalInformationyProps> = (props) => {

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">
                                <h2>Política de tratamiento de datos personales</h2>
                            </IonTitle>
                        </IonToolbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="1"/>
                    <IonCol className='ion-text-center ion-no-padding' size="10">
                        <IonText color='medium'>
                            <h3><b>Última actualización: Abril de 2013.</b> </h3>
                            <p className="ion-text-justify">
                                Camara de Comercio de Sogamoso como responsable del tratamiento de los datos personales proporcionados a través de este sitio web se compromete a respetar su derecho a la intimidad. En este sentido, Camara de Comercio de Sogamoso ha elaborado la presente política relativa al tratamiento de sus datos personales para informarle de la información que recopila en línea y la utilización que hace de la misma.
                            </p>
                            <p className="ion-text-justify">
                                Al utilizar este sitio, Usted indica que comprende y acepta los términos aquí estipulados.
                            </p>
                            <h3><b>I Recopilación de datos personales</b> </h3>
                            <h3>a) Datos personales recopilados de forma automática</h3>
                            <p className="ion-text-justify">
                                Cuando visita nuestro sitio web, algunas informaciones pueden ser recopiladas de forma automática, tal como: el sitio web de donde ha obtenido nuestra dirección, su dirección IP, información relativa a su navegador y las horas de acceso a nuestro sitio. Podemos también recopilar información relativa a su navegación sobre nuestro sitio tal como las páginas que ha consultado o las actividades realizadas. Es posible que combinemos información de visita con la información personal que nos proporcione.
                            </p>
                            <h3>b) Datos personales proporcionados por Usted</h3>
                            <p className="ion-text-justify">
                                Para su conveniencia, toda vez que esta Declaración de Privacidad sea modificada, le enviaremos una alerta que se publicará en este sitio durante treinta días.
                            </p>
                            <h3><b>II Utilización de los datos personales</b></h3>
                            <p className="ion-text-justify">
                                Los datos personales recopilados por Camara de Comercio de Sogamoso son para uso interno y en concreto para las siguientes finalidades:
                            </p>
                            <p className="ion-text-justify">
                                <li>para gestionar los registros delegados por el estado en nuestra organización</li>
                                <li>para procesar pedidos y emitir facturas;</li>
                                <li>para el mantenimiento y la actualización de su cuenta;</li>
                                <li>para hacerle llegar nuestros productos, promociones y comunicaciones publicitarias;</li>
                                <li>para mantenerle informado de nuestros nuevos productos y servicios;</li>
                                <li>para establecer un perfil de actividad de nuestro sitio;</li>
                                <li>para optimizar su uso del sitio</li>
                                <li>para en desarrollo de nuestra función y/o actividades de Ley, informar a terceros sobre la información comercial suya y/o de sus establecimientos de comercio.</li>
                            </p>
                            <p className="ion-text-justify">
                                Camara de Comercio de Sogamoso puede también utilizar parte de la información de las cuentas de usuario para realizar estudios de solvencia.
                            </p>
                            <h3><b>III Conservación de los datos personales</b></h3>
                            <p className="ion-text-justify">
                                Los datos personales mencionados en la sección I, serán conservados durante todo el tiempo necesario para llevar a cabo las finalidades para las cuales han sido recopilados.
                            </p>
                            <h3><b>IV Uso compartido de sus datos personales</b></h3>
                            <p className="ion-text-justify">
                                Al proporcionar sus datos personales a Camara de Comercio de Sogamoso, Usted acepta que:
                            </p>
                            <p className="ion-text-justify">
                                <li>Estos puedan ser tratados, almacenados o cedidos (sea a título gratuito o remunerado) por cualquiera filial, sucursal o empresa participada por Camara de Comercio de Sogamoso.</li>
                                <li>Camara de Comercio de Sogamoso pueda compartir sus datos personales con los proveedores de servicios que actúen por su cuenta, los proveedores de contenido, intermediarios para la transacción económica o los servicios de entrega a domicilio con las finalidades indicadas en la sección II anterior. Estas empresas obtendrán sólo y únicamente la información necesaria para llevar a cabo el servicio contratado y no estarán autorizadas a usarla para cualquier otro fin. Asimismo estas empresas tienen la obligación de mantener los datos así proporcionados de forma confidencial.</li>
                                <li>Estas informaciones puedan ser reveladas en el marco de una fusión, adquisición o venta de los activos de la sociedad y en caso de estado de insolvencia, declaración de concurso y liquidación de la sociedad que implique un traspaso de los datos personales como parte integrante del activo de la sociedad. </li>
                                <li>Estos datos puedan ser comunicados si la Ley lo requiere o si Camara de Comercio de Sogamoso, actuando de buena fe, está convencida de que esta acción es necesaria en el marco de un procedimiento legal, para la resolución de una reclamación o para la protección y salvaguardia de los derechos de la sociedad. En todo caso, de acuerdo con lo estipulado por la normatividad Colombiana, si una entidad oficial requiere de su información, estamos en la obligación de entregarla.</li>
                                <li>La información de carácter público de su registro o de los expedientes vinculados con su identificación, podrá ser utilizada con el objeto de realizar estudios de mercado, análisis sectorial, y podrá, de ser necesario, ser entregada a terceros para la realización de estudios. </li>
                            </p>
                            <p className="ion-text-justify">
                                Excepto en lo previsto en la presente política de tratamiento de datos personales, Camara de Comercio de Sogamoso no comparte con terceros los datos personales referentes a los usuarios de su sitio.
                            </p>
                            <h3><b>V Ejercicio de los derechos referentes al tratamiento de los datos personales</b></h3>
                            <p className="ion-text-justify">
                                Usted puede en cualquier momento, revisar, rectificar o modificar sus datos personales accediendo a la sección “Mi Cuenta” de nuestro sitio Web. Si lo prefiere, puede también hacernos llegar su petición de modificación por correo electrónico a direccionjuridica@camarasogamoso.org.
                            </p>
                            <p className="ion-text-justify">
                                Si desea suprimir sus datos personales de nuestro fichero, usted puede ejercer ese derecho haciéndonos llegar su petición por escrito a la atención del departamento legal a la siguiente dirección de correo electrónico: direccionjuridica@camarasogamoso.org.
                            </p>
                            <h3><b>VI Uso de cookies</b></h3>
                            <p className="ion-text-justify">
                                Cuando visita el sitio web de sii2.confecamaras.co, éste envía a su ordenador una “cookie”. Una “cookie” es un pequeño archivo que reside en la unidad del disco duro de su equipo y que contiene información de identificación electrónica que permite identificar al ordenador del usuario (se trata de información no personal). Las cookies permiten a Camara de Comercio de Sogamoso mejorar la funcionalidad de su sitio Web para que sea más útil mediante el almacenamiento de información sobre sus preferencias. Por ejemplo, las “cookies” permiten identificar el resultado de búsquedas de imágenes anteriores. Usted tiene la opción de impedir la generación de "cookies", mediante la selección de la correspondiente opción en su programa navegador. Sin embargo, si Usted decide rechazar las “cookies” , es posible que no pueda beneficiarse de todas las funcionalidades del sitio web.
                            </p>
                            <h3><b>VII Seguridad</b></h3>
                            <p className="ion-text-justify">
                                La protección de sus datos personales es primordial para Camara de Comercio de Sogamoso. Con el fin de proteger la confidencialidad de sus datos personales, Camara de Comercio de Sogamoso ha puesto una serie de mecanismos de protección. Por ejemplo, cuando introduce información sensible la información proporcionada por el usuario se encripta usando la tecnología SSL (Secure Sockets Layer). SSL codifica los datos que se transfieren entre el usuario y el servidor haciendo que resulte ilegible para cualquiera que intente interceptar la información. Sin embargo, sea consciente de que la perfecta seguridad en Internet no existe y por lo tanto Camara de Comercio de Sogamoso no puede garantizar que su sitio sea impenetrable ni invulnerable para los piratas informáticos.
                            </p>
                            <h3><b>VIII Enlaces</b></h3>
                            <p className="ion-text-justify">
                                Tenga en cuenta que este sitio web puede contener enlaces a otros sitios en los que rigen sus propias políticas de confidencialidad. Camara de Comercio de Sogamoso no se responsabiliza de las prácticas de estos sitios y recomendamos a nuestros usuarios que lean detenidamente las declaraciones de confidencialidad de cada uno de los sitios web que reúnan información confidencial identificable.
                            </p>
                            <h3><b>IX Información referente a menores</b></h3>
                            <p className="ion-text-justify">
                                No tenemos ninguna intención de solicitar o recopilar datos personales de menores de 18 años. Si tiene menos de 18 años no proporcione ninguna información en este sitio.
                            </p>
                            <h3><b>X Modificaciones</b></h3>
                            <p className="ion-text-justify">
                                Camara de Comercio de Sogamoso se reserva el derecho a modificar, en cualquier momento, su política relativa al tratamiento de los datos personales de acuerdo con su criterio, o a causa de un cambio legislativo, jurisprudencial o en la práctica empresarial. Tales modificaciones serán publicadas en estas páginas web indicando en la parte superior de esta sección la fecha de la última actualización.
                            </p>
                            <p className="ion-text-justify">
                                Si tiene alguna pregunta sobre nuestra política de tratamiento de datos personales, póngase en contacto con nosotros llamando al teléfono 7702954 o enviando un e-mail direccionjuridica@camarasogamoso.org.
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

export default ModalDatatreatment;
