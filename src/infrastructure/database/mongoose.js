const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Saia do processo em caso de erro
});

module.exports = mongoose;