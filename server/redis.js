// connect to Redis
const redis = require("redis");
// const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient();

client.on("connect", () => {
  console.log(`connected to redis`);
});
client.on("error", err => {
  console.log(`Error: ${err}`);
});

module.exports = client;
