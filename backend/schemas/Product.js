const { Text, Select, Integer, Relationship } = require('@keystonejs/fields');

const Product = {
    fields: {
        name: {
            type: Text
        },
        description: {
            type: Text,
            isMultiline: true
        },
        photo: {
            type: Relationship,
            ref: 'ProductImage.product',
            many: false
        },
        status: {
            type: Select,
            options: [
                { label: 'Draft', value: 'DRAFT' },
                { label: 'Available', value: 'AVAILABLE' },
                { label: 'Unavailable', value: 'UNAVAILABLE' }
            ],
            defaultValue: 'DRAFT'
        },
        price: {
            type: Integer
        }
    }
}

module.exports = Product;