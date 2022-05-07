setTimeout(function(){ alert("Sesiunea a expirat"); }, 600000); //timeout dupa 10 minute
var myVar = setInterval(myTimer, 1000); //pt ceas

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if(name === 'Enter')
        return validare(); 
    else if(name === 'Escape')
        location.replace("contact.html"); 
},false);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("clock").innerHTML = t;
}

function on_load() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var buton1 = document.getElementById("buton1");
    var color = "#" + randomColor;
    buton1.style.backgroundColor = color;

    document.getElementById("nume").value = localStorage.getItem("nume");
    document.getElementById("prenume").value = localStorage.getItem("prenume");
}

function validare() {
    var nume = document.getElementById("nume");
    var prenume = document.getElementById("prenume");
    var email = document.getElementById("email");
    var telefon = document.getElementById("telefon");
    submitOK = "true";
    mesaj = []

  
    if (nume.value.length == 0) {
        // alert("Nu ati completat numele");
        nume.setAttribute("placeholder", "CAMP GOL");
        nume.setAttribute("style", "border: 1px red solid;");
        var error = document.getElementById("enume");
        error.setAttribute("style", "display: block;");
        submitOK = "false";
    }
    else {
        mesaj.push(nume.value);
        nume.setAttribute("style", "border: 1px green solid;");
        var error = document.getElementById("enume");
        error.setAttribute("style", "display: none;");
    } 
    if (prenume.value.length == 0) {
        // alert("Nu ati completat prenumele");
        prenume.setAttribute("placeholder", "CAMP GOL");
        prenume.setAttribute("style", "border: 1px red solid;");
        var error = document.getElementById("eprenume");
        error.setAttribute("style", "display: block;");
        submitOK = "false";
    }
    else {
        mesaj.push(prenume.value);
        prenume.setAttribute("style", "border: 1px green solid;");
        var error = document.getElementById("eprenume");
        error.setAttribute("style", "display: none;");
    }  
    if (email.value.length == 0) {
        // alert("Nu ati completat email-ul");
        email.setAttribute("placeholder", "CAMP GOL");
        email.setAttribute("style", "border: 1px red solid;");
        var error = document.getElementById("eemail");
        error.setAttribute("style", "display: block;");
        submitOK = "false";
    }
    else {
        var at = email.value.indexOf("@");
        if (at == -1) {
            email.setAttribute("style", "border: 1px red solid;");
            var error = document.getElementById("eemail");
            error.setAttribute("style", "display: block;");
            submitOK = "false";
        }
        else {
            email.setAttribute("style", "border: 1px green solid;");
            var error = document.getElementById("eemail");
            error.setAttribute("style", "display: none;");
        } 
    }
    if (telefon.value.length == 0) {
        // alert("Nu ati completat numarul de telefon");
        telefon.setAttribute("placeholder", "CAMP GOL");
        telefon.setAttribute("style", "border: 1px red solid;");
        var error = document.getElementById("etel");
        error.setAttribute("style", "display: block;");
        submitOK = "false";
    }
    else {
        var verif = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        if (telefon.value.match(verif) == null) {
            telefon.setAttribute("style", "border: 1px red solid;");
            var error = document.getElementById("etel");
            error.setAttribute("style", "display: block;");
            submitOK = "false";
        }
        else {
        telefon.setAttribute("style", "border: 1px green solid;");
        var error = document.getElementById("etel");
        error.setAttribute("style", "display: none;");
        } 
    }
  
  
    if (submitOK == "false") {
      return false;
    }
    else {
        var nume_prenume = mesaj.join(" ");
        var text = "Rezervare facuta pentru ";
        var afis = text.concat(nume_prenume);

        localStorage.setItem("nume", nume.value);
        localStorage.setItem("prenume", prenume.value);

        alert(afis);
    }
}

function more() {
    var child = document.getElementById("hide");
    var elem = document.getElementById("buton1");
    var cssprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    var parent = document.getElementById("formular");
    parent.removeChild(child);

    var form = document.getElementById("formular");
    var br = document.createElement("br");

    var label1 = document.createElement("label");
    var node = document.createTextNode("Numar de persoane");
    label1.appendChild(node);
    var label2 = document.createElement("label");
    var node = document.createTextNode("Masa afara");
    label2.appendChild(node);
    var label3 = document.createElement("label");
    var node = document.createTextNode("Masa inauntru");
    label3.appendChild(node);
    var label4 = document.createElement("label");
    var node = document.createTextNode("Fara preferinta");
    label4.appendChild(node);
    var label5 = document.createElement("label");
    var node = document.createTextNode("Data si ora rezervarii");
    label5.appendChild(node);

    var numar = document.createElement("input");
    numar.setAttribute("name", "nrpersoane");
    numar.setAttribute("type", "number");
    numar.setAttribute("min", "1");
    numar.setAttribute("max", "10");
    numar.setAttribute("value", "1");

    var afara = document.createElement("input");
    afara.setAttribute("name", "alege");
    afara.setAttribute("type", "radio");
    afara.setAttribute("value", "afara");

    var inauntru = document.createElement("input");
    inauntru.setAttribute("name", "alege");
    inauntru.setAttribute("type", "radio");
    inauntru.setAttribute("value", "inauntru");

    var nopref = document.createElement("input");
    nopref.setAttribute("name", "alege");
    nopref.setAttribute("type", "radio");
    nopref.setAttribute("value", "nopref");
    nopref.setAttribute("checked", "true");
    
    var cand = document.createElement("input");
    cand.setAttribute("name", "cand");
    cand.setAttribute("type", "datetime-local");
    
    var s = document.createElement("input");
    s.setAttribute("id", "buton_submit");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.setAttribute("style", "margin-bottom: 100px");
    s.style.backgroundColor = cssprop;
   

    form.appendChild(label1);
    form.appendChild(br.cloneNode());
    form.appendChild(numar);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    form.appendChild(afara);
    form.appendChild(label2);
    form.appendChild(br.cloneNode());
    form.appendChild(inauntru);
    form.appendChild(label3);
    form.appendChild(br.cloneNode());
    form.appendChild(nopref);
    form.appendChild(label4);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    form.appendChild(label5);
    form.appendChild(br.cloneNode());
    form.appendChild(cand);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    form.appendChild(s);
}