import React from 'react';
import MovieLib from './../lib/MovieLib.js'

class Movie extends React.Component{

	render(){
		return(
			<main className="main-content">
                <div className="container">
                    <MovieLib mid={this.props.mid} />
                </div>
            </main>
		)
	}

}

export default Movie