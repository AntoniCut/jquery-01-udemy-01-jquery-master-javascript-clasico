/*
    -----------------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ----------------------------------
    ----------  /01-udemy-01-jquery-master-javascript-clasico/  -----------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /spa-udemy-jquery-master-javascript-clasico.js/  ----------
    -----------------------------------------------------------------------
*/


import { routes00Home } from "../../routes/routes-00-home.js";
import { routes01AprendiendoJQuery } from "../../routes/routes-01-aprendiendo-jquery.js";
import { routes02AprendiendoJQueryUI } from "../../routes/routes-02-aprendiendo-jquery-ui.js";



/**  ----------------------------------------------------------------------------------------------------
 *   @function `spaJQueryUdemyMasterJavaScriptClasico`
 *   
 * - Inicializa la lógica **SPA** (Single Page Application) para
 *   El Proyecto 01-jquery-master-javascript-clasico del curso de Udemy.
 *
 * - Esta función configura las rutas, opciones y elementos del
 *   layout, y luego invoca el plugin `spaWithMethodLoadFromJQuery`
 *   para manejar la navegación dinámica dentro de la aplicación.
 *
 *  - Importa las rutas definidas en:`routesJQueryAntonydevTech`.
 *  - Combina las rutas en un array `allRoutes`.
 *  - Obtiene una referencia al contenedor principal `#layout`.
 *  - Configura las opciones necesarias para el plugin SPA,
 *    incluyendo las secciones del layout `header`, `navbar`, `main`, `footer`.
 *  - Invoca el plugin `spaWithMethodLoadFromJQuery` para activar la navegación en una sola página.
 *  ----------------------------------------------------------------------------------------------------
 */

export const spaUdemyJQueryMasterJavaScriptClasico = () => {


    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  spa-udemy-jquery-master-javascript-clasico.js  -----');


    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------

    /**
     * - Array que combina todas las rutas definidas para la aplicación SPA.
     * @import { Route } from '../../types/route-types.js'
     * @type {Array<Route>}
     */

    const allRoutes = [
        ...routes00Home,
        ...routes01AprendiendoJQuery,
        ...routes02AprendiendoJQueryUI
    ];


    //  ----------  referencias al HTML  ----------

    /** 
     * -  Elemento raíz de la aplicación SPA.
     * -  Selecciona el contenedor principal de la aplicación SPA utilizando jQuery.
     * @type {JQuery<HTMLDivElement>}
     */

    const $layout = $('#layout');


    //  ----------  Opciones que le pasamos al plugins  ----------

    /**
     * - Configuración de opciones para el plugin SPA.
     * @import { ConfigOptionsSPA } from '../../types/config-option-spa-types.js';
     * @type {ConfigOptionsSPA}
     */

    const configOptions = {
        routes: allRoutes,
        base: '/01-udemy/01-jquery-master-javascript-clasico',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        draggable: true
    }


    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js  ----------
    $layout.spaWithMethodLoadFromJQuery(configOptions);


}
