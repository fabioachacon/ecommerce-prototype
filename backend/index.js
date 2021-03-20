require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'eshop-backend';
const adapterConfig = { mongoUri: process.env.MONGO_URI};
const session = require('express-session');
const MongoStore = require('connect-mongo');

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

 const UserSchema = require('./schemas/User');
 const ProductSchema = require('./schemas/Product');
 const ProductImageSchema = require('./schemas/ProductImage');

 const sessionConfig = {
   resave: false,
   saveUninitialized: false,
   cookie: {
    secure: process.env.NODE_ENV === 'production', // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
  secret: process.env.COOKIE_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
  })
}

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
  sessionStore: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
  })
});

keystone.createList('User', UserSchema);
keystone.createList('Product', ProductSchema);
keystone.createList('ProductImage', ProductImageSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password'
  }
});


module.exports = {
  keystone,
  apps: [ 
    new GraphQLApp(),
    new AdminUIApp({ 
      name: PROJECT_NAME, 
      enableDefaultRoute: true,
      authStrategy,
      isAccessAllowed: ({ authentication: { item: user, listKey: list } }) => !!user && !!user.isAdmin
     }),
    ],
    // configureExpress: app => {
    //   app.use(session(sessionConfig));
    // }
};
