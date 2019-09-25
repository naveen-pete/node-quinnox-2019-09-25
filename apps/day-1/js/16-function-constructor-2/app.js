function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;

    // this.getFullname = function() {}
    console.log('This function is invoked.');

}

Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

Person.prototype.address = {
    city: 'blore',
    state: 'KA'
};


var john = new Person('John', 'Doe');
console.log('john:', john);
console.log(john.getFullName());


var jane = new Person('Jane', 'Doe');
console.log('jane:', jane);

Person.prototype.getFormalFullName = function () {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());




