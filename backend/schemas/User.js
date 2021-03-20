const { Text, Select, Password, Relationship, Checkbox } = require('@keystonejs/fields');


const User = {
    fields: {
        name: {
            type: Text,
            isRequired: true
        },
        email: {
            type: Text,
            isRequired: true,
            isUnique: true
        },
        password: {
            type: Password,
            isRequired: true
        },
        isAdmin: {
            type: Checkbox,
            isRequired: true
        }
    },
    access: ({ authentication: { item, listKey } }) => {
        return true;
      },
}

module.exports = User;