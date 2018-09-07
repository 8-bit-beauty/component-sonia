const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'slideShowData'
});

connection.connect(function (err) {
    if (err) {
        console.log('DB NOT connected!')
    } else {
        console.log('DB connected!')
    }
});


// getting product data from db
function getDescription(callback) {

    connection.query('SELECT * from products', function (error, results) {
        if (err) {
            console.log('Error Getting Data of Table')
        } else {
            callback(results)
        }
    });
}


// ToDo posting user information to users table per click on item


module.exports.getDescription = getDescription;