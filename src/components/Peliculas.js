import React, { Component } from 'react'
import Movie from './Movie';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Peliculas extends Component {
    state = {
        movies: [
            { title: 'Batman vs Sperman', image: 'https://eloutput.com/app/uploads-eloutput.com/2020/04/Batman.jpg' },
            { title: 'Birds of Prey', image: 'https://cdn-3.expansion.mx/dims4/default/7ae11f9/2147483647/strip/true/crop/958x502+0+0/resize/1800x943!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff8%2Fb3%2F1160e8d942dc9068c1e456f2ce82%2Fbirds-of-prey-margot-robbie.JPG' },
            { title: 'The Joker', image: 'https://img.chilango.com/2019/06/Trama-the-joker.png' },
            { title: 'Flash', image: 'https://info7rm.blob.core.windows.net.optimalcdn.com/images/2020/04/04/flash-focus-0-0-330-200.jpg' }
        ],
        name: 'Americo MQ',
        favorita: {}
    }

    cambiarTitulo = () => {
        var { movies } = this.state;
        movies[0].title = "Batman Begins";

        this.setState({
            movies: movies
        })
    }
    favorite = (pelicula) => {
        console.log('hey')
        console.log(pelicula)
        this.setState({
            favorita: pelicula
        })
    }

    /* componentDidMount(){
        alert("Se cargo el componente")
    } */

    render() {
        return (
            <React.Fragment>
                <Slider 
                    title="Peliculas"
                    size="slider-small"
                />
            <div className="center">
                <div id="content" className="peliculas">
                    <h2 className="subheader">Peliculas</h2>
                    <p>Seleccion de las peliculas fav de {this.state.name}</p>
                    <div>
                        <button onClick={this.cambiarTitulo}>Cambia titulo</button>
                    </div>
                    <p>
                        <strong>La pelicula favorita es: </strong>
                        <span>{this.state.favorita.title}</span>
                    </p>
                    <div id="articles" className="peliculas">
                    {
                        this.state.movies.map((pelicula, i) => {
                            return (
                                <Movie key={i} 
                                pelicula={pelicula}
                                checkFavorite={this.favorite}
                                />
                            )
                        })
                    }
                    </div>
                    
                </div>
                <Sidebar 
                    blog="false"
                />
            </div>
            </React.Fragment>
            
        );
    }
}

export default Peliculas;