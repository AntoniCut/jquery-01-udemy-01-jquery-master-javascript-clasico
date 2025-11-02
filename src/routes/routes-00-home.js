/*
    ----------------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ---------------------------------
    ----------  /01-udemy/01-jquery-master-javascript-clasico/  ----------
    ----------  /src/routes/  --------------------------------------------
    ----------  /routes-00-home.js  --------------------------------------
    ----------------------------------------------------------------------
*/


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA` para la página Home.
 *  @import { Route } from '../types/route-types.js'
 *  @type {Route[]}
 */

export const routes00Home = [

    {
        id: 'homeJQuery',
        urlLayoutHeader: '/01-udemy/01-jquery-master-javascript-clasico/src/components-layout/layout-header.html',
        urlLayoutNavbar: '/01-udemy/01-jquery-master-javascript-clasico/src/components-layout/layout-navbar.html',
        urlLayoutMain: '/01-udemy/01-jquery-master-javascript-clasico/src/pages/00-home.html',
        urlLayoutFooter: '/01-udemy/01-jquery-master-javascript-clasico/src/components-layout/layout-footer.html',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/assets/favicon/jquery-favicon.ico',
        pageTitle: 'jQuery Master JavaScript Clásico de Udemy',
        path: '/',
        headerTitle: 'jQuery del Master de JavaScript Clásico de Udemy de Victor Robles Web',
        styles: '',
        scripts: []
    }
            
];
