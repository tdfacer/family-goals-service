import * as mongoose from 'mongoose';
let isConnected: number;

export async function connectToDatabase() {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  const db = await mongoose.connect(`${process.env.DB_URI_PREFIX}://${process.env.DB_AUTH || ''}${process.env.DB_DOMAIN}/familygoals?retryWrites=true&w=majority`);
  isConnected = db.connections[ 0 ].readyState;
};
