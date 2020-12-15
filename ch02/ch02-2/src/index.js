"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person/person");
var testMakePerson = function () {
    var jane = person_1.makePerson('Jane');
    var jack = person_1.makePerson('jake');
    console.log(jane, jack);
};
testMakePerson();
