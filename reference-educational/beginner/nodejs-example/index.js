const express = require("express");
const redis = require("redis");
const client = redis.createClient({
  host: "redis-server", // This is referencing the alias/hostname defined in the docker-compose.yml file
  port: 6379 // By default, this value is 6379 anyways but defining here to eliminate any ambiguity since this is a reference project
});
client.set("visitors", 0); // Given multiple instances of the express server, this will reset the counter to 0 for every new instance (fix this later)
const app = express();

app.get("/", (req, res) => {
  client.get("visitors", (error, counter) => {
    res.send(`
        Hello from Austin, TX! \n
        You are vistor number: ${counter}
        `);
    client.set("visitors", parseInt(counter) + 1);
  });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
