import test from "playwright/test";

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test('Locator syntax rules', async({page}) => {
  // By tag name - just be careful, you need to indicate which input you want manipulate
  // If there's anything before the name, it's indicating a tag
  page.locator('input');

  // By id
  // If you put the #, you are indicating an id
  page.locator('#inputEmail1');

  // By class value
  // If you put a dot, you are indictaing a class
  page.locator('.shape-rectangle');

  // By attribute
  // To locate any html attribute, you use [] and put the value inside
  page.locator('[placeholder="Email"]');

  // By entire class value
  // Similar to attribute, but you send the whole class value
  page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

  // Combine different selectors
  // You can stack elements, no space between
  page.locator('input[placeholder="Email"][nbinput]');

  // By xpath (not recommended)
  page.locator('//*[@id="inputEmail1"]');

  // By partial text match
  page.locator(':text("Using")');

  // By exact text match
  page.locator(':text-is("Using the grid")');

  // Playwright will do anything with a web element when we trigger an action with the element
  // await page.locator('#inputEmail1'); // Also, using await with an locator only is not necessary, since it returns a Locator type instead of a Promise type
  // await page.locator('input').click(); // An error message will be trigger, since there's 20 input elements on the screen and it's not able to click, you need to define which one you want
  await page.locator('input').first().click();
})