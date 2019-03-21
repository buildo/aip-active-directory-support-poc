const jsonServer = require('json-server');
const routes = require('./routes.json');
const notificationsSource = require('./notifications.json');

const _ = require('lodash');

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ static: './aip-generic-app/public' });

const NOTIFICATIONS = {};

function getRandomLanguage() {
  return currentLocale;
}

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// rewriter
server.use(jsonServer.rewriter(routes));

// Use default router
server.listen(process.env.MOCK_PORT, () => {
  console.log('JSON Server is running');
});
