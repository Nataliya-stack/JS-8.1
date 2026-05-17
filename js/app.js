let objetivoNumero = Math.floor(Math.random() * 500) + 1;

function concursar() {
    const inputField = document.getElementById('inputNumer');
    const responseText = document.getElementById('responda');
    const btn1 = document.getElementById('btn');
    const btn2 = document.getElementById('btnNuevo');
    
    const userValue = parseInt(inputField.value);

    if (isNaN(userValue) || userValue < 0 || userValue > 500) {
        responseText.innerText = "Ingresar el numero de 0 a 500!";
        responseText.style.color = "red";
        return;
    }

    const diff = Math.abs(objetivoNumero - userValue);
  
    document.body.style.backgroundImage = "none";

    if (userValue === objetivoNumero) {
        responseText.innerText = "¡Enhorabuena! ¡Lo has hecho bien  !";
        document.body.style.backgroundColor = "green";
        btn1.style.display = "none";
        btn2.style.display = "inline-block";
        applyTextColor("white");  // pokrasit 
    } 

    else if (diff >= 50) {
        responseText.innerText = userValue > objetivoNumero ? "Hace frio: tu numero es mas ALTO" : "hace frio: tu numero es mas BAJO";
        document.body.style.backgroundColor = "blue";
        applyTextColor("white"); // pokrasit 
    } 
  
    else if (diff >= 15 && diff < 50) {
        responseText.innerText = userValue > objetivoNumero ? "Tibio: tu numero es ALTO" : "Tibio: tu numero es BAJO";
        document.body.style.backgroundColor = "yellow";
        applyTextColor("black"); // pokrasit 
    } 
  
    else {
        responseText.innerText = userValue > objetivoNumero ? "Caliente: tu numero es ALTO" : "Caliente: tu numero es mas BAJO";
        document.body.style.backgroundColor = "red";
        applyTextColor("white"); // pokrasit 
    }

 
    inputField.value = "";
    inputField.focus();
}

function applyTextColor(color) {  
    document.getElementById('inputNumer').style.color = "black";
}

function juegoNuevo() {   
    objetivoNumero = Math.floor(Math.random() * 500) + 1;
  
    const responseText = document.getElementById('responda');
    responseText.innerText = "¡Pense en un nuevo numero!";
    responseText.style.color = "#27ae60";
    
    document.getElementById('btn').style.display = "inline-block";
    document.getElementById('btnNuevo').style.display = "none";
    document.getElementById('inputNumer').value = "";
    
    document.body.style.backgroundImage = 'url("./img/bg5.jpg")';
    document.body.style.backgroundColor = "";
    document.body.style.color = "black";
}

