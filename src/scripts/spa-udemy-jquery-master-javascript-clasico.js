/*
    -----------------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ----------------------------------
    ----------  /01-udemy-01-jquery-master-javascript-clasico/  -----------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /spa-udemy-jquery-master-javascript-clasico.js/  ----------
    -----------------------------------------------------------------------
*/



import { routes00Home } from "/01-udemy/01-jquery-master-javascript-clasico/src/routes/routes-00-home.js";
import { routes01AprendiendoJQuery } from "/01-udemy/01-jquery-master-javascript-clasico/src/routes/routes-01-aprendiendo-jquery.js";



/**
 * Inicializa la lógica **SPA** (Single Page Application) para
 * la sección *jQuery Desarrollos* del proyecto.
 *
 * Esta función configura las rutas, opciones y elementos del
 * layout, y luego invoca el plugin `spaWithMethodLoadFromJQuery`
 * para manejar la navegación dinámica dentro de la aplicación.
 *
 * @function spaJQueryUdemyMasterJavaScriptClasico
 *
 * @param {typeof window.jQuery} $ - Instancia de jQuery ya cargada en el proyecto.
 *
 * @description
 *  1. Importa las rutas definidas en:
 *     `routes00Home`,
 *     `routes01AprendiendoJQuery`.
 *  2. Combina las rutas en un array (`allRoutes`).
 *  3. Obtiene una referencia al contenedor principal (`#layout`).
 *  4. Configura las opciones necesarias para el plugin SPA,
 *     incluyendo las secciones del layout (header, navbar, main, footer).
 *  5. Invoca el plugin `spaWithMethodLoadFromJQuery` para activar
 *     la navegación en una sola página.
 *
 * @example
 * import { spaJQueryUdemyMasterJavaScriptClasico } from './spa-jquery-udemy-master-javascript-clasico.js';
 *
 * // Inicializar la SPA una vez que jQuery esté listo:
 * spaJQueryUdemyMasterJavaScriptClasico(window.jQuery);
 */


export const spaUdemyJQueryMasterJavaScriptClasico = ($) => {


    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  spa-udemy-jquery-master-javascript-clasico.js  -----');


    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------
    const allRoutes = [

        ...routes00Home,
        ...routes01AprendiendoJQuery

    ];


    //  ----------  referencias al HTML  ----------

    /**
     * Elemento raíz de la aplicación SPA.
     * @constant
     * @type {jQuery}
     */
    const $layout = $('#layout');


    //  ----------  Opciones que le pasamos al plugins  ----------

    /**
     * Objeto de configuración que define cómo debe comportarse
     * el plugin `spaWithMethodLoadFromJQuery`.
     *
     * @constant
     * @type {Object}
     *
     * @property {Array<Object>} routes - Conjunto de rutas definidas para la SPA.
     * @property {string} base - Ruta base de la aplicación (se deja vacía si no se usa `history.pushState` o hash routing).
     * @property {string} layoutHeader - Selector CSS del contenedor de la cabecera.
     * @property {string} layoutNavbar - Selector CSS del contenedor de la barra de navegación.
     * @property {string} layoutMain - Selector CSS del contenedor principal donde se cargan las vistas.
     * @property {string} layoutFooter - Selector CSS del contenedor del pie de página.
     * @property {boolean} draggable - Indica si se habilitan funciones de arrastre dentro de la SPA.
     *
     * @example
     *  $layout.spaWithMethodLoadFromJQuery(configOptions);
     */


    const configOptions = {
        routes: allRoutes,
        //base: '', 
        base: '/01-udemy/01-jquery-master-javascript-clasico', 
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        draggable: true
    }

    console.log("🚀 configOptions:", configOptions);

    
    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js  ----------
    $layout.spaWithMethodLoadFromJQuery(configOptions);

}
