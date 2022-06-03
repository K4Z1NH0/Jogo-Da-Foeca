let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001= {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002= {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra003= {
        nome: "ARUJA",
        categoria: "LUGARES"
    },
    palavra004= {
        nome: "PARIS",
        categoria: "LUGARES"
    },
    palavra005= {
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra006= {
        nome: "DUBAI",
        categoria: "LUGARES"
    },
    palavra007= {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra008= {
        nome: "PARIS",
        categoria: "LUGARES"
    },
    palavra009= {
        nome: "GUARULHOS",
        categoria: "LUGARES"
    },
    palavra010= {
        nome: "TOKYO",
        categoria: "LUGARES"
    },
    palavra011= {
        nome: "PIZZA",
        categoria: "COMIDAS"
    },
    palavra012= {
        nome: "SALADA",
        categoria: "COMIDAS"
    },
    palavra013= {
        nome: "ACEM",
        categoria: "COMIDAS"
    },
    palavra014= {
        nome: "ARROZ",
        categoria: "COMIDAS"
    },
    palavra015= {
        nome: "LASANHA",
        categoria: "COMIDAS"
    },
    palavra016= {
        nome: "MACARRAO",
        categoria: "COMIDAS"
    },
    palavra017= {
        nome: "SOPA",
        categoria: "COMIDAS"
    },
    palavra018= {
        nome: "FEIJAO",
        categoria: "COMIDAS"
    },
    palavra019= {
        nome: "FRANGO",
        categoria: "COMIDAS"
    },
    palavra020= {
        nome: "BIFE",
        categoria: "COMIDAS"
    },
    palavra021= {
        nome: "GARFO",
        categoria: "OBJETOS"
    },
    palavra022= {
        nome: "ESCADA",
        categoria: "OBJETO"
    },
    palavra023= {
        nome: "TECLADO",
        categoria: "OBJETOS"
    },
    palavra024= {
        nome: "CELULAR",
        categoria: "OBJETOS"
    },
    palavra025= {
        nome: "CHINELO",
        categoria: "OBJETOS"
    },
    palavra026= {
        nome: "ESCOVA",
        categoria: "OBJETOS"
    },
    palavra027= {
        nome: "MESA",
        categoria: "OBJETOS"
    },
    palavra028= {
        nome: "PRATO",
        categoria: "OBJETOS"
    },
    palavra029= {
        nome: "CADERNO",
        categoria: "OBJETOS"
    },
    palavra030= {
        nome: "CADEIRA",
        categoria: "OBJETOS"
    },
    palavra031= {
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },
    palavra032= {
        nome: "GATO",
        categoria: "ANIMAIS"
    },
    palavra033= {
        nome: "ELEFANTE",
        categoria: "ANIMAIS"
    },
    palavra034= {
        nome: "GIRAFA",
        categoria: "ANIMAIS"
    },
    palavra035= {
        nome: "LEAO",
        categoria: "ANIMAIS"
    },
    palavra036= {
        nome: "MACACO",
        categoria: "ANIMAIS"
    },
    palavra037= {
        nome: "URSO",
        categoria: "ANIMAIS"
    },
    palavra038= {
        nome: "TARTARUGA",
        categoria: "ANIMAIS"
    },
    palavra039= {
        nome: "TUBARAO",
        categoria: "ANIMAIS"
    },
    palavra040= {
        nome: "BALEIA",
        categoria: "ANIMAIS"
    },
    palavra041= {
        nome: "CARRO",
        categoria: "TRANSPORTE"
    },
    palavra042= {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra043= {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra044= {
        nome: "ONIBUS",
        categoria: "TRANSPORTE"
    },
    palavra045= {
        nome: "AVIAO",
        categoria: "TRANSPORTE"
    },
    palavra046= {
        nome: "FUTEBOL",
        categoria: "ESPORTES"
    },
    palavra047= {
        nome: "BASQUETE",
        categoria: "ESPORTES"
    },
    palavra048= {
        nome: "VOLEI",
        categoria: "ESPORTES"
    },
    palavra049= {
        nome: "HOCKEY",
        categoria: "ESPORTES"
    },
    palavra050= {
        nome: "TENIS",
        categoria: "ESPORTES"
    },

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
    console.log(indexPalavra)
}   

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined ){
            listaDinamica[i] = "&nbsp;" 
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled=true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();  
    }

}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "rgba(177, 238, 128, 0.76)";
    document.getElementById(tecla).style.color = "#000000";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca()

        if(tentativas == 0)
        {
            abreModal("F...", "Trágico você perdeu! A palavra era " + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }
        
    if(vitoria == true)
        {
            abreModal("PRÓ PRAY EIN!", "Sera que você consegue adivinhar outra?");
            tentativas = 0;
        }
    
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break; 
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
   location.reload(); 
});