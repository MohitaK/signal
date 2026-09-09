require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const SERVICE_STATUSES = ["operational", "degraded", "down"];

app.get("/health", (req, res) => {
    return res.status(200).json({ status: "ok" });
})

app.get("/services", (req, res) => {
    return res.status(200).json([
        { id: 1, name: "api-gateway", status: SERVICE_STATUSES[0] },
        { id: 2, name: "api-middleware", status: SERVICE_STATUSES[0] },
        { id: 3, name: "api-service", status: SERVICE_STATUSES[0] },
    ]);
})

app.listen(PORT, () => console.log(`Signal listening on :${PORT}`));