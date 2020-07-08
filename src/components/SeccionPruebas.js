import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {
    contador = 0;

    constructor(props){
        super(props);
        this.state = {
            contador : 0
        }
    }
    HelloWorld(nombre,edad) {
        var nombre = "AMQ";
        var presentacion = <h2>Hola, yo soy {nombre}</h2>
        return presentacion;
    }
    sumar(){
        this.setState({
            contador: (this.state.contador + 1)
        })
    }
    restar(){
        this.setState({
            contador: (this.state.contador - 1)
        })
    }
   
    render() {
        return (
            <section id="content">
                <h2 className="subheader">Ultimos Artículos</h2>
                <p>
                    Hola Américo
                </p>
                <h2 className="subheader">Funciones y JSX Básico</h2>
                {
                    this.HelloWorld
                }
                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    {/* <Peliculas /> */}
                </section>
                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>
                    <input type="button" value="Restar" onClick={this.restar.bind(this)}/>
                </p>
            </section>
        )
    }
}

export default SeccionPruebas;