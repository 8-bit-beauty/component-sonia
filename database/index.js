const mysql = require('mysql');
const faker = require('faker');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'slideShowData',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB connected!');
  }
});

const DATA_NUMBER = 100;

const createTable = function () {
  for (let i = 0; i < DATA_NUMBER; i++) {
    // var randomProductId = faker.random.number();
    const randomName = faker.commerce.productName();
    const randomDescription = faker.lorem.sentences();
    const randomColor = faker.commerce.color();
    const randomPrice = faker.commerce.price();
    const randomImageURL = faker.random.image();
    const randomRating = Math.floor((Math.random() * 5) + 1);
    const randomReviewNumber = Math.floor((Math.random() * 1000) + 36);
    const randomBoolean = faker.random.boolean();

    const queryString = `INSERT INTO products (productName, productDescription, color, price, imageURL, rating, reviewNumber, isPrime)
                            VALUES ("${randomName}", "${randomDescription}", "${randomColor}", "${randomPrice}", "${randomImageURL}", ${randomRating}, ${randomReviewNumber}, ${randomBoolean})`;
    connection.query(queryString);
  }
};

// createTable();

const getRelatedItems = function () {
  const randoms = [];
  for (let i = 1; i <= 100; i++) {
    const relatedItems = ((Math.random() * 38) + 6)
    for (let j = 0; j < relatedItems; j++) {
      const relatedTo = ((Math.random() * 100) + 1);
      randoms.push([j, relatedTo]);
    }
  }
  return randoms;
  connection.query('INSERT INTO relatedItems VALUES ?', [randoms], (error) => {
    if (error) {
      console.log('ERROR inserting data into relatedItems', error);
    } else {
      console.log('SUCCESS inserting data into relatedItems');
    }
  });
};




const getAllData = function (callback) {
  queryString = 'SELECT * FROM products';
  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};


const getRelated = function (callback) {
  queryString = 'SELECT * FROM similarProducts WHERE productId=relatedItemId';
  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};


module.exports.getAllData = getAllData;
module.exports.getRelated = getRelated;
module.exports.getRelatedItems = getRelatedItems;
