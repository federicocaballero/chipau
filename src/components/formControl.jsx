import React from "react";
import FormAdress from "./formAdress";

const FormControl = () => {
   
    

    //Cuando se selecciona el input de envio ejecuta esta funcion
    function checkEnvio (){
        var varEnvio =document.getElementById('inputEnvio');
        const prueba = document.getElementById('formAdress')
        console.log(varEnvio)
        //Recupero el input y lo guardo en una variable
        if (varEnvio.value=='envio') {
            console.log(prueba)
            // prueba.style.display="block";  
            prueba.className = 'formAdress'   
        } 
    }

    function checkRetiro(){
        var varEnvio =document.getElementById('inputEnvio');
        const prueba = document.getElementById('formAdress')
        //Recupero el input y lo guardo en una variable
        if (varEnvio.value=='envio') {
            console.log(prueba)
            prueba.className = 'formAdressNone'
        }
    }
    return(    
        <>
            <div class="form-check">
            <input class="form-check-input" onClick={()=> checkRetiro()} type="radio" name="flexRadioDefault" id="inputRetiro" value="retiro"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Retiro en el local
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" onClick={()=> checkEnvio()} type="radio" name="flexRadioDefault" id="inputEnvio" value="envio"/>
            <label class="form-check-label" for="flexRadioDefault2">
                Envio a domicilio
            </label>
            </div>
            
            <div id="formAdress" className="formAdressNone">
                <FormAdress/>
            </div>
              
        </>
    )

   
        }
export default FormControl;