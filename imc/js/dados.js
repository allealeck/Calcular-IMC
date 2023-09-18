const pespes = document.querySelector('#peso');
const altpes = document.querySelector('#altura');
const Calcular = document.querySelector('#calc');
const Resultado = document.querySelector('#resul');
 
Calcular.addEventListener('click', ()=>{
    let peso = pespes.value;
    let altura = altpes.value;

        
        let resul = peso/(altura * altura);

        let imc;
        if(resul < 18.5){
            imc = "com Extrema Magreza!";
        }else if(resul >= 18.5 && resul <= 24.99){
            imc = "Normal!";
        }else if(resul >=25 && resul <= 29.99){
            imc = "com Sobrepeso!";
        }else if(resul >=30 && resul <= 34){
            imc = "com Sobrepeso nivel 2!";
        }else {
            imc = "com Obesidade!";  
        }


        Resultado.textContent = "Seu IMC é " + resul.toFixed(2) + ", você esta " + imc;  
})