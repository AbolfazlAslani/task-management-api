const { graphQLSchema } = require("../graphql/index.graphql")


function graphqlCFG(req,res){

    return{
        schema : graphQLSchema,
        graphiql: false,
        context : {req,res}
    }
}


module.exports = {
    graphqlCFG
}