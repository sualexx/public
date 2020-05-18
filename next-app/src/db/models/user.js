import { Schema } from "mongoose"

const collection = "users"

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    collection,
  }
)

export default connection => connection.model(collection, UserSchema)
