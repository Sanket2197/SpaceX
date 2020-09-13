const express = require("express");

// Creating express app
const app = express();

// Defining Routes
app.use("/api/spacex", require("./routes/api/spacex"));

// Serving Static Files
app.use(express.static("client/build"));

// Sending HTML File to the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// PORT for Server
const PORT = process.env.PORT || 5050;

// Listening to PORT
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
