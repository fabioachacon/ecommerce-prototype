const { Text, Select, Password, Relationship, Checkbox } = require('@keystonejs/fields');


const User = {
    fields: {
        name: {
            type: Text,
            isRequired: true
        },
        email: {
            type: Text,
            isRequired: true
        },
        password: {
            type: Password,
            isRequired: true
        }
    }
}

module.exports = User;