/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01/udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------  
    ----------  /src/types/  ------------------------------------
    ----------  /jquery-spa-plugin.d.ts  ------------------------
    -------------------------------------------------------------
*/


import $ from "jquery";


declare global {
    
    interface JQuery {
        
        /**
         * - `Plugin SPA` personalizado que usa el método `load()`.
         * @param options - Objeto de configuración para la SPA.
         * @returns {JQuery}
         */
        
        spaWithMethodLoadFromJQuery(options: object): JQuery;

    }

}

export { };
