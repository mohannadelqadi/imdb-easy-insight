import React from 'react';
import ReactDOM from 'react-dom';
import Common from './Common.js'
import {Link} from 'react-router-dom'

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
	                <div className="movie-title"><Link to={"/movie/" + mit.id}>{mit.title}</Link></div>
                <p>{common.type.prototype.cropText(mit.overview, 70)}</p>
            </div>
		)

		return(movieCard)
	}

}

class MoviesInTheatresLib extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			mint : null
		}
	}

	componentDidMount(){
		let current_date = new Date();
		let primary_release_year = '';

		if(typeof(this.props.primary_release_year) !== 'undefined' && this.props.primary_release_year !== null 
			&& this.props.primary_release_year !== -1 && this.props.primary_release_year !== '-1' 
			&& this.props.primary_release_year !== 0 && this.props.primary_release_year !== '0'){
			primary_release_year = '&primary_release_year=' + this.props.primary_release_year;
		}
		let with_genres = '';
		if(typeof(this.props.with_genres) !== 'undefined'  && this.props.with_genres !== null
			&& this.props.with_genres !== -1 && this.props.with_genres !== '-1'
			&& this.props.with_genres !== 0 && this.props.with_genres !== '0'){
			with_genres = '&with_genres=' + this.props.with_genres;
		}
		
		fetch('https://api.themoviedb.org/3/discover/movie?api_key=0d24bb45443026590b898587853388a4' + primary_release_year + with_genres + '&page=' + this.props.page)
	   	.then((response) => response.json())
	   	.then((responseJson) => {
	     	this.setState({mint: responseJson.results});
   		}).catch((error) => {
     		console.error(error);
   		});
	}

	render(){
		if(this.state.mint != null){
			this.props.setLoadMoreTrueCallBack();
			var mapped_results = this.state.mint.map((mit) => 
				<MovieCard key={mit.id} mit={mit} />
			)
			return(
				<div className="movie-list">
					{mapped_results}
				</div>
			)
		} else {
			return null;
		}
	}

}

export default MoviesInTheatresLib