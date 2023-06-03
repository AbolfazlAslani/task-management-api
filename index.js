const {Application} = require('./app/server');

new Application("mongodb://localhost:27017/task-management-api", 3000)