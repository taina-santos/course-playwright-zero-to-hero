import { test } from '@playwright/test'
import { describe } from 'node:test';

describe('Test suite to navigate in the home', () => {
  test.beforeEach(async({page}) => {
    await page.goto('https://automationintesting.online/');
  })

  test('Click in Book Now', async ({ page }) => {
    await page.getByText('Book Now', {exact : true}).click();
  })

  test('Click in Check Availability', async ({ page }) => {await page.goto('https://automationintesting.online/');
    await page.getByText('Check Availability', {exact : true}).click();
  })
})

test('Click in menu option Rooms', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.locator('#navbarNav').getByRole('link', { name: 'Rooms' }).click();
})

// If the method return is Promise, you need to use async/await to avoid issues
// Best practice is clean and get the env ready in the before, since delegate to after can create fleaky tests
// Use skip if you want skip a test/suite or only to test only one test/suite