const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = require('graphql');
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
        
    }

})
const graphQLSchema = new GraphQLSchema({
    query: RootQuery,
    // mutation: RootMuta   tions

})

module.exports={

    graphQLSchema
}