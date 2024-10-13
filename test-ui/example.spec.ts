import { expect } from "@playwright/test";
import { test } from "./coverage_wrapper";

test("find-watman", async ({ page }) => {  
  await page.goto("/");
  await expect(page.getByAltText("This is watman")).toBeInViewport();
});

// test("site-a visibility", async ({ page }) => {  
//   await page.goto("/site-a.html");
//   await expect(page.getByTestId('settings-icon')).toBeInViewport();
// });

test("test a,b visibility", async ({ page }) => { 
  await page.goto("/");
  await expect(page.locator(".menu-site-a")).toBeVisible();
  await expect(page.locator(".menu-site-b")).toBeVisible();
});