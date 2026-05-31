import { test, expect } from "@playwright/test";

test("test demo ToDo @sanity", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/dist/");
  await page.getByTestId("text-input").click();
  await page.getByTestId("text-input").fill("buy food items");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").fill("go for walk");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").fill("eat on time ");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").fill("read book");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").fill("drink water");
  await page.getByTestId("text-input").press("Enter");
  await page
    .getByRole("listitem")
    .filter({ hasText: "buy food items" })
    .getByTestId("todo-item-toggle")
    .check();
  await page
    .getByRole("listitem")
    .filter({ hasText: "eat on time" })
    .getByTestId("todo-item-toggle")
    .check();
  await page
    .getByRole("listitem")
    .filter({ hasText: "read book" })
    .getByTestId("todo-item-toggle")
    .check();
  await page.getByRole("link", { name: "Active" }).click();
  await page.getByRole("link", { name: "Completed" }).click();
  await page.goto("https://todomvc.com/examples/react/dist/#/");
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "eat on time" })
      .getByTestId("todo-item-toggle"),
  ).toBeVisible();
  await page.getByText("read book").click();
  await expect(page.getByTestId("todo-list")).toContainText("read book");
});
