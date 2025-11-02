/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01/udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------  
    ----------  /src/types/  ------------------------------------
    ----------  /routes-types.js  -------------------------------
    -------------------------------------------------------------
*/


//  ----------  Esto asegura que VS Code lo trate como módulo  ----------
export {}; 

/**
 *  - Objeto que define la configuración de una ruta en la aplicación SPA.
 * @typedef {Object} Route
 * @property {string} id - Identificador único de la ruta (usado en los enlaces `data-id`).
 * @property {string} path - Ruta relativa del navegador (usada en `history.pushState`).
 * @property {string} urlLayoutHeader - URL del archivo HTML del layout del encabezado.
 * @property {string} urlLayoutNavbar - URL del archivo HTML del layout del menú de navegación.
 * @property {string} urlLayoutMain - URL del archivo HTML principal que se carga dinámicamente.
 * @property {string} urlLayoutFooter - URL del archivo HTML del pie de página.
 * @property {string} favicon - Ruta del favicon que se mostrará en la pestaña del navegador.
 * @property {string} pageTitle - Título del documento (propiedad `document.title`).
 * @property {string} headerTitle - Texto mostrado en el encabezado principal de la vista.
 * @property {string|null} [styles] - Hoja de estilos asociada a la vista (opcional).
 * @property {string[]|null} [scripts] - Archivos JavaScript adicionales a cargar (opcional).
 */