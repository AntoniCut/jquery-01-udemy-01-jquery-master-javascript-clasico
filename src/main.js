/*
    ----------------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ---------------------------------
    ----------  /01-udemy/01-jquery-master-javascript-clasico/  ----------
    ----------  /src/main.js  --------------------------------------------
    ----------------------------------------------------------------------
*/


import { cdnJQuery_4_0_0 } from "/01-udemy/01-jquery-master-javascript-clasico/src/libs/jquery/cdn/cdn-jquery-4.0.0.js";
import { loadJQueryByCdnOLocal } from "/01-udemy/01-jquery-master-javascript-clasico/src/libs/jquery/load/load-jquery-by-cdn-local.js";

import { cdnJQueryUI_1_14_1 } from "/01-udemy/01-jquery-master-javascript-clasico/src/libs/jquery-ui/cdn/cdn-jquery-ui-1.14.1.js";
import { loadJQueryUIByCdnOLocal } from "/01-udemy/01-jquery-master-javascript-clasico/src/libs/jquery-ui/load/load-jquery-ui-by-cdn-local.js";

import { spaWithMethodLoadFromJQueryPlugins } from "/01-udemy/01-jquery-master-javascript-clasico/src/plugins/spa-with-method-load-from-jquery/jquery.spa-with-method-load-from-jquery.js";
import { spaUdemyJQueryMasterJavaScriptClasico } from "/01-udemy/01-jquery-master-javascript-clasico/src/scripts/spa-udemy-jquery-master-javascript-clasico.js";



/* 
    =========================================
    -----  Efecto Loading de la Página  -----
    ========================================= 
*/

/**
 * @param {Event} event - Evento DOMContentLoaded
 * Maneja el efecto de carga inicial de la aplicación.
 *
 * Al cargar el DOM, muestra un *loader* y luego hace la transición
 * para mostrar el contenido principal (`#layout`) con un efecto de
 * fade-in, mientras oculta el *loader* con un fade-out.
 *
 * @description
 *  1. Selecciona los elementos `#loader` y `#layout` del DOM.
 *  2. Verifica que ambos elementos existan; si no, muestra un error.
 *  3. Espera 1 segundo antes de iniciar la transición (simula tiempo de carga).
 *  4. Muestra el `layout` cambiando su `display` a `flex`.
 *  5. Aplica la clase `fade-in` al layout para animación CSS.
 *  6. Aplica la clase `fade-out` al loader para animación CSS.
 *  7. Una vez termina la transición del loader, se oculta (`display: none`).
 */



document.addEventListener('DOMContentLoaded', () => {

    // ---------- Referencias a los elementos del DOM ----------
    const loader = document.querySelector('#loader');   // Elemento de carga
    const layout = document.querySelector('#layout');   // Contenedor principal

    // ---------- Verificar existencia de elementos ----------
    if (!loader || !layout) {
        console.error("Loader o layout no encontrado en el DOM");
        return;
    }

    // ---------- Retrasar la animación para simular carga ----------
    setTimeout(() => {

        // Mostrar layout
        layout.style.display = "flex";

        // Aplicar transición de fade-in al layout
        requestAnimationFrame(() => {
            layout.classList.add("fade-in");
        });

        // Aplicar fade-out al loader
        loader.classList.add("fade-out");

        // Una vez que termina la transición del loader, ocultarlo
        loader.addEventListener("transitionend", () => {
            loader.style.display = "none";
        }, { once: true });

    }, 1000); // Tiempo de espera en milisegundos

});



/* 
   ==============================
    -----  Carga de jQuery  -----
   ============================== 
*/

/**
 * Configuración del CDN de jQuery.
 * Se importa desde /src/libs/jquery/cdn/cdn-jquery-4.0.0.js
 * @type {Object}
 * @property {string} srcCdn - URL del archivo jQuery en el CDN.
 * @property {string} [integrity] - Hash de integridad para seguridad (opcional).
 * @property {string} [crossOrigin] - Política CORS (opcional).
 * @property {string} [referrerPolicy] - Política de referer (opcional).
 */

const cdnJQuery = cdnJQuery_4_0_0;


/**
 * Ruta del archivo jQuery local a usar como fallback si el CDN falla.
 * @type {string}
 */
const localJQuery = "/01-udemy/01-jquery-master-javascript-clasico/src/libs/jquery/local/jquery-4.0.0-beta.min.js";



/* 
   =================================
    -----  Carga de jQuery UI  -----
   ================================= 
*/

/**
 * Configuración del CDN de jQuery UI.
 * Se importa desde /src/libs/jquery-ui/cdn/cdn-jquery-ui-1.14.1.js
 * @type {Object}
 * @property {string} srcCdn - URL del archivo jQuery UI en el CDN.
 * @property {string} [integrity] - Hash de integridad para seguridad (opcional).
 * @property {string} [crossOrigin] - Política CORS (opcional).
 * @property {string} [referrerPolicy] - Política de referer (opcional).
 */

const cdnJQueryUI = cdnJQueryUI_1_14_1;


/**
 * Ruta del archivo jQuery UI local a usar como fallback si el CDN falla.
 * @type {string}
 */
const localJQueryUI = "/01-udemy/01-jquery-master-javascript-clasico/src/libs/jquery-ui/local/jquery-ui-1.14.1.min.js";



/* 
    ===========================================================
    -----  Ejecución de Promesas para Carga de Librerías  -----
    =========================================================== 
*/

console.log('\n');
console.warn("-----  Iniciando carga de jQuery y jQueryUI...  -----");
console.log('\n');


/**
 * Carga jQuery desde CDN o fallback local.
 * Luego carga jQuery UI desde CDN o fallback local.
 * Después ejecuta los plugins principales del proyecto.
 */
loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.warn("jQuery cargado correctamente - Versión:", $.fn.jquery);

        //  -----  Carga jQuery UI  -----
        return loadJQueryUIByCdnOLocal(cdnJQueryUI, localJQueryUI)

            .then($ => {

                if (!$.ui) {
                    console.log('\n');
                    throw new Error("jQuery UI no se cargó correctamente.");
                }

                console.warn("jQuery UI cargado correctamente - Versión:", $.ui.version);

                //  -----  Ejecuta plugin que carga el contenido dinámico  -----
                spaWithMethodLoadFromJQueryPlugins($);

                //  -----  Ejecuta script principal del proyecto  -----
                spaUdemyJQueryMasterJavaScriptClasico($);

                //  ----- Limpia la consola después de 10 segundos  -----
                setTimeout(() => console.clear(), 10000);

            });

    })

    .catch(err => console.error("Error al cargar jQuery o jQuery UI:", err));
