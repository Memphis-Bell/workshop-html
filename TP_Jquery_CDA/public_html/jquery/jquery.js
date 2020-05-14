var compteur = 0;

$(document).ready(function () {

    //Au chargement j'affiche la valeur de compteur dans le span ayant l'id "compteur"
    $(document).ready(function () {
        $("#compteur").text(compteur);
    });

    //Au click sur l'élément ayant pour id "incremente"
    $("#incremente").click(function () {
        //J'incrémente compteur
        compteur += 1;
        //J'affiche compteur dans le span ayant l'id "compteur"
        $("#compteur").text(compteur);
        //Si la valeur de compteur est supérieure ou égale à 21
        if (compteur >= 21) {
            //petite alert box
            alert("21 : BlackJack !");
            //Je réinitialise compteur
            compteur = 0;
            //j'affiche la valeur de compteur dans le span ayant l'id "compteur"
            $("#compteur").text(compteur);
        }
    });

    //Fonction pour afficher les tables de multiplication
    //Conditions sur l'affichage des valeurs, car il y a des multiplications par 0 sinon
    $("#multiplication").click(function () {
        //Création d'une balise table
        var table = $("<table></table>");
        //Attribution de style pour les bordures de la table
        table.css("border-collapse", "collapse");
        //Pour afficher les intitulés de colonnes et lignes, il faut boucler 11 fois
        for (i = 0; i < 11; i++) {
            //Création d'une balise tr
            var row = $("<tr></tr>");
            for (j = 0; j < 11; j++) {
                //Création d'une balise td
                var cell = $("<td></td>");
                //Atribution du style pour les cellules de la table
                //bordures, hauteur, largeur
                cell.css("border", "1px solid black");
                cell.css("height", "25px");
                cell.css("width", "25px");
                if (i > 0 && j > 0) {
                    //On effectue la multiplication si on n'est ni dans la première ligne,
                    //ni dans la première colonne
                    cell.text(i * j);
                } else if (i === 0) {
                    //sinon, si c'est la première case du tableau on la couvre de noir
                    if (j === 0) {
                        cell.css("background-color", "black");
                    } else {
                        //Le reste de la première ligne se couvre de rouge
                        cell.css("background-color", "red");
                    }
                    //i = 0, donc on affiche le contenu de la variable j pour les intitulés de colonnes
                    cell.text(j);
                } else if (j === 0) {
                    //Le reste de la première colonne se couvre de rouge
                    cell.css("background-color", "red");
                    //j = 0, donc on affiche le contenu de la variable i pour les intitulés de ligne
                    cell.text(i);
                }
                //On ajoute la cellule à la ligne
                row.append(cell);
            }
            //On ajoute la ligne à la table
            table.append(row);
        }
        //On ajoute la table dans la div ayant pour id "table"
        $("#table").append(table);
    });

    //Fonction d'ajout d'un formulaire dans la page html
    $("#ajoutForm").click(function () {
        var form = $("<form></form>");
        var br = $("<br>");
        form.attr("id", "monForm");
        var fieldset = $("<fieldset></fieldset>");
        var legend = $("<legend></legend").text("Mon super formulaire en JQuery");
        var labelTBox = $("<label></label>").text("Textbox");
        labelTBox.attr("for", "texbox");
        var inputTBox = $("<input>");
        inputTBox.css("width", "100%");
        inputTBox.attr("name", "textbox");
        inputTBox.attr("id", "textbox");
        inputTBox.attr("type", "text");
        inputTBox.css("text-transform", "uppercase");
        var labelTBloc = $("<label></label>").text("Textbloc");
        labelTBloc.attr("for", "textblock");
        var textarea = $("<textarea></textarea>");
        textarea.attr("rows", "6");
        textarea.attr("maxlength", "1000");
        textarea.attr("name", "textblock");
        textarea.attr("id", "textblock");
        textarea.css("width", "100%");
        var checkbox = $("<input>");
        checkbox.attr("type", "checkbox");
        checkbox.attr("id", "green");
        checkbox.attr("name", "green");
        var labelCB = $("<label></label>").text("Je veux mon paragraphe en vert");
        var submit = $("<input>").text("Envoyer");
        submit.attr("type", "submit");
        submit.attr("id", "submit");
        submit.attr("name", "submit");
        fieldset.append(legend, br, labelTBox, br, inputTBox, br, labelTBloc, br, textarea, br, checkbox, labelCB, br);
        form.append(fieldset, submit);
        $("#form").append(form);
        submit.click(function (event) {
            event.preventDefault();
            var titre = $("<h1></h1>").text(inputTBox.val());
            var text = $("<p></p>").text(textarea.val());
            if (checkbox[0].checked === true) {
                text.css("background-color", "green");
            }
            var button = $("<button></button>").text("Supprimer paragraphe");
            button.attr("type", "button");
            $("#result").append(titre, text, button);
            button.click(function () {
                $("#result").children().remove();
            });
        });
    });

    $("#devine").click(function () {
        var name = prompt("Entrez un prénom");
        var URL = "https://api.agify.io?name=" + name;
        $("#agify").load(URL, name, "responseTxt");
    });

    $("#1").click(function () {
        if ($("#1")[0].checked === true) {
            $("#exo1").css("visibility", "visible");
        } else {
            $("#exo1").css("visibility", "hidden");
        }
    });
    $("#2").click(function () {
        if ($("#2")[0].checked === true) {
            $("#exo2").css("visibility", "visible");
        } else {
            $("#exo2").css("visibility", "hidden");
        }
    });
    $("#3").click(function () {
        if ($("#3")[0].checked === true) {
            $("#exo3").css("visibility", "visible");
        } else {
            $("#exo3").css("visibility", "hidden");
        }
    });
    $("#4").click(function () {
        if ($("#4")[0].checked === true) {
            $("#exo4").css("visibility", "visible");
        } else {
            $("#exo4").css("visibility", "hidden");
        }
    });
    $("#5").click(function () {
        if ($("#5")[0].checked === true) {
            $("#exoTodo").css("visibility", "visible");
        } else {
            $("#exoTodo").css("visibility", "hidden");
        }
    });

    $("#ajoutTD").click(function () {
        var br = $("<br>");
        var titre = $("<h1></h1>").text(prompt("Donnez un titre à votre ToDo List"));
        var tableTD = $("<table></table").attr("id", "tableTD");
        tableTD.css("border-collapse", "collapse");
        var thTD = $("<th></th>").attr("colspan", "2");
        thTD.html($("<label></label>").text("ToDo List"));
        var tableDone = $("<table></table>").attr("id", "tableDone");
        tableDone.css("border-collapse", "collapse");
        var thD = $("<th></th>").attr("colspan", "2");
        thD.html($("<label></label>").text("Done List"));
        tableTD.append(thTD);
        tableDone.append(thD);
        var addElem = $("<button></button>").text("Ajouter un élément");
        addElem.attr("id", "addElem");
        addElem.attr("type", "button");
        var supprElem = $("<button></button>").text("Supprimer un élément");
        supprElem.attr("id", "supprElem");
        supprElem.attr("type", "button");
        $("#mesTD").append(titre, br, addElem, supprElem, br, tableTD, br, tableDone);
        addElem.click(function () {
            var checkbox = $("<input>");
            checkbox.attr("type", "checkbox");
            checkbox[0].checked = false;
            var elem = $("<label></label>").text(prompt("Entrez un élément à ajouter a votre ToDo List"));
            var tr = $("<tr></tr>");
            var tdC = $("<td></td>").html(checkbox);
            var tdE = $("<td></td>").html(elem);
            tdC.css("border", "1px solid black");
            tdE.css("border", "1px solid black");
            tr.append(tdC, tdE);
            tableTD.append(tr);
            checkbox.click(function () {
                if (checkbox[0].checked === true) {
                    tableDone.append(tr);
                    tableTD.remove(tr);
                } else {
                    tableTD.append(tr);
                    tableDone.remove(tr);
                }
            });
        });
        supprElem.click(function () {
            tableTD.children().last().remove();
        });
    });
    
    $("#supprTD").click(function(){
        for(i=0; i<6; i++){
            $("#mesTD").children().last().remove();
        }
    });
});


