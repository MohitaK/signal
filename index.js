require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
    return res.status(200).json({ status: "ok" });
})

const servicesRouter = require("./routes/services");
app.use("/services", servicesRouter);

app.listen(PORT, () => console.log(`Signal listening on :${PORT}`));