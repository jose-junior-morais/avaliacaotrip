
function copiar1(){


    var copi1 = document.getElementById("cText1").value;
   
    
    if (navigator.clipboard.writeText(copi1)){
       document.getElementById("botao1").textContent = "Copiado";
       document.getElementById("botao1").style.backgroundColor = '#7CFC00';
  
    }

    setInterval(function (){
        document.getElementById("botao1").textContent = "Copiar";
        document.getElementById("botao1").style.backgroundColor = '';
    },3000
    );
}

function copiar2(){
   var copi2 = document.getElementById("cText2").value;

   if (navigator.clipboard.writeText(copi2)){
      document.getElementById("botao2").textContent = "Copiado";
      document.getElementById("botao2").style.backgroundColor = '#7CFC00';
 
   }
   setInterval(function (){
      document.getElementById("botao2").textContent = "Copiar";
      document.getElementById("botao2").style.backgroundColor = '';
  },3000
  );
}

function copiar3(){
   var copi3 = document.getElementById("cText3").value;

   if (navigator.clipboard.writeText(copi3)){
      document.getElementById("botao3").textContent = "Copiado";
      document.getElementById("botao3").style.backgroundColor = '#7CFC00';
 
   }
   setInterval(function (){
      document.getElementById("botao3").textContent = "Copiar";
      document.getElementById("botao3").style.backgroundColor = '';
  },3000
  );
}

function copiar4(){
   var copi4 = document.getElementById("cText4").value;

   if (navigator.clipboard.writeText(copi4)){
      document.getElementById("botao4").textContent = "Copiado";
      document.getElementById("botao4").style.backgroundColor = '#7CFC00';
 
   }
   setInterval(function (){
      document.getElementById("botao4").textContent = "Copiar";
      document.getElementById("botao4").style.backgroundColor = '';
  },3000
  );
}

function copiar5(){
   var copi5 = document.getElementById("cText5").value;

   if (navigator.clipboard.writeText(copi5)){
      document.getElementById("botao5").textContent = "Copiado";
      document.getElementById("botao5").style.backgroundColor = '#7CFC00';
 
   }
   setInterval(function (){
      document.getElementById("botao5").textContent = "Copiar";
      document.getElementById("botao5").style.backgroundColor = '';
  },3000
  );
}

function copiar6(){
   var copi6 = document.getElementById("cText6").value;

   if (navigator.clipboard.writeText(copi6)){
      document.getElementById("botao6").textContent = "Copiado";
      document.getElementById("botao6").style.backgroundColor = '#7CFC00';
 
   }
   setInterval(function (){
      document.getElementById("botao6").textContent = "Copiar";
      document.getElementById("botao6").style.backgroundColor = '';
  },3000
  );
}