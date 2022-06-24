const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", routes.login);
app.use("/address-bank", routes.address);
app.use("/patient", routes.patient);
app.use("/worker", routes.worker);
app.use("/doctor", routes.doctor);
app.use("/agenda", routes.agenda);

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
