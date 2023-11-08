import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  form_custom: [{ type: Schema.Types.ObjectId, ref: 'FormCustom' }],
  // form_custom: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FormCustom' }],
});

export default mongoose.model('User', UserSchema);
