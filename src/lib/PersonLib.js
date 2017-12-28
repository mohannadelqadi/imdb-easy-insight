import React from 'react';
import {Link} from 'react-router-dom'
import Common from './../lib/Common.js';
import PersonCreditsLib from './PersonCreditsLib.js';

class PersonLib extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pdata: null
		}
	}

	componentDidMount(){
		fetch('https://api.themoviedb.org/3/person/' + this.props.pid + '?api_key=0d24bb45443026590b898587853388a4')
	   	.then((response) => response.json())
	   	.then((responseJson) => {
	     	this.setState({pdata: responseJson});
   		}).catch((error) => {
     		console.error(error);
   		});
	}

	render(){
		var common = <Common />;
		if(this.state.pdata === null){
			return null
		} else {
			return(
				<div className="page">
					<div className="breadcrumbs">
		                <Link to="/">Home</Link>
		                <Link to="/movies">Movie Review</Link>
		                <Link to={"/movie/" + this.props.mid}>{this.props.mname}</Link>
		                <span>{this.state.pdata.name}</span>
		            </div>
					<div className="content">
		                <div className="row">
		                    <div className="col-md-4">
		                        <figure className="movie-poster"><img src={common.type.prototype.generateThumbUrl(this.state.pdata.profile_path)} alt={this.state.pdata.name} /></figure>
		                    </div>
		                    <div className="col-md-6">
		                        <h2 className="movie-title">{this.state.pdata.name}</h2>
		                        <ul className="movie-meta">
		                            <li><strong>Birthday:</strong> {this.state.pdata.birthday}</li>
		                            <li><strong>Place of birth:</strong> {this.state.pdata.place_of_birth}</li>
		                            <li><strong>Died: </strong> {this.state.pdata.deathday}</li>
									<li><strong>Turn: </strong> {this.state.pdata.adult ? 'True' : 'No'}</li>
		                            <li><strong>Website: </strong><a href={this.state.pdata.homepage} target="_blank">{this.state.pdata.homepage}</a></li>
		                        </ul>
		                    </div>
		                </div>
		                <div className="clear-both">&nbsp;</div>
		                <div className="entry-content">
		                	<h2>Biography</h2>
		                    <p>{this.state.pdata.biography}</p>
		                </div>
		                <PersonCreditsLib pid={this.props.pid} pname={this.state.pdata.name} />
		            </div>
		        </div>
			)
		}
	}
}

export default PersonLib