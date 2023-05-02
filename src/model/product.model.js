const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("product_test", "root", "12345", {
    host: "localhost",
    dialect: "mysql"
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("All Good");
    } catch(err) {
        console.error("All Bad", err);
    }
}

testConnection();