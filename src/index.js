const {setupServer} = require("./server");
const db = require("./knex");

const server = setupServer();
const PORT = process.env.PORT || 3000;


(async () => {
    try {
        await db.migrate.latest();
        server.listen(PORT, () => {
            console.log("Server listening on Port: ", PORT);
        });
    } catch (err) {
        console.error(err);
    }
})();



