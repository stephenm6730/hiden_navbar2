import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    cardname: String,
    selectedFile: String,
    tags: [String],
    description: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },    
})

var Checkoutpost = mongoose.model('Checkoutpost', postSchema);

export default Checkoutpost;