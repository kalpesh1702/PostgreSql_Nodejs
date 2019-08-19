const Constants = require('../Constants/constant.js');
const fs = require('fs');

module.exports = {

	initDatabase: async function(pool){

		console.log('Initialization of Database Schema');

		const schema = fs.readFileSync('./../DataBase/schema.sql').toString();

		try {

			console.log('Remove Schema If Already Exist');

			await pool.query(schema);

			console.log('Created Schema, Types and Tables Succesfully');

		}
		catch (error) {

			console.log('Oops!! Error Occured. Schema creation failed: ', error);

		}

	}

}