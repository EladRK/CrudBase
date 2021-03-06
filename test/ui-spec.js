'use strict';
const chai = require('chai');
const expect = chai.expect;

describe('admin ui', () => {
  it('should add a todo', function() {
    if (!browser) {
      console.warn('(!) Protractor not found. Skipping UI tests.');
      return;
    }
        
    browser.get('http://localhost:6100/admin.html');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});