const Constants = require('./../Constants/constant.js');
const Init = require('../DataBase/init.js');
const FetchData = require('./fetchData.js');
const InsertData = require('./insertData.js');
const { Pool } = require('pg');

const pool = new Pool({
	connectionString: Constants.POSTGRES_INSTANCE,
});

void async function () {

	await Init.initDatabase(pool);

	const data = await FetchData.fetchDataAPI();

	await InsertData.sendConnection(pool);

	await InsertData.insertData(data);

}();