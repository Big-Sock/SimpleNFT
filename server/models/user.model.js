const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
  }
})

module.exports = mongoose.model("user", userSchema)

// {
//   iss: 'https://accounts.google.com/',
//   nbf: 1651281635,
//   aud: '99536515076-q5u2n37tcnjtr9bd2i02c8hk0b2huiis.apps.googleusercontent.com',
//   sub: '111596232479966161662',
//   hd: 'breakthroughlabs.io',
//   email: 'tyler@breakthroughlabs.io',
//   email_verified: true,
//   azp: '99536515076-q5u2n37tcnjtr9bd2i02c8hk0b2huiis.apps.googleusercontent.com',
//   name: 'Tyler Sehr',
//   picture: 'https://lh3.googleusercontent.com/a/AATXAJysxxHqCG9D6wWhEX4eju_8016hwFUb_52zCaZT=s96-c',
//   given_name: 'Tyler',
//   family_name: 'Sehr',
//   iat: 1651281935,
//   exp: 1651285535,
//   jti: '7d54904cf9f93ed921a42b89a567fd01469073bd'
// }
