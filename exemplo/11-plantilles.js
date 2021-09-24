


/////////////////////////////////////////////
/// Plantilles //////////////////////////////
/////////////////////////////////////////////

var nom=prompt("El teu nom?");
var cognom=prompt("El teu cognom?");

document.write(nom+"-"+cognom);

var plantilla = `
    <h1> Una Plantilla </h1>
    <h3> El nom : ${nom}</h3>
    <h3> El cognom : ${cognom}</h3>
    
`;

document.write(plantilla);


