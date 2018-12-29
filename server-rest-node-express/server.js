const compression = require("compression");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const contactRoute = require("./routes/route-contact");
// const employeeRoute = require("./routes/route-employee");
// const productRoute = require("./routes/route-product");
// const userRoute = require("./routes/route-user");
// const adminRoute = require("./routes/route-admin");
// const dosenRoute = require("./routes/route-dosen");
// const mahasiswaRoute = require("./routes/route-mahasiswa");

// Route for Siakad
const getRoute = require("./routes/siakad/siakad-route-get");
const postRoute = require("./routes/siakad/siakad-route-post");
const signinRoute = require('./routes/siakad/siakad-route-signin-register')

// Route for Pokemon
const pokemonRoute = require('./routes/pokemon/pokemon-get')

server.use(cors());
server.use(compression());
server.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Listening on port ${port}`));

// New Route
server.use(getRoute);
server.use(postRoute);
server.use(signinRoute);
server.use(pokemonRoute)


// const baseURL = "/api/"
// perhatikan pemakaian route, di sini apis nya adalah '/api/contacts', sedangkan di file route nya adalah '/'
// server.use(contactRoute);
// server.use(employeeRoute);
// server.use(productRoute);
// server.use(userRoute);
// server.use(adminRoute);
// server.use(dosenRoute);
// server.use(mahasiswaRoute);



