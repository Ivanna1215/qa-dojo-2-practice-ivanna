import { Page } from "@playwright/test";
function FilterPage(page: Page) {
  return {
    async enterFilterValue(ruleNumber: number, value: string) {
      const ruleLocatorXPath = this.line_rule_CSS.nth(ruleNumber);
      const rule_input_field = ruleLocatorXPath.locator(this.field_input_1st);
      const rule_text_area = ruleLocatorXPath.locator(this.text_area);
      const rule_days_field = ruleLocatorXPath.locator(this.field_daysDefault);
      if (await rule_input_field.isVisible()) {
        await this.useInputField(rule_input_field, value);
      }
      if (await rule_text_area.isVisible()) {
        await this.useInputField(rule_text_area, value);
      }
      if (await rule_days_field.isVisible()) {
        await this.useInputField(rule_days_field, value);
      }
      await this.sleep(2000); // remove after fixing trouble with unstable UI
    },
  };
}
