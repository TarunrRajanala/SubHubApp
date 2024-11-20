const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
    const { title, description, rent, availability, location, postedBy, photos } = req.body;
    try {
        const newListing = new Listing({
            title,
            description,
            rent,
            availability,
            location,
            postedBy,
            photos,
        });
        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getListings = async (req, res) => {
    try {
        const listings = await Listing.find().populate('postedBy');
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
