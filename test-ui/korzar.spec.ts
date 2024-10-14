import { expect } from "@playwright/test";
import { test } from "./coverage_wrapper";

test("Verify clickability of the korzar button", async ({ page }) => {
    await page.goto("https://editor.p5js.org/");

    const button = page.locator('#play-sketch');

    await expect(button).toBeVisible();

    await expect(button).toBeEnabled();

    await button.click({ timeout: 9000 }); 
});

test("verify help text existence", async ({ page }) => {
    await page.goto("https://editor.p5js.org/");

    const helpSpan = page.locator('span:has-text("Help")');

    await expect(helpSpan).toBeVisible();
});

test("verify checkbox - unchecked, visible, clickable", async ({ page }) => {
    await page.goto("https://editor.p5js.org/");

    const checkbox = page.locator('#autorefresh');

    await expect(checkbox).toBeVisible();

    expect(await checkbox.isChecked()).toBe(false);

    expect(await checkbox.isEnabled()).toBe(true);
});

test("verify console text", async ({ page }) => {
    await page.goto("https://editor.p5js.org/");

    const console = page.locator('h2.preview-console__header-title');

    await expect(console).toBeVisible();

    await expect(console).toHaveText('Console');
});

