const { GraphQLString, GraphQLList } = require("graphql");
const { checkUserExistAndCreate } = require("../../http/controllers/users/user.controller");
const { UserType } = require("../typeDefs/user.type");

const createUser = {
    type: new GraphQLList(UserType),
    args:{

        name: { type:  GraphQLString },
        lastname: { type:  GraphQLString },
        mobile: { type:  GraphQLString },
        email: { type:  GraphQLString },
        username: { type:  GraphQLString },
        password: { type:  GraphQLString },

    },
    resolve: async (_, args) => {
        try {
            const result = await checkUserExistAndCreate(args)
            return [result]
        } catch (error) {
          
          throw error;
        }
      }
      

}

module.exports = {
    createUser
}