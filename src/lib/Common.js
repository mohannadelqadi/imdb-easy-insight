import React from 'react';

class Common extends React.Component{

	LoadingIndicator(){
		return(
			<b>Loading, Please wait ....</b>
		)
	}

	cropText(text, length){
		if(typeof(text) === 'undefined' || text === null || text === ''){
			return '';
		}
		if(text.length <= length){
			return text;
		}
		var trimmedString = text.substr(0, length);
		trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
		return trimmedString + '...';
	}

	generateThumbUrl(thumb_id, dummy = 'slider-dummy'){
		if(thumb_id !== 'null' && thumb_id !== null){
			return "https://image.tmdb.org/t/p/w500/" + thumb_id;
		} else {
			return '/dummy/' + dummy + '.jpg';
		}
	}

	getMoviesGeneres(){
		return {
		  "genres": [
		    {
		      "id": 28,
		      "name": "Action"
		    },
		    {
		      "id": 12,
		      "name": "Adventure"
		    },
		    {
		      "id": 16,
		      "name": "Animation"
		    },
		    {
		      "id": 35,
		      "name": "Comedy"
		    },
		    {
		      "id": 80,
		      "name": "Crime"
		    },
		    {
		      "id": 99,
		      "name": "Documentary"
		    },
		    {
		      "id": 18,
		      "name": "Drama"
		    },
		    {
		      "id": 10751,
		      "name": "Family"
		    },
		    {
		      "id": 14,
		      "name": "Fantasy"
		    },
		    {
		      "id": 36,
		      "name": "History"
		    },
		    {
		      "id": 27,
		      "name": "Horror"
		    },
		    {
		      "id": 10402,
		      "name": "Music"
		    },
		    {
		      "id": 9648,
		      "name": "Mystery"
		    },
		    {
		      "id": 10749,
		      "name": "Romance"
		    },
		    {
		      "id": 878,
		      "name": "Science Fiction"
		    },
		    {
		      "id": 10770,
		      "name": "TV Movie"
		    },
		    {
		      "id": 53,
		      "name": "Thriller"
		    },
		    {
		      "id": 10752,
		      "name": "War"
		    },
		    {
		      "id": 37,
		      "name": "Western"
		    }
		  ]
		}
	}

}

export default Common;