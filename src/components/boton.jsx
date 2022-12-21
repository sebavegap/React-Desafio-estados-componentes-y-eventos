
import React from "react";


function Boton(props) {
    if (props.nombre === '' || props.contraseña === '') {
        return (
            <button type="submit" className="btn btn-primary" disabled>Submit</button>
        )
    }
  return (
    <button type="submit" className="btn btn-primary">Submit</button>
  )
}

export default Boton;