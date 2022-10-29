const {nameMatch} = require("../modules/nameMatch");

test('Not to be null', () => {
    expect(nameMatch("first string","second string")).not.toBeNull();
    expect(nameMatch("same string","same string")).not.toBeNull();
})

test('Not to be undefined', () => {
    expect(nameMatch("first string","second string")).not.toBeUndefined();
    expect(nameMatch("same string","same string")).not.toBeUndefined();
})

test('True', () => {
    expect(nameMatch("same string","same string")).toBeTruthy();
})

test('False', () => {
    expect(nameMatch("first string","second string")).toBeFalsy();
})



