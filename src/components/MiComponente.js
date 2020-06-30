import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let receta = {
            nombre: 'pizza',
            ingrediente: ['tomate','piña','queso','jamon'],
            calorias: 555
        }
        return(
            <React.Fragment>
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h3>{'Calorias: ' + receta.calorias}</h3>
                <ol>
                {
                    receta.ingrediente.map((ingrediente,i) =>{
                        console.log(ingrediente)
                        return(
                            <li key={i}> 
                                {ingrediente}
                            </li>
                        )
                    })
                }
                </ol>
                
            </React.Fragment>
            
        )
    }
}

export default MiComponente;