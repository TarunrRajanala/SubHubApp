const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    rent: { type: Number, required: true },
    availability: {
        start: { type: Date, required: true },
        end: { type: Date, required: true },
    },
    location: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photos: [String],
});

module.exports = mongoose.model('Listing', ListingSchema);
