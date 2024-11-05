import mongoose from "mongoose";
const args = process.argv.slice(2);

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://Mattofle:${password}@mattoflecluster.h3uus.mongodb.net/web3?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

// find all 
if (args.length < 2 ) {
    Person.find({}).then((result) => {
        result.forEach((person) => {
        console.log(person);
        });
        mongoose.connection.close();
    });
} else {
    const person = new Person({
        name: args[1],
        number: args[2],
    });
    person.save().then((result) => {
        console.log(`added ${args[0]} number ${args[1]} to phonebook`);
        mongoose.connection.close();
    });
}
