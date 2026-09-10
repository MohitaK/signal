const express = require("express");
const router = express.Router();

const SERVICE_STATUSES = ["operational", "degraded", "down"];

const SERVICES = [
    { id: 1, name: "api-gateway", status: SERVICE_STATUSES[0] },
    { id: 2, name: "api-middleware", status: SERVICE_STATUSES[0] },
    { id: 3, name: "api-service", status: SERVICE_STATUSES[0] },
]

router.get("/", (req, res) => {
    return res.status(200).json(SERVICES)
});

router.get("/:id", (req, res) => {
    const service = SERVICES.find((s) => s.id === Number(req.params.id));

    if (!service) {
        return res.status(404).json({ error: "service not found" });
    }

    return res.status(200).json(service)
})

module.exports = router;
