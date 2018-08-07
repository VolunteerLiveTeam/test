const Express = require("express");

const app = Express();

app.get("/", (req, res) => {
    res.status(200);
    res.end("Hello world!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening.");
});
