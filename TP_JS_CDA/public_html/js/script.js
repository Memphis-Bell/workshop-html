var score = 0;
function printHWonload() {
    console.log("Hello world !");
    document.getElementById("compteur").innerHTML = score;
}

function incrementer() {
    score+=1;
    document.getElementById("compteur").innerHTML = score;
    if (score >= 21) {
        alert("21 : BlackJack !");
        score = 0;
        document.getElementById("compteur").innerHTML = score;
    }
}

function createMultTable() {
    var table = document.createElement('TABLE');
    table.setAttribute("id", "tableMultiplication");
    table.style.border = '1px solid black';
    document.getElementById("table").appendChild(table);
    for(var i = 0; i < 11; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < 11; j++) {
            var cell = row.insertCell(j);
            if(i > 0 && j > 0) {
                cell.innerHTML = j * i;
            } else if (i === 0) {
                cell.innerHTML = j;
                if (j === 0) {
                    cell.style = "background-color: black";
                } else {
                    cell.style = "background-color: red";
                }
                
            } else if (j === 0) {
                cell.innerHTML = i;
                cell.style = "background-color: red";
            }
        }
    }
}

function doTheForm() {
    var p = document.createElement('p');
    var form = document.getElementById("monForm");
    var titre = document.createElement('h1');
    var supprButton = document.createElement('button');
    supprButton.innerText = "SupprPara";
    supprButton.addEventListener('click', supprPara);
    document.getElementById("result").appendChild(supprButton);
    titre.innerText = form[1].value;
    titre.setAttribute("style", "text-transform: uppercase");
    p.innerText = form[2].value;
    if (form[3].checked === true) {
        p.setAttribute("style", "background-color : #22BB22");
    }
    document.getElementById("result").appendChild(titre);
    document.getElementById("result").appendChild(p);
}

function supprPara() {
    do {
        var p = document.getElementById("result").lastElementChild;
        p.remove();
    } while (document.getElementById("result").lastElementChild.localName !== "p");
}

