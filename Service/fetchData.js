const Constants = require('./../Constants/constant.js');
const Axios = require('axios');

module.exports = {

	getData: async function(request){

		const requestUrl = Constants.API_URL + request;

		console.log('Fetching Data From Given URL: ' + requestUrl);

		try {

			const response = await Axios.get(requestUrl);

			const data = response.data;

			console.log(`Retrieved ${data.length} items`);

			return data;

		}
		catch (error) {

			console.log('Oops !! Error Occured. API failed: ', error);

		}

		return [];

	},

	fetchDataAPI: async function(){

		console.log('Fetch All Requested Data');

		// Fetch Data simultaneously

		const UserData     =  this.getData('users');
		const TodoData     =  this.getData('todos');
		const PostData     =  this.getData('posts');
		const CommentData  =  this.getData('comments');
		const AlbumData    =  this.getData('albums');
		const PhotoData    =  this.getData('photos');


		const PrepareData = {

			users    : await UserData,
			todos    : await TodoData,
			posts    : await PostData,
			comments : await CommentData,
			albums   : await AlbumData,
			photos   : await PhotoData

		}

		console.log('Retrieved all data Succesfully.');

		return PrepareData;

	}

}