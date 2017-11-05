import React from 'react';
import ReactDOM from 'react-dom';
import HomePageMoviesInTheatres from './../lib/HomePageMoviesInTheatres.js'

class HomePage extends React.Component{

	render(){
		return(
			<main className="main-content">
                <div className="container">
                    <div className="page">



                        <HomePageMoviesInTheatres />

                        
                        <div className="row">
                            <div className="col-md-4">
                                <h2 className="section-title">December premiere</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <ul className="movie-schedule">
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2 className="section-title">November premiere</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <ul className="movie-schedule">
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2 className="section-title">October premiere</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <ul className="movie-schedule">
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

		)
	}

}

export default HomePage