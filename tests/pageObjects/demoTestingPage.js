export class DemoTestingPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.addressInput = page.locator('#textarea');
    this.phoneInput = page.getByPlaceholder('Enter Phone');
    this.femaleRadio = page.locator('#female');
    this.mondayCheckbox = page.locator('#monday');
    this.countrySelect = page.locator('#country');
    this.colorsSelect = page.locator('#colors');
    this.animalsSelect = page.locator('#animals');
    this.datepicker = page.locator('#datepicker');
    this.submitButton = page.getByRole('button', { name: 'Submit' }).first();
  }

  async goto() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async fillContactForm({ name, email, address, phone, gender, weekday, country, color, animal, date }) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.addressInput.fill(address);
    await this.phoneInput.fill(phone);
    if (gender === 'female') {
      await this.femaleRadio.check();
    }
    if (weekday === 'monday') {
      await this.mondayCheckbox.check();
    }
    await this.countrySelect.selectOption({ label: country });
    await this.colorsSelect.selectOption(color);
    await this.animalsSelect.selectOption(animal);
    await this.datepicker.fill(date);
  }

  async submit() {
    await this.submitButton.click();
  }
}
