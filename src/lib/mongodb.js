import 'dotenv/config'
import mongoose from 'mongoose'

/**
Source: https: //github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js
**/

const MONGODB_URI = process.env.MONGODB_URI
console.log("MONGODB_URI available:", !!MONGODB_URI)

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null
  }
}

async function dbConnect() {
  console.log('dbconnect called')
  if (cached.conn) {
    console.log('conn is cached')
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    console.log('connected!')
  } catch (e) {
    cached.promise = null
    console.log('failed!')
    throw e
  }

  return cached.conn
}

export default dbConnect