import { expect } from '@playwright/test';

export class TodoPage {
  constructor(page) {
    this.page = page;
    this.input = page.getByTestId('text-input');
    this.activeLink = page.getByRole('link', { name: 'Active' });
    this.completedLink = page.getByRole('link', { name: 'Completed' });
    this.allLink = page.getByRole('link', { name: 'All' });
    this.clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });
  }

  async goto() {
    await this.page.goto('https://todomvc.com/examples/react/dist/');
  }

  async addTodo(text) {
    await this.input.click();
    await this.input.fill(text);
    await this.input.press('Enter');
  }

  async toggleTodo(name, checked = true) {
    const todo = this.page.getByRole('listitem').filter({ hasText: name });
    const toggle = todo.getByTestId('todo-item-toggle');
    if (checked) {
      await toggle.check();
    } else {
      await toggle.uncheck();
    }
  }

  async filterActive() {
    await this.activeLink.click();
  }

  async filterCompleted() {
    await this.completedLink.click();
  }

  async filterAll() {
    await this.allLink.click();
  }

  async clearCompleted() {
    await this.clearCompletedButton.click();
  }

  async expectTodoVisible(name) {
    await expect(this.page.getByRole('listitem').filter({ hasText: name })).toBeVisible();
  }
}
