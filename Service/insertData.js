const EntitySql = require('./entitySql.js');

module.exports = {

	sendConnection : async function(pool){

		this.pool = pool;

	},

	insertData : async function(prepareData){

		console.log('Inserting data in the database...');

		await this.insertUserData(prepareData.users);

		await this.insertTodoData(prepareData.todos);

		await this.insertPostData(prepareData.posts);

		await this.insertCommentData(prepareData.comments);

		await this.insertAlbumsData(prepareData.albums);

		await this.insertPhotosData(prepareData.photos);

		console.log('All Data Imported Succesfully');

		console.log('Closing pool');

		await this.pool.end();

	},

	executeQuery : async function(values) {

		try {

			return await this.pool.query(values);

		}
		catch (error) {

			console.log('Query execution failed: ', error);

		}

	},

	insertUserData : async function(users){

		let combinesql = '' ;

		for (let user of users) {

			combinesql += EntitySql.userSql(user) + "; ";

		}

		await this.executeQuery(combinesql);

		console.log('All User Data Inserted Succesfully');

	},

	insertTodoData : async function(todos){

		let combinesql = '';

		for (let todo of todos) {

			combinesql += EntitySql.todoSql(todo) + "; ";

		}

		await this.executeQuery(combinesql);

		console.log('All Todo Data Inserted Succesfully');

	},

	insertPhotosData : async function(photos){

		let combinesql = "";

		for (let photo of photos) {

			combinesql += EntitySql.photoSql(photo) + "; ";

		}

		await this.executeQuery(combinesql);

		console.log('All Photos Data Imported Succesfully');

	},

	insertCommentData : async function(comments){

		let combinesql = "";

		for (let comment of comments) {

			combinesql += EntitySql.commentSql(comment) + "; ";

		}

		await this.executeQuery(combinesql);

		console.log('All Comments Data Inserted Succesfully');

	},

	insertPostData : async function(posts){

		let combinesql = "";

		for (let post of posts) {

			combinesql += EntitySql.postSql(post) + "; ";

		}

		await this.executeQuery(combinesql);

		console.log('All Post Data Inserted Succesfully');

	},

	insertAlbumsData : async function(albums){

		let combinesql = "";

		for (let album of albums) {

			combinesql += EntitySql.albumSql(album) + "; ";

		}

		await this.executeQuery(combinesql);

		console.log('All Albums Data Inserted Succesfully');

	}

}