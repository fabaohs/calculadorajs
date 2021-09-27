var btn = document.querySelector('.inputs .btn');

var radios = document.getElementsByName('opr');

btn.addEventListener('click', operation);

function operation () {

    for(var i = 0; i < radios.length; i++){
        if (radios[0].checked){
            fazSoma();
            break;
        }
        if (radios[1].checked){
            fazSub();
            break;
        }
        if (radios[2].checked){
            fazMult();
            break;
        }
        if (radios[3].checked){
            fazDiv();
            break;
        }
    }
}

function fazSoma () {   
    var tn1 = document.querySelector('.inputs #tn1');
    var tn2 = document.querySelector('.inputs #tn2');
    var divRes = document.querySelector('#res p')
    
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    
    let soma = n1 + n2;
    divRes.innerHTML = `Resultado: ${soma}`;
}

function fazSub() {
    var tn1 = document.querySelector('.inputs #tn1');
    var tn2 = document.querySelector('.inputs #tn2');
    
    var divRes = document.querySelector('#res p')
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    
    let subt = n1 - n2;
    divRes.innerHTML = `Resultado: ${subt}`;
}

function fazMult () {
    var tn1 = document.querySelector('.inputs #tn1');
    var tn2 = document.querySelector('.inputs #tn2');
    var divRes = document.querySelector('#res p');
    
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    
    let mult = n1 * n2;
    divRes.innerHTML = `Resultado: ${mult}`;
}

function fazDiv () {
    var tn1 = document.querySelector('.inputs #tn1');
    var tn2 = document.querySelector('.inputs #tn2');
    var divRes = document.querySelector('#res p');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    let divisao = n1 / n2;
    divRes.innerHTML = `Resultado: ${divisao}`;
}