const { test, expect } = require('@playwright/test');

test('Verify leading and trailing spaces are handled correctly', async ({ page }) => {

    // Open application
    await page.goto('https://demoqa.com/text-box');

    // Navigate to Profile/Edit page
    // Add your actual navigation steps here
    // Verify that leading and trailing spaces are handled correctly

    // Locate the field
    const profileField = page.locator('#userName');

    // Enter data with leading and trailing spaces
    await profileField.fill('   TestUser   ');

    // Click Save
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify application trimmed the spaces
    await expect(profileField).toHaveValue('TestUser');
});