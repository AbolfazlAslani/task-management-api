const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = require('graphql');
const { createUser } = require('./mutations/user.resolver');
const { UserResolver, oneUserResolver } = require('./queries/user.resolver');

const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        allUsers : UserResolver,
        findOneUser : oneUserResolver
    
    }

})

const RootMutations = new GraphQLObjectType({
    name:"Mutations",
    fields:{
    createUser
        
    }

})
const graphQLSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutations

})

module.exports={

    graphQLSchema
}