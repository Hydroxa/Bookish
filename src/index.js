const Database = require("./repository/database");
const config = require("./setup/config");

Database.init(config.password);
require("./controllers/listener");
require("./controllers/endpointLoader");