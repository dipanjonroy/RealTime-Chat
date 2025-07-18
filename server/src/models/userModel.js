const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },

  strategy: {
    type: String,
  },

  profileImage: {
    type: String,
  },

  socketId: {
    type: String,
  },

  isOnline: {
    type: Boolean,
    default: false,
  },

  lastSeen: {
    type: String,
    default: Date.now,
  },
});

const User = model("User", schema);

module.exports = User;
