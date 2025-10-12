/*
    ----------------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ---------------------------------
    ----------  /01-udemy/01-jquery-master-javascript-clasico/  ----------
    ----------  /src/scripts/01-aprendiendo-jquery/  ---------------------
    ----------  /01-jquery-primeros-pasos.js  ----------------------------
    ----------------------------------------------------------------------  
*/


(($) => {

    console.log('\n');
    console.warn('-----  01-jquery-primeros-pasos.js  -----');
    alert('Aprendiendo jQuery del Master de JavaScript Clásico');

    const $title = $(".primeros-pasos__title");

    $title.html(`
        <br>
        <span class="text-jquery"> Texto Inyectado por jQuery </span>
        <br> <br> <br>
        1. Aprendiendo jQuery - Primeros Pasos. 
        <br> <br> - 1.1 - ¿ Que es jQuery y para qué sirve ?
        <br><br> -  1.2 - Integrar jQuery.
        <br><br> - 1.3 - Diferencias versiones jQuery 1, 2 y 3
    `);


})(jQuery);
