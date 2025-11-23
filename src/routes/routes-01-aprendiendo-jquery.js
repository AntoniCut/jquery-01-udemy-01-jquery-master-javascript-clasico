/*
    ----------------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ---------------------------------
    ----------  /01-udemy/01-jquery-master-javascript-clasico/  ----------
    ----------  /src/routes/  --------------------------------------------
    ----------  /routes-01-aprendiendo-jquery.js  ------------------------
    ----------------------------------------------------------------------
*/


/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */

export const routes01AprendiendoJQuery = [

    {
        id: 'primerosPasosJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/01-aprendiendo-jquery/01-jquery-primeros-pasos.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Aprendiendo jQuery - Primeros Pasos',
        path: '/aprendiendo-jquery/primeros-pasos/',
        headerTitle: 'Aprendiendo jQuery - 1. Primeros Pasos',   
        styles: '/01-udemy/01-jquery-master-javascript-clasico/src/styles/01-jquery/01-jquery-primeros-pasos.css',
        scripts: [
            '/01-udemy/01-jquery-master-javascript-clasico/src/scripts/01-aprendiendo-jquery/01-jquery-primeros-pasos.js'
        ]
    },

    {
        id: 'selectoresJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/01-aprendiendo-jquery/02-jquery-selectores.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Aprendiendo jQuery - Selectores',
        path: '/aprendiendo-jquery/selectores/',
        headerTitle: 'Aprendiendo jQuery - 2. Selectores',
        styles: '/01-udemy/01-jquery-master-javascript-clasico/src/styles/01-jquery/02-jquery-selectores.css',
        scripts: [
            '/01-udemy/01-jquery-master-javascript-clasico/src/scripts/01-aprendiendo-jquery/02-jquery-selectores.js'
        ]
    },

    {
        id: 'eventosJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/01-aprendiendo-jquery/03-jquery-eventos.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Aprendiendo jQuery - Eventos',
        path: '/aprendiendo-jquery/eventos/',
        headerTitle: 'Aprendiendo jQuery - 3. Eventos',
        styles: '/01-udemy/01-jquery-master-javascript-clasico/src/styles/01-jquery/03-jquery-eventos.css',
        scripts: [
            '/01-udemy/01-jquery-master-javascript-clasico/src/scripts/01-aprendiendo-jquery/03-jquery-eventos.js'
        ]
    },

    {
        id: 'domJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/01-aprendiendo-jquery/04-jquery-manipulacion-dom.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Aprendiendo jQuery - Manipulación del DOM',
        path: '/aprendiendo-jquery/manipulacion-dom/',
        headerTitle: 'Aprendiendo jQuery - 4. Manipulación del DOM',
        styles: '/01-udemy/01-jquery-master-javascript-clasico/src/styles/01-jquery/04-jquery-manipulacion-dom.css',
        scripts: [
            '/01-udemy/01-jquery-master-javascript-clasico/src/scripts/01-aprendiendo-jquery/04-jquery-manipulacion-dom.js'
        ]
    },

    {
        id: 'efectosJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/01-aprendiendo-jquery/05-jquery-efectos.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Aprendiendo jQuery - Efectos en jQuery',
        path: '/aprendiendo-jquery/efectos/',
        headerTitle: 'Aprendiendo jQuery - 5. Efectos en jQuery',
        styles: '/01-udemy/01-jquery-master-javascript-clasico/src/styles/01-jquery/05-jquery-efectos.css',
        scripts: [
            '/01-udemy/01-jquery-master-javascript-clasico/src/scripts/01-aprendiendo-jquery/05-jquery-efectos.js'
        ]
    },

    {
        id: 'animacionesJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/01-aprendiendo-jquery/06-jquery-animaciones-personalizadas.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Aprendiendo jQuery - Animaciones Personalizadas y Callback en Funciones',
        path: '/aprendiendo-jquery/animaciones-personalizadas/',
        headerTitle: 'Aprendiendo jQuery - 6. Animaciones Personalizadas y Callback en Funciones',
        styles: '/01-udemy/01-jquery-master-javascript-clasico/src/styles/01-jquery/06-jquery-animaciones-personalizadas.css',
        scripts: [
            '/01-udemy/01-jquery-master-javascript-clasico/src/scripts/01-aprendiendo-jquery/06-jquery-animaciones-personalizadas.js'
        ]
    },

    {
        id: 'peticionesAjaxJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/01-aprendiendo-jquery/07-jquery-peticiones-ajax.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components/layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'Aprendiendo jQuery - Peticiones Ajax',
        path: '/aprendiendo-jquery/peticiones-ajax/',
        headerTitle: 'Aprendiendo jQuery - 7. Peticiones Ajax',
        styles: '/01-udemy/01-jquery-master-javascript-clasico/src/styles/01-jquery/07-jquery-peticiones-ajax.css',
        scripts: [
            '/01-udemy/01-jquery-master-javascript-clasico/src/scripts/01-aprendiendo-jquery/07-jquery-peticiones-ajax.js'
        ]
    }
        
];
