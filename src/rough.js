const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    sequence: {
        type: Number
    },
    code: {
        type: String
    },
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    branchId: {
        type: Number
    },
    presentAddress: {
        type: String
    },
    permanentAddress: {
        type: String
    },
    gender: {
        type: String
    },
    phone1: {
        type: String
    },
    phone2: {
        type: String
    },
    email: {
        type: String
    },
    isVerified: {
        type: Boolean
    },
    verificationCode: {
        type: String
    },
    userRoleId: {
        type: Number
    },
    isActive: {
        type: String
    },
    comments: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }

});
userSchema.statics.findMaxSequence = function () {
    return this.findOne().select('sequence').sort({ sequence: -1 });
}
module.exports = mongoose.model('Users', userSchema);