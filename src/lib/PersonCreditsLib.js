
import React from 'react';
import {Link} from 'react-router-dom'
import Common from './../lib/Common.js';
import creditsMovieList from './../customeCss/creditsMovieList.css'

class MovieCard extends React.Component{
	render(){
		var common = <Common />
		let mit = this.props.mit
		let movieCard = (
			<div className="movie">
	                <figure className="movie-poster">
	                	<Link to={"/movie/" + mit.id} >
	                		<img src={common.type.prototype.generateThumbUrl(mit.poster_path)} alt={mit.title} />
	                	</Link>
	                </figure>
	                <div className="movie-title"><Link to={"/movie/" + mit.id}>{common.type.prototype.cropText(mit.title, 15)}</Link></div>
                <p>{common.type.prototype.cropText(mit.overview, 70)}</p>
            </div>
		)

		return(movieCard)
	}
}

class PersonCreditsLib extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cdata: null
		}
	}

	componentDidMount(){
		fetch('https://api.themoviedb.org/3/person/' + this.props.pid + '/combined_credits?api_key=0d24bb45443026590b898587853388a4')
	   	.then((response) => response.json())
	   	.then((responseJson) => {
	     	this.setState({cdata: responseJson.cast});
   		}).catch((error) => {
     		console.error(error);
   		});
	}

	

	render(){
		const divClearBoth = {
		  clear: 'both'
		};

		if(this.state.cdata !== null){
			var creditsMoviesList = this.state.cdata.map((creditsMovie) => {
					if(creditsMovie.media_type === 'movie'){
						return <MovieCard mit={creditsMovie} />
					}
				}
			);
			return(
				<div className="entry-content">
					<div style={divClearBoth}>&nbsp;</div>
					<h2>
						{this.props.pname} Filmography
					</h2>
					<div style={divClearBoth}>&nbsp;</div>
					<div className="movie-list credits-movie-list">
						{creditsMoviesList}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default PersonCreditsLib;