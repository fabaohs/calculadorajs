var btn = document.querySelector('.inputs .btn');

var radios = document.getElementsByName('opr');

const divRes = document.querySelector('#res p');

btn.addEventListener('click', operation);

function operation() {

    var tn1 = document.querySelector('.inputs #tn1');
    var tn2 = document.querySelector('.inputs #tn2');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    for (var i = 0; i < radios.length; i++) {
        if (radios[0].checked) {
            fazSoma(n1, n2);
            break;
        }
        if (radios[1].checked) {
            fazSub(n1, n2);
            break;
        }
        if (radios[2].checked) {
            fazMult(n1, n2);
            break;
        }
        if (radios[3].checked) {
            fazDiv(n1, n2);
            break;
        }
    }
}

function fazSoma(n1, n2) {
    let soma = n1 + n2;
    divRes.innerHTML = `Resultado: ${soma}`;
}

function fazSub(n1, n2) {
    let subt = n1 - n2;
    divRes.innerHTML = `Resultado: ${subt}`;
}

function fazMult(n1, n2) {
    let mult = n1 * n2;
    divRes.innerHTML = `Resultado: ${mult}`;
}

function fazDiv(n1, n2) {
    let divisao = n1 / n2;
    divRes.innerHTML = `Resultado: ${divisao}`;
}