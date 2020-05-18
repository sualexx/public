import mongoose from "mongoose"

let conn = null

export const getConnection = async () => {
  if (conn == null) {
    // todo workaround for HMR. It remove old model before added new ones
    Object.keys(mongoose.connection.models).forEach(key => {
      delete mongoose.connection.models[key]
    })
    conn = await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  }
  return conn
}
