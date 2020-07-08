import React, {Component} from 'react';

class Movie extends Component{
    check = () => {
        this.props.checkFavorite(this.props.pelicula);
    }
    render(){
        const pelicula = this.props.pelicula
        const {title,image} = this.props.pelicula
        return(
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={title} />
                </div>

                <h2>{title}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>
                <button onClick={this.check}>
                    Marcar como favorito
                </button>
                <div className="clearfix"></div>
            </article>
        )
    }
}

export default Movie;