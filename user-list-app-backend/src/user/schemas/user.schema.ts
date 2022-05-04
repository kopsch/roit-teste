import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
  githubUser: String,
  cep: String,
  state: String,
  city: String,
  district: String,
  street: String,
  number: Number,
  complement: String,
});
