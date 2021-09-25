const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, {user}) => {
            return User.findOne({ _id: user._id}).populate('savedCompanies').popultate('goals');
        }
    },
    Mutation: {
        login: async (parent, args) => {
            const user = await User.findOne({ email: args.email });
            if (!user) {
                return { message: "Can't find this user" };
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                return { message: 'Wrong password!' };
            }
            const token = signToken(user);
            return { token, user };
        },
        createUser: async (parent, args) => {
            const user = await User.create(args);

            if (!user) {
                return { message: 'Something is wrong!' };
            }

            const token = signToken(user);
            return { token, user };
        },
        followCompany: async (parent, args, {user}) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedCompanies: args } },
                { new: true, runValidators: true }
            );
            if (!updatedUser) {
                return { message: "User is not logged in!" };
            }
            return updatedUser;
        },
        unfollowCompany: async (parent, args, {user}) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedCompanies: { companyId: args.companyId } } },
                { new: true }
            );
            if (!updatedUser) {
                return { message: "User is not logged in!" };
            }
            return updatedUser;
        }
    }
}

module.exports = resolvers;