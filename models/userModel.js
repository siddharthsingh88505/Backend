import mongoose from "mongoose";

// schema design
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  mobileno: String,
  email: String,
  password: String,
});

// compile schema
const UserModel = mongoose.model('User', userSchema);

// export User model
export { UserModel };