/*
    ----------------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ---------------------------------
    ----------  /01-udemy/01-jquery-master-javascript-clasico/  ----------
    ----------  /src/scripts/01-aprendiendo-jquery/  ---------------------
    ----------  /06-jquery-animaciones-personalizadas.js  ----------------
    ----------------------------------------------------------------------  
*/


(($) => {


    console.log('\n');
    console.warn('-----  06-jquery-animaciones-personalizadas.js  -----');
    console.log('\n');


    //  -----  Referencias al HTML  -----

    /**
    * - `Caja` a la que se le aplicarán los efectos jQuery.
    * @type {JQuery<HTMLDivElement>}
    */
    const $caja = $('#caja');

    /**
     * - `Botón` para iniciar la `Animación`
     * @type {JQuery<HTMLButtonElement>}
     */
    const $btnAnimame = $('#btnAnimame');
              
    
    //  -----  Evento Click del Botón para iniciar la Animación  -----
    $btnAnimame.on('click', function () {

        $caja

            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                fontFamily: 'Tahoma',
                height: '110px'
            }, 5000)

            
            .animate({
                borderRadius: '900px',
                lineHeight: '110px',
                marginTop: '120px'
            }, 'slow')
           
            .animate({
                borderRadius: '0px',
                marginLeft: '-420px'
            }, 5000)
            
            .animate({
                borderRadius: '0px',
                marginTop: '20px',
                height: '50px',
                lineHeight: '50px',
                fontFamily: 'Verdana',
                fontSize: '19px'
            }, 'slow',
                
                //  -----  callback de función  -----
                function () {        
                    setTimeout(() => alert('Animación Terminada!!!'), 1000);
                })
            
    });



})(jQuery);
