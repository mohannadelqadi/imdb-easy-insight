import React from 'react';
import MoviesInTheatresLib from './../lib/MoviesInTheatresLib.js'
import {Link} from 'react-router-dom'
import Common from './../lib/Common.js';
import { Redirect } from 'react-router';
import ReactDOM from 'react-dom';
import LoadingIndicator from './../lib/LoadingIndicator.js';

class MoviesInTheatres extends React.Component{
    constructor(props){
        super(props);
        let temp_y = new Date();
        this.state = {
            filter_years: temp_y.getFullYear(),
            filter_genre: null,
            page: 1
        }
        
        this.setLoadMoreTrue = this.setLoadMoreTrue.bind(this);
        this._handleScroll = this._handleScroll.bind(this);
    }

    componentWillUnmount() {
        this.setState({page: 1});
        window.removeEventListener('scroll', this._handleScroll);
    }

    _handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            var elem = document.getElementById('load_point');
            if(typeof(elem) !== 'undefined' && elem !== null){
                elem.style.display = 'block';
            }
            this.setState({page: (this.state.page + 1)});
        }
    }

    componentDidMount(){
        this.setState({page: 1});
        window.addEventListener('scroll', this._handleScroll);
    }

    setLoadMoreTrue(){
        var elem = document.getElementById('load_point');
        elem.style.display = 'none';
    }

	render(){
        let years_range = 15, 
            temp_y_arr = new Array(),
            temp_y = new Date();
        temp_y_arr.push(temp_y.getFullYear());

        while(years_range--){
            temp_y_arr.push(temp_y.getFullYear() - (15 - years_range));
        }

        var common = <Common />;

        var temp_pages = new Array();
        for(var i = 0; i < this.state.page; i++){
            temp_pages.push(i+1);
        }

		return(
			<main className="main-content" id="main-content">
                <div className="container" ref="list">
                    <div className="page">
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link>
                            <span>Movies</span>
                        </div>
                        <div className="filters">
                            <select id="generes" onChange={() => {this.setState({page: 1}); this.setState({filter_genre: document.getElementById('generes').value})}}>
                                <option value="-1">All</option>
                                {common.type.prototype.getMoviesGeneres().genres.map((gen) =>
                                    <option key={gen.id} value={gen.id}>{gen.name}</option>
                                )}
                            </select>
                            <select id="years" defaultValue={temp_y.getFullYear()} onChange={() => {this.setState({page: 1}); this.setState({filter_years: document.getElementById('years').value})}}>
                                <option value="-1">All</option>
                                {temp_y_arr.map((y) => 
                                    <option key={y} value={y}>{y}</option>
                                )}
                            </select>
                        </div>
                        <div id="scroll_container">
                            {
                                temp_pages.map((p)=>
                                     <MoviesInTheatresLib key={this.state.filter_years + '-' + this.state.filter_genre + '-' + p} 
                                        primary_release_year={this.state.filter_years} with_genres={this.state.filter_genre} 
                                        page={p} setLoadMoreTrueCallBack={this.setLoadMoreTrue} />
                                )
                            }
                        </div>
                    </div>
                    <LoadingIndicator />
                </div>
            </main>
		)
	}

}

export default MoviesInTheatres