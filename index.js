import express from "express";
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';

const app = express();

const tempDatabase = {};

class Person {
    constructor(id, {firstName, lastName, email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
app.get('/', (req, res)=>{
    res.send("Hi, This is POC for GraphQL");
})

const root = { 
    person: () => {
        return {
            firstName : 'Vishal',
            lastName: 'Singh',
            email: 'vishalsinghvns@gmail.com'
        }
    },
    createPerson: ({input}) =>{
       let id = require('crypto').randomBytes(10).toString('hex'); 
        tempDatabase[id] = input;
        return new Person(id, input); 
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, ()=>{
    console.log("Server is up and running on port 3000");
})