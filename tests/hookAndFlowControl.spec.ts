import { test } from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
  })

test.describe('Test suite to navigate in the home', () => {
  test.beforeEach(async({page}) => {
    await page.getByText('Forms').click();
  })

  test('Navigate to Forms Layouts page', async ({ page }) => {
    await page.getByText('Form Layouts').click();
  })

  test('Navigate to Datepicker page', async ({ page }) => {
    await page.getByText('Datepicker').click();
  })
})

// If the method return is Promise, you need to use async/await to avoid issues
// Best practice is clean and get the env ready in the before, since delegate to after can create fleaky tests
// Use skip if you want skip a test/suite or only to test only one test/suite