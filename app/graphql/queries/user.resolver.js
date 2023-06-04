const { GraphQLList, GraphQLObjectType, GraphQLString } = require("graphql");
const { userModel } = require("../../models/users");
const { UserType } = require("../typeDefs/user.type");

const UserResolver = {
    type : new GraphQLList(UserType),
    resolve : async () =>{
        return await userModel.find({})
    }

}


const oneUserResolver = {
    type: new GraphQLList(UserType),
    args:{

        id: { type: new GraphQLList(GraphQLString) }
    
    },
    resolve: async (_, args) => {
        try {
          const result = await userModel.findOne({ _id: args.id });
          if (!result) {
            throw new Error('کاربر مورد نظر یافت نشد');
          }
          return [result];
        } catch (error) {
          if (error.name === 'CastError') {
            throw new Error('فرمت آیدی وارد شده صحیح نمیباشد');
          }
          throw error;
        }
      }
      

}


module.exports = {
    oneUserResolver,
    UserResolver
}