import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render(){
        var btnString = "Ir al blog";
        return(
            <div id="home">
                <Slider 
                    title="Bienvenido al Curso de React"
                    btn={btnString}
                    size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos artículos</h1>
                    </div>

                <Sidebar />
                </div>
            </div>
            
        )
    }
}

export default Home;