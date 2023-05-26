//Luego de presionar el botón de iniciar sesión, el componente Alert debe mostrar un mensaje indicando al usuario si la sesión se inició correctamente o si los datos
//ingresados no son correctos. (3 Puntos) ○ Utiliza los props para mostrar un mensaje de error o de éxito.
//○ Opcionalmente puedes utilizar otro props para cambiar el color de la alerta (success o danger) según corresponda.
//○ Como recordatorio, debes tener un state en el componente App que
//almacene el mensaje de error o de éxito. y pasar mediante props al componente Alert y Login.

import React from "react";

const Alert = ({ message, type }) => {
  
    return (
        <>
            <div className={`alert alert-${type}`} role="alert">
                {message}
            </div>
        </>
    )
}
export default Alert;
