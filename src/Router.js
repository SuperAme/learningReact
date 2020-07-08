import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Header />
            
            
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route path="/blog" component={Blog}/>
                    <Route exact path='/formulario' component={Formulario}/>
                    <Route exact path='/peliculas' component={Peliculas}/>
                    <Route path="/second-route" component={MiComponente}/>
                    
                    <Route exact path="/page-1" render={() => (
                        <React.Fragment>
                            <div id="content">
                                <h1>Hola Mundo desde Pag 1</h1>
                            </div>
                            
                        </React.Fragment>
                    )} />
                    <Route exact path='/tests/:id' render={(props) => {
                        var id = props.match.params.id
                        return(
                            <div id="content">
                                <h1>Test Pages</h1>
                                <h2>{id}</h2>
                            </div>
                        )
                    }}/>
                    <Route component={Error}/>
                </Switch>
                    <div className="clearfix"></div>
                
                <Footer/>
            </BrowserRouter>
        )
    }
}
export default Router;