import mongoose from 'mongoose'
import bcrtpt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrtpt.compare(enteredPassword, this.password)
}

//hash password
userSchema.pre('save', async function (next) {
  //no change password, then skip hash password
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrtpt.genSalt(10)
  this.password = await bcrtpt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
