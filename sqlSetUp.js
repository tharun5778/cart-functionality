const mysql = require('mysql');



setup = async() => {
    var mysqlConnection = await mysql.createConnection({
        host: 'sql6.freemysqlhosting.net',
        user: 'sql6399353',
        password: 'mxPQLehdnl',
        database: 'sql6399353'

    });

    mysqlConnection.connect((err) => {
        if (!err) {
            console.log('successfully connected...');
        } else {
            console.log('connection failed...\n Error : ' + JSON.stringify(err, undefined, 2));
        }
    });

    return mysqlConnection;
}

const db = setup();

export default db;