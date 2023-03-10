import React, {useState} from "react";
import PizzaCard from "../components/pizzaCard";


const PizzaMenu = () => {

    const pizzas =[
    {nombreEntera: 'Socrates entera', nombreMedia:'Media Socrates' ,img:'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',nombre: 'socrates' , ingredientes:'Muzza, oregano y aceitunas' , precioEntera: 1900, precioMitad:200 },
	{nombreEntera: 'Juana Manso entera', nombreMedia:'Media Juana Manso' ,img:'https://images.pexels.com/photos/263085/pexels-photo-263085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',nombre:'Juana manso' , ingredientes:'muzza, ceboola, queso roq y nueves' , precioEntera: 2500, precioMitad:200 },
	{nombreEntera: 'Frida entera', nombreMedia:'Media Frida' ,img:'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',nombre:'Frida khalo' , ingredientes:'muzza, jamon cocido y palmitos' , precioEntera: 2000, precioMitad:200 },
	{nombreEntera: 'Marco entera', nombreMedia:'Media Marco' ,img:'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',nombre:'Marco aurelio' , ingredientes:'muzza, jamon crudo y rucula' , precioEntera: 2700, precioMitad:200},
	{nombreEntera: 'Andresito entera', nombreMedia:'Media Andresito' ,img:'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',nombre:'Andresito' , ingredientes:'muzza, cebolla y aceite de oliva' , precioEntera: 2200, precioMitad:200 },,
	{nombreEntera: 'Napoleon entera', nombreMedia:'Media Napoleon' ,img:'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',nombre:'Napoleon', ingredientes:'muzza, tomate, ajo y aceite de oliva', precioEntera: 1500, precioMitad: 1000}
    ] 
    
    const [cart, setcart] = useState([])
    const [cuenta, setcuenta] = useState([])
          
    function allFunctions(nombre, precio) {
        setcart(cart.concat(nombre));
        setcuenta(cuenta.concat(precio))
    }    
    
    function suma(){
       let suma = 0;
       cuenta.forEach (function(numero){
           suma += numero;
       });
       
       return suma;
    }

    //Cuando se selecciona el input de envio ejecuta esta funcion
    function checkEnvio (){
        var varEnvio =document.getElementById('inputEnvio');
        const prueba = document.getElementById('formAdress')
        //Recupero el input y lo guardo en una variable
        if (varEnvio.value=='envio') {
            // prueba.style.display="block";  
            prueba.className = 'formAdress'   
        } 
    }
    //Cuando se selecciona el input de retiro ejecuta esta funcion
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

            <div className="container text-center">       
            <div className="row">
            { 
                pizzas.map(function(pizza){
                    return <div className="card col-3"> 
                            <PizzaCard img={pizza.img} title={pizza.nombre} ingredientes={pizza.ingredientes} precioEntera={pizza.precioEntera} precioMitad={pizza.precioMitad}/>  
                            
                            <div className="d-flex justify-content-around">
                                <button onClick={() => allFunctions(pizza.nombreEntera, pizza.precioEntera)} className="btn btn-primary">ggggg: ${pizza.precioEntera}</button>
                                <button onClick={() => allFunctions(pizza.nombreMedia, pizza.precioMitad)} className="btn btn-primary">dasdsaa: ${pizza.precioMitad}</button>
                                
                            </div>
                                        
                           </div>   
                })         
            }   
            {/* encodeURIComponent se encarga de pasar el string apto para la API, convierte todos los espacios en % y demas en el enlace */}         
            <button><h1>Cantidad de productos {cart.length}</h1></button>
            <button><h1>Lista del pedido: {cart.map(function(e){
                return <p>{e} <br /></p> 
            })}  </h1></button>
            <button><h1>Precio total {suma()} +envio </h1></button>
            
            <a href={`https://wa.me/3704556925?text=${encodeURIComponent(cart +'\n Precio Total: $'+suma()+' (+env??o)')}`}>
            <button>completar pedido</button>
            </a>            
            </div>
            </div>
            {/* FORM CONTROL */}
            <div class="form-check">
            <input class="form-check-input" onClick={()=> checkRetiro()} type="radio" name="flexRadioDefault" id="inputRetiro" value="retiro"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Retiro en el local
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" onClick={()=> checkEnvio()} type="radio" name="flexRadioDefault" id="inputEnvio" value="envio"/>
            <label class="form-check-label"  for="flexRadioDefault2">
                Envio a domicilio
            </label>
            </div>  

            {/* FORM ADRESS */}
            <form id="formAdress" className="formAdressNone" >
             <div class="mb-3">
                 <label for="exampleInputEmail1" class="form-label">Direccion completa</label>
                 <input type="email" class="form-control" id="inputAdress" aria-describedby="emailHelp"/>
             </div>           
            </form>
        </>
    )

    
}
export default PizzaMenu;