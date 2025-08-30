import { MongoClient } from 'mongodb'

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error('Missing MONGODB_URI in environment variables')
}

const client = new MongoClient(uri)

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the value
  // across module reloads caused by HMR (Hot Module Replacement)
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable
  clientPromise = client.connect()
}

export async function getDb() {
  const dbName = process.env.DB_NAME
  if (!dbName) {
    throw new Error('Missing DB_NAME in environment variables')
  }
  const mongoClient = await clientPromise
  return mongoClient.db(dbName)
}

export async function closeConnection() {
  const mongoClient = await clientPromise
  await mongoClient.close()
}
