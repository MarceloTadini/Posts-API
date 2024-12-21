require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/api-posts',
    apiSecret: process.env.API_SECRET || 'default-secret'
};

module.exports = config;
