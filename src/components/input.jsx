import React from 'react';
import { useState } from 'react';

const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');

//estado para los errores
    const [error, setError] = useState(false);

   //funcion antes de enviar el formulario
   const validarDatos = (e) => {
    e.preventDefault();

    //Validación
    if(contraseña === '25252'){
        setError(true);
        return;
    }
//Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    setError(false);
   

   }

 
    

    return (
        <form onChange={validarDatos}>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input type="text" className="form-control" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} value={contraseña}/>
            </div>
            {error? <button type="submit" className="btn btn-primary">Ingresar</button> : null}
            
        </form>
                )
}

export default Formulario;