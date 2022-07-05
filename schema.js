import {buildSchema} from 'graphql';

// type Query {
    //     hello : String
    // }
const schema = buildSchema(`
    type Person{
        id : ID,
        firstName : String,
        lastName : String,
        email : String,
    
    }     
    
    type Query {
            person : Person
        }
    
    input PersonInput {
        id : ID, 
        firstName : String,
        lastName : String,
        email : String,
    }

    type Mutation {
        createPerson(input : PersonInput) : Person
    }
`);

export default schema;
