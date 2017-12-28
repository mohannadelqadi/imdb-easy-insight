import React from 'react';
import ReactDOM from 'react-dom';
import Header from './templates/Header.js'
import Footer from './templates/Footer.js'
import HomaPage from './pages/HomePage.js'
import Movie from './pages/Movie.js'
import Reviews from './pages/Reviews.js'
import Person from './pages/Person.js'
import { BrowserRouter, Link, Route } from 'react-router-dom'


class HomePageRouter extends React.Component{
	render(){
		return(
			<div>
				<Header active_mi='home' />
				<HomaPage />
				<Footer />
			</div>
		)
	}	
}

class MovieRouter extends React.Component{
	render(){
		return(
			<div>
				<Header active_mi='movies' />
				<Movie mid={this.props.match.params.mid}/>
				<Footer />
			</div>
		);
	}
}

class ReviewRouter extends React.Component{
	render(){
		return(
			<div>
				<Header active_mi='movies' />
				<Reviews />
				<Footer />
			</div>
		);
	}
}

class PersonRouter extends React.Component{
	render(){
		return(
			<div>
				<Header active_mi='movies' />
				<Person pid={this.props.match.params.pid} mid={this.props.match.params.mid} mname={this.props.match.params.mname} />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
<BrowserRouter>
  <div>
  	<Route exact path='/' component={HomePageRouter} />
    <Route exact path='/movies' component={ReviewRouter} />
    <Route exact path='/contact' component={HomePageRouter} />
	<Route exact path='/movie/:mid' component={MovieRouter} />
	<Route exact path='/person/:pid/:mid/:mname' component={PersonRouter} />
  </div>
</BrowserRouter>, 
document.getElementById('site-content'));