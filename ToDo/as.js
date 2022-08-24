function submit(){
let d = document.getElementById("div");

let i = document.getElementById("text");
let v = i.value;

let o = document.createElement("p");
let ne = document.createElement("input");
ne.type= "checkbox"
ne.id=v; 

let la = document.createElement("label");
la.for = v

la.appendChild(document.createTextNode(v));
d.appendChild(o);
o.appendChild(ne);
o.appendChild(la);
}