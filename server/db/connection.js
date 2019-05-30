const monk = require('monk');
const connectionString = 'mongodb://admin:admin1234@ds263816.mlab.com:63816/wink-db';
const db = monk(connectionString);

module.exports = db;