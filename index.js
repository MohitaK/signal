require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(requestTimer);

app.get("/health", (req, res) => {
    return res.status(200).json({ status: "ok" });
})

function requestTimer(req, res, next) {
    const start = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });

    next();
}

const servicesRouter = require("./routes/services");
app.use("/services", servicesRouter);

app.listen(PORT, () => console.log(`Signal listening on :${PORT}`));