/**
 * Created by amoroz-prom on 22.03.15.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);