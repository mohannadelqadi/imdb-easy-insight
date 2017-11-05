import React from 'react';
import Common from './Common.js'
import {Link} from 'react-router-dom'

class GetSecondRow extends React.Component{

	getSecondRowMovies(){
		var common = <Common />
		return(
	        this.props.mint.map((mit) =>
				<div key={mit.id} className="col-sm-6 col-md-12">
	            	<div className="latest-movie">
	                	<Link to={"movie/" + mit.id}><img src={common.type.prototype.generateThumbUrl(mit.backdrop_path)} alt={mit.title} /></Link>
	                </div>
	            </div>
	        )
        )
	}

	render(){
		return(
			<div className="row">
				{this.getSecondRowMovies()}
			</div>
		);
	}
}

class GetTheRestOfTheMovies extends React.Component{

	getThirdRowMoviesList(){
		var common = <Common />
		let mapped_view = this.props.mint.map((mit) => 
			<div key={mit.id} className="col-sm-6 col-md-3">
                <div className="latest-movie">
                    <Link to={"movie/" + mit.id}><img src={common.type.prototype.generateThumbUrl(mit.backdrop_path)} alt={mit.title} /></Link>
                </div>
            </div>
		)
		return mapped_view
	}

	render(){
		return(
			<div>
				{this.getThirdRowMoviesList()}
			</div>
		);
	}

}

class MoviesInTheatres extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			mint : null
		}
	}

	inTheatresList(){
		let features_list = this.state.mint;
		features_list = features_list.slice(0, 1);
		var common = <Common />
		return(
			features_list.map((mit) => 
				<div key={mit.id} className='latest-movie top-latest-movie'><Link to={"movie/" + mit.id}><img src={common.type.prototype.generateThumbUrl(mit.backdrop_path)} alt={mit.title} /></Link></div>
			)
		);
	}

	componentDidMount(){
		let current_date = new Date(),
			get_start = (current_date.getFullYear() - 1) + '-' + (current_date.getMonth() + 1) + '-' + current_date.getDate(),
			get_end = (current_date.getFullYear()) + '-' + (current_date.getMonth() + 1) + '-' + current_date.getDate();

		fetch('https://api.themoviedb.org/3/discover/movie?api_key=0d24bb45443026590b898587853388a4&primary_release_date.gte=' + get_start + '&primary_release_date.lte=' + get_end)
	   	.then((response) => response.json())
	   	.then((responseJson) => {
	     	this.setState({mint: responseJson.results});
   		}).catch((error) => {
     		console.error(error);
   		});
	}

	getSecondSet(){
		let second_end = 0;
		if(this.state.mint.length > 1){
     		second_end = this.state.mint.length > 4 ? 4 : this.state.mint.length;
     		return (
     			<GetSecondRow mint={this.state.mint.slice(1, second_end)} />
     		)
     	}
	}

	getRestSet(){
		let rest_end = 0;
		if(this.state.mint.length > 8){
     		rest_end = this.state.mint.length > 8 ? 8 : this.state.mint.length;
     		return(
     			<GetTheRestOfTheMovies mint={this.state.mint.slice(4, rest_end)} />
     		)
     	}
	}

	render(){
		if(this.state.mint != null){
			return(
				<div>
					<div className="row">
	                    <div className="col-md-9">
	                        <h2 className="section-title">Movies are in theatres</h2>
	                        <div id="movies_theatres" className="slider">
	                            <div className='slides'>
									{this.inTheatresList()}
								</div>
	                        </div>
	                    </div>
	                    <div className="col-md-3">
	                    	{this.getSecondSet()}
	                    </div>
	                </div>
	                <div className="row">
	                    {this.getRestSet()}
	                </div>
                </div>
			);
		} else {
			return null;
		}
	}

}

export default MoviesInTheatres