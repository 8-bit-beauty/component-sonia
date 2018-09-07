var faker = require('faker');


function generateData() {
    for (var i = 0; i < 100; i++) {
        var randomName = faker.commerce.productName();
        var randomColor = faker.commerce.color();
        var randomPrice = faker.commerce.price();
        var randomProductId = faker.random.number();
        var randomDescription = faker.lorem.sentences();

    }
}

console.log(generateData());