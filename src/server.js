const express = require("express");
const knex = require("./knex");

const userController = require("./controllers/user.controller");
const goalController = require("./controllers/goal.controller");
const taskController = require("./controllers/task.controller");

const setupServer = () => {
    const app = express();
    app.use(express.json());

    app.get("/test", async (req, res) => {
        res.status(200).json({
            message: "API server connection successful.",
        });
    });

    app.get("/dbtest", async (req, res) => {
        let result = await knex.raw(`SELECT 1;`);
        if (result.rowCount === 1) {
            res.status(200).json({
                message: "Database connection successful.",
            });
        } else {
            res.status(500).json({
                message: "Failed to connect to database .",
            });
        }
    });

    // user
    app.post("/user/register", userController.register);
    app.post("/user/login", userController.login);

    // goal
    app.post("/goal/create", goalController.create);
    app.get("/goals/:userId", goalController.getGoalsByUserId);

    // task
    app.post("/task/create", taskController.create);
    app.get("/tasks/:goalId", taskController.getTasksByGoalId);

    return app;
};

module.exports = { setupServer };