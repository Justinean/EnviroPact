const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, {user}) => {
            return User.findOne({ _id: user._id}).populate('savedCompanies')
        }
    },
}