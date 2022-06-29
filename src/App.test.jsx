import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../test-utils";
import App from "./App";

describe("App component tests", () => {
  it("input should be initialized empty", () => {
    render(<App />);
    const emailInputElement = screen.getByRole("textbox");
    const passwordInputElement = screen.getByLabelText("Password");
    const confirmPasswordInputElement =
      screen.getByLabelText(/confirm password/i);

    expect(emailInputElement.value).toBe("");
    expect(passwordInputElement.value).toBe("");
    expect(confirmPasswordInputElement.value).toBe("");
  });

  it("should be able to type an email", async () => {
    const email = userEvent.setup();
    render(<App />);

    const emailInputElement = screen.getByRole("textbox", { name: /email/i });
    await email.type(emailInputElement, "test@test.com");
    expect(emailInputElement.value).toBe("test@test.com");
  });

  it("should be able to type a password", async () => {
    const password = userEvent.setup();
    render(<App />);

    const passwordInputElement = screen.getByLabelText("Password");
    await password.type(passwordInputElement, "secret");
    expect(passwordInputElement.value).toBe("secret");
  });

  it("should be able to type a confirm password", async () => {
    const confirmPassword = userEvent.setup();
    render(<App />);

    const confirmPasswordInputElement =
      screen.getByLabelText(/confirm password/i);
    await confirmPassword.type(confirmPasswordInputElement, "secret");
    expect(confirmPasswordInputElement.value).toBe("secret");
  });
});
