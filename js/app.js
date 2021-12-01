var bntadd = document.getElementById("btnAdd");
bntadd.addEventListener("click",() =>{
    var nombre = document.getElementById("producto").value;
    var edad = document.getElementById("iva").value;
    let datos = {producto:producto , iva:iva }
    console.log(datos);
    fetch ("http://localhost:1341/api/personas",{
        method:'POST',
        body:JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    } ) 
    .then(response => response.json())
    .then(data => {
        let detalles = document.getElementById("detalles");
        detalles.innerHTML=`<p>se inserto ${producto} con id ${data.insertId}</p>`;
        document.getElementById("producto").value = ""
        document.getElementById("iva").value = "";
        console.log(data)
    });
})

var btnSumar = document.getElementById("btnSumar");
btnSumar.addEventListener("click", () =>{
    fetch ("http://localhost:1341/api/total") 
    .then(response => response.json())
    .then(data => {
       
        
    
    });
} )