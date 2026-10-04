escreverTexto();


/* ABRIR RECUPERACAO */


function abrirRecuperacao(){


    let pagina =
    document.getElementById("paginaRecuperar");


    if(
    pagina.style.display === "block"
    ){


        pagina.style.display = "none";
    }


    else{


        pagina.style.display = "block";


        window.scrollTo({


            top:pagina.offsetTop,
            behavior:"smooth"


        });


    }


}