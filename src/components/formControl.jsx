import React from "react";

const FormControl = () => {
   
    function lpm (){
        var checks = document.getElementById('checkbox1')
        console.log(checks.checked)
        if (checks.checked == true) {
            alert('esta activo')
        }else{alert('no estaactivo')}
    
    }
    return(
        
        <>
            <div class="form-check">
                <h2>Si es para envio marcar la opcion de abajo e ingresar direccion</h2>
            <input class="form-check-input" type="checkbox"  name="check" id="checkbox1"/>

            <label class="form-check-label" onClick={()=> lpm()} for="checkbox1">
                Envio
            </label>
            </div>

            
        </>
    )

   
        }
export default FormControl;