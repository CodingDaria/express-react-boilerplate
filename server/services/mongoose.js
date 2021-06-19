import mongoose from 'mongoose';

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected');
});

mongoose.connection.on('error', (error) => {
  console.log(`Connection to DB failed: ${error}`);
  process.exit(1);
});

exports.connect = async (mongoURL = process.env.MONGO_URL) => {
  try {
    await mongoose.connect(mongoURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error);
  }

  return mongoose.connection;
};
