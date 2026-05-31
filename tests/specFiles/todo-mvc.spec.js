import { test } from '@playwright/test';
import { TodoPage } from '../pageObjects/todoPage.js';

test('todo mvc page object test', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('walk');
  await todoPage.addTodo('drink water');
  await todoPage.addTodo('running ');
  await todoPage.addTodo('playing ');
  await todoPage.addTodo('dancing ');
  await todoPage.addTodo('eating');

  await todoPage.toggleTodo('walk');
  await todoPage.toggleTodo('playing ');
  await todoPage.toggleTodo('running ');
  await todoPage.toggleTodo('running ', false);

  await todoPage.filterActive();
  await todoPage.filterCompleted();
  await todoPage.filterAll();
  await todoPage.clearCompleted();

  await todoPage.expectTodoVisible('drink water');
});
