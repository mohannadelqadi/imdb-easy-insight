import React from 'react';
import PersonLib from './../lib/PersonLib.js'

class Person extends React.Component{

	render(){
		return(
			<main className="main-content">
	            <div className="container">
	                <PersonLib pid={this.props.pid} mid={this.props.mid} mname={this.props.mname} />
	            </div>
	        </main>
		)
	}

}

export default Person