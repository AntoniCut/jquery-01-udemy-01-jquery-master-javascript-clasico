/*
    -------------------------------------------------------------------
    ----------  /spa-with-method-load-from-jquery/  -------------------
    ----------  /jquery.spa-with-method-load-from-jquery.js  ----------
    -------------------------------------------------------------------
*/


/**
 *  - Este plugin `spaWithMethodLoadFromJQueryPlugins` permite cargar contenido dinámico 
 *    en una aplicación SPA utilizando el método `load` de jQuery.
 *  - Envuelve el plugin en una función de `Módulos ES6` para facilitar su integración.
 */

export const spaWithMethodLoadFromJQueryPlugins = () => {


    //  -------------------------------------------------------------------------------------------
    //  ----------  Encapsulación del plugin por si lo implementamos fuera de un modulo  ----------
    //  -------------------------------------------------------------------------------------------

    (function ($) {


        /*
            ----------------------------------------------------------------------------------
            ----------  Plugins  -----  jquery.spa-with-method-load-from-jquery.js  ----------
            ----------------------------------------------------------------------------------
        */

        /**
         * - Plugin SPA que añade funcionalidad al prototipo de jQuery.
         * @param {ConfigOptionsSPA} options - Opciones de configuración de la SPA.
         * @returns {JQuery} - Retorna el objeto jQuery para encadenamiento.
         */

        $.fn.spaWithMethodLoadFromJQuery = function (options) {


            //  ------------------------------------------------------------
            //  ----------  Configuración por defecto del plugin  ----------
            //  ------------------------------------------------------------

            /**
             * @import { ConfigOptionsSPA } from '../../types/config-option-spa-types.js';
             * @type {ConfigOptionsSPA} */

            const settings = $.extend({

                routes: [],
                base: '',
                layoutHeader: '#layoutHeader',
                layoutNavbar: '#layoutNavbar',
                layoutMain: '#layoutMain',
                layoutFooter: '#layoutFooter',
                draggable: false

            }, options);



            //  -------------------------------------------
            //  ----------  referencias al HTML  ----------
            //  -------------------------------------------

            /** 
             *  -  Selector para el `Header` del layout.
             *  @type {JQuery<HTMLHeaderElement>}
             */
            const $layoutHeader = $(settings.layoutHeader);

            /** 
             *  -  Selector para el `Navbar` del layout.
             *  @type {JQuery<HTMLNavElement>}
             */
            const $layoutNavbar = $(settings.layoutNavbar);

            /** 
             *  -  Selector para el `Main` o contenido principal del layout.
             *  @type {JQuery<HTMLMainElement>}
             */
            const $layoutMain = $(settings.layoutMain);

            /** 
             * -  Selector para el `Footer` del layout.
             * @type {JQuery<HTMLFooterElement>} 
             */
            const $layoutFooter = $(settings.layoutFooter);


            //  ------------------------------------------------------------------------------------
            //  ----------  función para la Carga del Contenido Inicial de la Aplicación  ----------
            //  ------------------------------------------------------------------------------------

            /**
             * 
             * - Inicializa la aplicación y carga el contenido de la ruta inicial.
             * @function `init`
             */

            const init = () => {

                
                /**
                 * - normalizedPath - Ruta actual sin el prefijo `settings.base`.
                 * - Se elimina la barra final del pathname para normalizar la ruta.
                 * @type {string} 
                 */
                const normalizedPath = window.location.pathname.replace(/\/$/, '').replace(settings.base, '');
                
                /**
                 * - La ruta correspondiente a la `ruta inicial`.
                 * @import { Route } from '../../types/route-types.js'
                 * @type {Route|undefined}
                 */
                const initialRoute = settings.routes.find(route =>
                    route.path.replace(/\/$/, '') === normalizedPath
                );

                if (initialRoute)
                    loadContent(initialRoute);
                
                else {
                
                    /**
                     * - La ruta correspondiente a la `página 404`.
                     * @type {Route|undefined}
                     */
                    const route404 = settings.routes.find(route => route.id === '404');
                    if (route404) 
                        loadContent(route404);
                }


                history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
            };



            //  --------------------------------------------------------------------
            //  ----------  función para mover componentes por la página  ----------
            //  --------------------------------------------------------------------

            /**
             * - `Función` que hace los `Menus Arrastables`
             */
            const draggableComponentsHtml = () => {

                //  ----------  Hacemos los menús arrastrables  ----------
                $layoutNavbar.draggable({
                    scroll: false
                });

            }


            //  ------------------------------------------------------------------
            //  ----------  Función para manejar la carga de contenido  ----------
            //  ------------------------------------------------------------------

            /**
             *  - `Función` que maneja la carga de contenido para una ruta específica utilizando la `API ViewTransition` 
             *     si está disponible, o un método clásico si no lo está. 
             *  -  Determina el método de transición y delega la carga del contenido. 
             *  @import { Route } from '../../types/route-types.js'
             *  @param {Route} route - Objeto de configuración de la ruta a cargar.
             */

            const loadContent = route => {

                //  -----  Si el navegador no soporta ViewTransition, usa el método clásico  -----
                if (!document.startViewTransition)
                    return loadContentWithoutViewTransition(route);

                return loadContentWithViewTransition(route);

            }


            //  -------------------------------------------------------------------------------------
            //  ----------  Función para manejar la carga de contenido con viewtransition  ----------
            //  -------------------------------------------------------------------------------------

            /**
             * - `Función` que maneja la carga de contenido `utilizando` la `API ViewTransition`.
             *  @param {Route} route - Objeto de configuración de la ruta a cargar.
             *  @return {Promise<void>} - `Promesa` que se resuelve cuando todo el contenido se ha cargado correctamente.
             */

            const loadContentWithViewTransition = async (route) => {

                document.startViewTransition(async () => {

                    try {
                        await loadTodoContentInHtml(route);

                    } catch (err) {
                        console.error("❌ Error durante la carga de contenido:", err);
                    }

                });
            };



            //  -------------------------------------------------------------------------------------
            //  ----------  Función para manejar la carga de contenido sin viewtransition  ----------
            //  -------------------------------------------------------------------------------------

            /**
             * - `Función` que maneja la carga de contenido `sin utilizar` la `API ViewTransition`.
             * @param {Route} route - Objeto de configuración de la ruta a cargar.
             */

            const loadContentWithoutViewTransition = route => loadTodoContentInHtml(route);



            //  ----------------------------------------------------------------------
            //  ----------  Función que carga todo el contenido en el HTML  ----------
            //  ----------------------------------------------------------------------

            /**
             *  `Función que carga dinámicamente los layouts principales y los recursos de una ruta`.
             *  @param {Route} route - Objeto de configuración de la ruta a cargar.
             *  @returns {Promise<void>} - `Promesa` que se resuelve cuando todo el contenido se ha cargado correctamente.
             */

            const loadTodoContentInHtml = (route) => {


                return new Promise((resolve, reject) => {

                    //  -----  Carga el Layout Header  -----
                    $layoutHeader.load(route.urlLayoutHeader, function (response, status, xhr) {

                        if (status === "error") {
                            console.error(`Error al cargar ${route.urlLayoutHeader}: ${xhr.statusText}`);
                            $layoutHeader.html('<p>Error 404: No se pudo cargar el contenido del header.</p>');
                            return reject(new Error(`Error al cargar Header: ${xhr.statusText}`));
                        }

                        //  -----  Carga el Título del Header  -----
                        $('#headerTitle').html(route.headerTitle);

                        //  -----  Cargamos el Navbar dentro del Header  -----
                        $layoutNavbar.load(route.urlLayoutNavbar, (response, status, xhr) => {

                            if (status === "error") {
                                console.error(`Error al cargar ${route.urlLayoutNavbar}: ${xhr.statusText}`);
                                $layoutNavbar.html('<p>Error 404: No se pudo cargar el contenido del navbar.</p>');
                                return reject(new Error(`Error al cargar Navbar: ${xhr.statusText}`));
                            }

                            //  -----  Acciones del Navbar -----
                            actionsNavbar();

                            if (settings.draggable) {
                                draggableComponentsHtml();
                            }

                        });

                    });


                    //  -----  Carga el contenido principal (Main)  -----
                    $layoutMain.load(route.urlLayoutMain, function (response, status, xhr) {

                        if (status === "error") {
                            console.error(`Error al cargar ${route.urlLayoutMain}: ${xhr.statusText}`);
                            $layoutMain.html('<p>Error 404: No se pudo cargar el contenido principal.</p>');
                            return reject(new Error(`Error al cargar Main: ${xhr.statusText}`));
                        }

                    });


                    //  -----  Carga el Footer  -----
                    $layoutFooter.load(route.urlLayoutFooter, function (response, status, xhr) {

                        if (status === "error") {
                            console.error(`Error al cargar ${route.urlLayoutFooter}: ${xhr.statusText}`);
                            $layoutFooter.html('<p>Error 404: No se pudo cargar el contenido del footer.</p>');
                            return reject(new Error(`Error al cargar Footer: ${xhr.statusText}`));
                        }

                        //  -----  Título del Footer  -----
                        $('#footerTitle').html(route.headerTitle);

                        // ✅ Todo cargado correctamente
                        resolve();

                    });


                    //  -----  Carga el Favicon  -----
                    updateFavicon(route.favicon);


                    //  -----  Carga el Título de la Página  -----
                    document.title = route.pageTitle;


                    //  -----  Actualizamos la URL de la Página  -----
                    const newUrl = `${settings.base}${route.path}`;

                    if (window.location.pathname !== newUrl) {
                        history.pushState({ path: newUrl }, '', newUrl);
                    }


                    // ----- Carga los Estilos (si existen) -----
                    if (route.styles) {
                        loadStylesheet(route.styles);
                    }


                    // ----- Carga los Scripts (si existen) -----
                    if (route.scripts) {
                        route.scripts.forEach(script => loadScriptsIfExists(script));
                    }

                });


            };



            //  --------------------------------------------------------
            //  ----------  Función que Actualiza el Favicon  ----------
            //  --------------------------------------------------------

            /**
             
             * - `Función` que actualiza el `favicon` de la página.
             * @param {string} favicon - La URL del nuevo favicon.
             */

            const updateFavicon = favicon => {

                let $favicon = $('link[rel~="icon"]');

                if ($favicon.length === 0)
                    $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');

                $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);

            }


            //  ------------------------------------------------------------------
            //  ----------  Función que Carga los estilos de la página  ----------
            //  ------------------------------------------------------------------

            /**
             * - `Función` que carga un `archivo CSS` en la página.
             * @param {string} cssFile - La URL del archivo CSS a cargar.
             */

            const loadStylesheet = cssFile => {

                //  -----  Elimina los CSS de páginas anteriores,  -------- 
                //  -----  excepto layout-header.css (que es global)  -----


                $('link[data-page-style="true"]').remove();

                //  -----  Crea el nuevo link  -----
                $('<link>')
                    .attr({
                        rel: 'stylesheet',
                        href: `${cssFile}?t=${new Date().getTime()}`,
                        'data-page-style': 'true'
                    })
                    .appendTo('head');
            };


            //  ------------------------------------------------------------------
            //  ----------  Función que Carga un Script si este Existe  ----------
            //  ------------------------------------------------------------------

            /**
             * - `Función` que carga un `script` si este existe.
             * @param {string} scriptUrl - La URL del script a cargar.
             */

            const loadScriptsIfExists = scriptUrl => {

                $.ajax({

                    url: scriptUrl,
                    type: 'HEAD',

                    success: function () {

                        $.getScript(scriptUrl)
                            .done(() => console.log(`Cargado: ${scriptUrl}`))
                            .fail((jqxhr, settings, exception) => console.error(`Error en ${scriptUrl}:`, exception));
                    },

                    error: function () {
                        console.warn(`No existe el script: ${scriptUrl}`);
                    }

                });

            }



            // ------------------------------------------------------
            // ----------  Función para acciones del menú  ----------
            // ------------------------------------------------------

            /**
             * - `Función` para manejar las `acciones` del `menú de navegación`.
             */

            const actionsNavbar = () => {


                const $layoutNavbar = $('#layoutNavbar .navbar__container');

                //  -----  Ocultamos el navbar y el botón de cerrar al inicio  -----
                $layoutNavbar.hide();
                $('.navbar__btn-close').hide();


                //  -----  Evita múltiples bindings usando namespaces  -----
                $(document)

                    .off('mouseenter.navbar mouseleave.navbar click.navbar')

                    .on('mouseenter.navbar', '.navbar__container', function () {
                        $(this).stop(true, true);
                    })

                    //  -----  Botón Abrir  -----
                    .on('click.navbar', '.navbar__btn-open', function (e) {
                        e.stopPropagation();

                        //  -----  Mostrar navbar  -----
                        $layoutNavbar.stop(true, true).slideToggle(1000);

                        // Cambiar botones
                        $(this).hide(); // oculto abrir
                        $('.navbar__btn-close').show(); // muestro cerrar
                    })


                    //  -----  Botón Cerrar  -----
                    .on('click.navbar', '.navbar__btn-close', function (e) {
                        e.stopPropagation();

                        //  -----  Ocultar navbar  -----
                        $layoutNavbar.stop(true, true).slideUp(1000);

                        //  -----  Cambiar botones  -----
                        $(this).hide();                     // oculto cerrar
                        $('.navbar__btn-open').show();      // muestro abrir
                    })

                    //  -----  Clic fuera  -----
                    .on('click.navbar', function () {
                        $layoutNavbar.stop(true, true).slideUp(1000);
                        $('.navbar__btn-close').hide();   // oculto cerrar
                        $('.navbar__btn-open').show();    // muestro abrir  
                    });
            };



            //  -----------------------------------------------------------
            //  ----------  Manejador de clics para los enlaces  ----------
            //  -----------------------------------------------------------

            $(document).on('click', 'a[data-id]', function (event) {

                event.preventDefault();

                //  -----  Obtener el ID del enlace clicado  -----

                /**
                 * @type {string} dataId - El valor del atributo `data-id` del enlace clicado.
                 */
                const dataId = $(this).data('id');

                /**
                 * - La ruta correspondiente al `data-id` clicado.
                 * @type {Route|undefined} 
                 */
                const route = settings.routes.find(route => route.id === dataId);

                //  -----  Ocultamos la lista del menú efecto slideUp antes de cambiar el contenido  -----
                const $layoutNavbar = $('#layoutNavbar .layout__navbar');
                $layoutNavbar.slideUp(1000);

                //  -----  si hemos clicado en una seccion del menú  -----
                //  -----  cargamos el contenido de la sección  ----------
                if (route)
                    loadContent(route);

                else {
                    const route404 = settings.routes.find(route => route.id === '404');
                    if (route404) loadContent(route404);
                }

            });



            //  ----------------------------------------------------------
            //  ----------  Manejar retrocesos en el historial  ----------
            //  ----------------------------------------------------------

            window.addEventListener('popstate', function (event) {

                /**
                 * @type {string} normalizedPath - Ruta actual sin el prefijo `settings.base`.
                 */
                const normalizedPath = (event.state?.path || window.location.pathname)
                    .replace(settings.base, '')
                    .replace(/\/$/, '');

                const matchedRoute = settings.routes.find(route =>
                    route.path.replace(/\/$/, '') === normalizedPath
                );

                if (matchedRoute)
                    loadContent(matchedRoute);
                
                else {
                    const route404 = settings.routes.find(route => route.id === '404');
                    if (route404) loadContent(route404);
                }


            });



            //  ------------------------------------------------
            //  ----------  Punto Inicial del Plugin  ----------
            //  ------------------------------------------------

            console.log('\n');
            console.warn('----------------------------------------------------------------------------------------------------');
            console.warn('----------  pluging - jquery.spa-with-method-load-from-jquery.js - cargado correctamente  ----------');
            console.warn('----------------------------------------------------------------------------------------------------');
            console.log('\n');

            //  ----------  INICIO Aplicación  ----------
            init();


            return this;


        };


    })(jQuery);


}
