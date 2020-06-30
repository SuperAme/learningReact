import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {
    HelloWorld(nombre,edad) {
        var nombre = "AMQ";
        var presentacion = <h2>Hola, yo soy {nombre}</h2>
        return presentacion;
    }
   
    render() {
        return (
            <section id="content">
                <h2 className="subheader">Ultimos Artículos</h2>
                <p>
                    Hola Américo
                </p>
                {
                    this.HelloWorld
                }
                <section className="componentes">
                    <MiComponente />
                    <Peliculas />
                </section>
            </section>
        )
    }
}

export default SeccionPruebas;