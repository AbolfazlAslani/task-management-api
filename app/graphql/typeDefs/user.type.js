const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLScalarType } = require("graphql");

const UserType = new GraphQLObjectType({
    name:"UserType",
    fields:{
        _id:{type : GraphQLString},
        name: {type : GraphQLString},
        lastname: {type : GraphQLString},
        mobile: {type : GraphQLString},
        email: {type : GraphQLString},
        username: {type : GraphQLString},
        password: {type : GraphQLString},
    }

})

module.exports = {

    UserType 
}