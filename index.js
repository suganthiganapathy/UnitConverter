// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound


// getting dom elements

const btnElement= document.getElementById("btn");
let innElement=document.getElementById("value");
const lengthElement=document.getElementById("converLength");
const volumeElement=document.getElementById("convertVolume");
const massElement=document.getElementById("convertMass");


// adding eventListner to the button


btnElement.addEventListener("click", function(){


        empty();
    let basicValue= innElement.value;
     

    let convertedlengthValue= basicValue * 3.281;
    convertedlengthValue=convertedlengthValue.toFixed(3);

    let convertedVolumeValue= basicValue *0.264;
    convertedVolumeValue=convertedVolumeValue.toFixed(3);
    
    let convertedMassValue =(basicValue * 2.204);
    convertedMassValue=convertedMassValue.toFixed(3);

    lengthElement.textContent += `${basicValue} meter = ${convertedlengthValue} `;

volumeElement.textContent += `${basicValue} volume = ${convertedVolumeValue} `;

massElement.textContent += `${basicValue} kilogram = ${convertedMassValue} `;
// emptyContent()

})


function empty(){
// innElement.value="";
lengthElement.textContent="";
volumeElement.textContent="";
massElement.textContent="";


}

function emptyContent(){
    
}
