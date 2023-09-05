require("dotenv").config();
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: "dldx2inhf",
    api_key: "997393162192382",
    api_secret: "K1E13HDh35fe7cQ6pLCvv8OMRKg"
})
// process.env.CLOUDINARY_NAME
// process.env.CLOUDINARY_API_SECRET
// process.env.CLOUDINARY_API_KEY
module.exports = {cloudinary}