const router = require('express').Router();
const {graphqlHTTP} = require('express-graphql');
const { graphQLSchema } = require('../graphql/index.graphql');
const { graphqlCFG } = require('../modules/graphql.config');
const expressPlayground = require('graphql-playground-middleware-express').default

router.use("/graphql", graphqlHTTP(graphqlCFG))
router.use('/playground', expressPlayground({ endpoint: '/graphql' }))


module.exports= {
    AllRoutes : router

}