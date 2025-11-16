/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01/udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------  
    ----------  /src/types/  ------------------------------------
    ----------  /config-option-spa-types.js  --------------------
    -------------------------------------------------------------
*/


/**
 * @typedef {import('./route-types.js').Route} Route
 */

//  ----------  Esto asegura que VS Code lo trate como módulo  ----------
export {}; 


/**
 *  - Objeto que define la configuración que le pasamos al plugin `spaWithMethodLoadFromJQuery`
 * 
 * @typedef {Object} ConfigOptionsSPA
 * 
 * @property {Route[]} routes - Conjunto de rutas definidas para la SPA.
 * @property {string} base - Ruta base de la aplicación (se deja vacía si no se usa `history.pushState` o hash routing).
 * @property {string} layoutHeader - Selector CSS del contenedor de la cabecera.
 * @property {string} layoutNavbar - Selector CSS del contenedor de la barra de navegación.
 * @property {string} layoutMain - Selector CSS del contenedor principal donde se cargan las vistas.
 * @property {string} layoutFooter - Selector CSS del contenedor del pie de página.
 * @property {boolean} draggable - Indica si se habilitan funciones de arrastre dentro de la SPA.
 */