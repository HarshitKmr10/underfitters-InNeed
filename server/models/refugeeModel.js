const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const refugeeSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please enter first name"]
    },
    age: {
        type: Number,
        required: [true, "Please enter age"]
    },
    gender: {
        type: String,
        required: [true, "Please enter gender"]
    },
    country: {
        type: String,
        required: [true, "Please enter country"]
    },
    email: {
        type: String,
        default: "",
    },
    phoneNumber: {
        type: Number,
        default: 0,
        maxLength: [10, "Phone number cannot exceed 10 digits"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    },
    currentAddress: {
        type: String,
        default: ""
    },
    reasonForLeaving: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    skills: {
        type: Array,
        default: []
    },
    documents: {
        type: Array,
        default: []
    },
    governmentId: {
        type: String,
        default: ""
    }
})

// Hash the Password
refugeeSchema.methods.generateHash = async password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Check if Password is Valid
refugeeSchema.methods.validPassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = mongoose.model("Refugee", refugeeSchema);