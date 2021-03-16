require('dotenv').config();
const { Relationship, Text } = require('@keystonejs/fields');
const { Keystone } = require('@keystonejs/keystone');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const fileAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'KSBackend',
  });

const ProductImage = {
    fields: {
        image: {
            type: CloudinaryImage,
            adapter: fileAdapter
        },
        altText: {
            type: Text
        },
        product: {
            type: Relationship,
            ref: 'Product.photo',
            many: true,
        }
    }
}

module.exports = ProductImage;