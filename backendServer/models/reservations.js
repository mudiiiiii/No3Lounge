const mongoose = require('mongoose')


const reservationSchema = new mongoose.Schema({
    numberOfPeople: {
        type: Number,
        required: true,
        min: 1, 
        max: 10 
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
        enum: [
            "04 : 00 pm", "04 : 30 pm",  "05 : 00 pm", "05 : 30 pm", 
            "06 : 00 pm", "06 : 30 pm", "07 : 00 pm", "07 : 30 pm", "08 : 00 pm","08 : 30 pm", "09 : 00 pm", "09 : 30 pm", "10 : 00 pm", "10 : 30 pm", "11 : 00 pm", "11 : 30 pm"
        ] // This ensures only these specified times can be selected
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    emailAddress: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(email) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    phoneNumber: {
        type: String,
        required: true,
    }
    
});
const reservations = mongoose.model('reservations', reservationSchema);

module.exports = reservations;