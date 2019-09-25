var john = {
    firstname: 'John',
    lastname: 'Doe',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(john);

greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

john.address2 = {
    street: '333 Second St.'
}
