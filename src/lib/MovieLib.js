import React from 'react';
import ReactDOM from 'react-dom';
import Common from './Common.js'
import {Link} from 'react-router-dom'
import movieCastnCrewList from './../customeCss/movieCastnCrewList.css'

class CastAndCrew extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			c_data: null
		}
	}

	componentDidMount(){
		fetch('https://api.themoviedb.org/3/movie/' + this.props.mid + '/credits?api_key=0d24bb45443026590b898587853388a4')
	   	.then((response) => response.json())
	   	.then((responseJson) => {
	   		this.props.fillParentCastCallBack(responseJson);
	     	this.setState({c_data: responseJson});
   		}).catch((error) => {
     		console.error(error);
   		});
	}

	getCrew(position){
		if(typeof(this.state.c_data.crew) !== 'undefined' 
			&& this.state.c_data.crew !== null){
			let c_length = this.state.c_data.crew.length;
			let mapped_c = ''; 
			this.state.c_data.crew.map((c) => {
					if(c.job.toLowerCase() === position){
						mapped_c += c.name + ', '
					}
				}
			)
			return mapped_c			
		} else {
			return null;
		}

	}

	getMovieStars(){
		if(typeof(this.state.c_data.cast) !== 'undefined' 
			&& this.state.c_data.cast !== null){
			let cast = this.state.c_data.cast.slice(0, 3);
			let c_length = cast.length;
			let mapped_c = ''; 
			cast.map((c, i) => {
					if(c_length === (i + 1)){
						mapped_c += c.name
					} else {
						mapped_c += c.name + ', '
					}
				}
			)
			return mapped_c
		} else {
			return null;
		}
	}

	render(){
		if(this.state.c_data != null){
			return(
				<ul className="starring">
	                <li><strong>Directors:</strong> {this.getCrew('director')}</li>
	                <li><strong>Writers:</strong> {this.getCrew('writer')}</li>
	                <li><strong>Stars:</strong> {this.getMovieStars()}</li>
	            </ul>
			)
		} else {
			return null
		}
		
	}
}

class DrawFullCast extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			full_cc: null
		}
	}

	componentDidMount(){
		this.setState({full_cc: this.props.full_cast_crew})
	}

	getFullCastCards(){
		var common = <Common />
		if(typeof(this.state.full_cc.cast) !== 'undefined' 
			&& this.state.full_cc.cast !== null){
			
				let ccArray = this.state.full_cc.cast.slice(0, 20);

				var topCnC = ccArray.map((c) =>{
						return(
							<div key={c.id} className="movie">
				                <figure className="movie-poster">
				                	<Link to={"/person/" + c.id + "/" + this.props.mid + "/" + this.props.mname} >
				                		<img src={common.type.prototype.generateThumbUrl(c.profile_path, 'poster-dummy')} alt={c.name} />
				                	</Link>
				                </figure>
				                <div className="movie-title"><Link to={"/person/" + c.id}>{c.name}</Link><br /><span className="cc-occupation">{c.character}</span></div>
				            </div>
						)
					}
				);

				return topCnC;

		} else {
			return null;
		}

	}

	render(){
		if(this.state.full_cc != null){
			return(
				<div className="content">
					<h2>Cast</h2>
					<div className="movie-list cc-movie-list">
						{this.getFullCastCards()}
					</div>
				</div>
			)
		} else {
			return null;
		}
		
	}
}

class MovieReviews extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			r_data: null
		}
	}

	componentDidMount(){
		fetch('https://api.themoviedb.org/3/movie/' + this.props.mid + '/reviews?api_key=0d24bb45443026590b898587853388a4')
	   	.then((response) => response.json())
	   	.then((responseJson) => {
	     	this.setState({r_data: responseJson.results});
   		}).catch((error) => {
     		console.error(error);
   		});
	}

	getReviewsMap(){
		return this.state.r_data.map((r) => 
			<p key={r.id}><strong>(By {r.author}) </strong>{r.content}</p>
		)
	}

	render(){
		if(this.state.r_data != null){
			let reviews = this.getReviewsMap();
			if(reviews.length > 0){
				return(
					<div className="entry-content">
	                	<h2>Movie Reviews</h2>
	                	{reviews}
	                </div>
				)
			} else {
				return null;
			}
		} else {
			return null;
		}
	}
}

class MovieLib extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movie_data: null,
			full_cast_crew: null
		}
		this.getFullCastAndCrew = this.getFullCastAndCrew.bind(this);
	}

	componentDidMount(){
		fetch('https://api.themoviedb.org/3/movie/' + this.props.mid + '?api_key=0d24bb45443026590b898587853388a4')
	   	.then((response) => response.json())
	   	.then((responseJson) => {
	     	this.setState({movie_data: responseJson});
   		}).catch((error) => {
     		console.error(error);
   		});
	}

	getMovieGenres(){
		if(typeof(this.state.movie_data.genres) !== 'undefined' 
			&& this.state.movie_data.genres !== null){
			let g_length = this.state.movie_data.genres.length;
			let mapped_genres = ''; 
			this.state.movie_data.genres.map((g, i) => {
					if(g_length === (i + 1)){
						mapped_genres += g.name
					} else {
						mapped_genres += g.name + '/'
					}
				}
			)
			return mapped_genres
		} else {
			return null;
		}
	}

	getProductionCompanies(){
		if(typeof(this.state.movie_data.production_companies) !== 'undefined' 
			&& this.state.movie_data.production_companies !== null){
			let pc_length = this.state.movie_data.production_companies.length;
			let mapped_pc = ''; 
			this.state.movie_data.production_companies.map((c, i) => {
					if(pc_length === (i + 1)){
						mapped_pc += c.name
					} else {
						mapped_pc += c.name + '/'
					}
				}
			)
			return mapped_pc
		} else {
			return null;
		}
	}

	getProductionCountries(){
		if(typeof(this.state.movie_data.production_countries) !== 'undefined'
			&& this.state.movie_data.production_countries !== null){
			let pc_length = this.state.movie_data.production_countries.length;
			let mapped_pc = ''; 
			this.state.movie_data.production_countries.map((c, i) => {
					if(pc_length === (i + 1)){
						mapped_pc += c.name
					} else {
						mapped_pc += c.name + '/'
					}
				}
			)
			return mapped_pc			
		} else {
			return null;
		}

	}

	getFullCastAndCrew(full_c){
		this.setState({full_cast_crew: full_c});
	}

	getRateValue(){
		if(typeof(this.state.movie_data.vote_average) !== 'undefined' 
			&& this.state.movie_data.vote_average !== null){
			return parseInt(this.state.movie_data.vote_average);
		} else {
			return 0;
		}
	}

	render(){
		if(this.state.movie_data != null){
			var common = <Common />
			return(
				<div className="page">
					<div className="breadcrumbs">
	                    <Link to="/">Home</Link>
	                    <Link to="/movies">Movie Review</Link>
	                    <span>{this.state.movie_data.title}</span>
	                </div>
					<div className="content">
		                <div className="row">
		                    <div className="col-md-6">
		                        <figure className="movie-poster"><img src={common.type.prototype.generateThumbUrl(this.state.movie_data.backdrop_path)} alt={this.state.movie_data.title} /></figure>
		                    </div>
		                    <div className="col-md-6">
		                        <h2 className="movie-title">{this.state.movie_data.title}</h2>
		                        <div className="movie-summary">
		                            <p>{this.state.movie_data.overview}</p>
		                        </div>
		                        <ul className="movie-meta">
		                            <li><strong>Rating:</strong> 
		                                <div className="star-rating" title={"Rated " + this.getRateValue()  + " out of 10"}><span style={{width : ((this.getRateValue() / 10) * 100) + "%"}}><strong className="rating">{this.state.movie_data.vote_average}</strong> out of 10</span></div>
		                                <span> <strong className="rating">{this.getRateValue()}</strong> out of 10</span>
		                            </li>
		                            <li><strong>Length:</strong> {this.state.movie_data.runtime} min</li>
		                            <li><strong>Premiere:</strong> {this.state.movie_data.release_date}</li>
		                            <li><strong>Category:</strong> {this.getMovieGenres()}</li>
		                            <li><strong>Production companies:</strong> {this.getProductionCompanies()}</li>
									<li><strong>Production countries:</strong> {this.getProductionCountries()}</li>
		                        </ul>
		                        <CastAndCrew mid={this.props.mid} fillParentCastCallBack={this.getFullCastAndCrew} />
		                    </div>
		                </div>
		               	<DrawFullCast key={this.state.full_cast_crew === null ? 0 : this.state.full_cast_crew.length} mname={this.state.movie_data.title} mid={this.props.mid}  full_cast_crew={this.state.full_cast_crew} />
		                <div className="clear-both">&nbsp;</div>
		                <MovieReviews mid={this.props.mid} />
		            </div>
		        </div>
			)
		} else {
			return null
		}
	}
}

export default MovieLib