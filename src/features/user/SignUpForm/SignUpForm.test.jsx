import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignUpForm from "./SignUpForm";
import { renderWithRouter } from "../../../test/utils";

describe("SignUpForm", () => {
  it("renders initial step page", async () => {
    renderWithRouter(<SignUpForm />, { route: "/" });

    expect(
      await screen.findByRole("heading", {
        name: /SignUp/,
        level: 2,
      })
    ).toBeVisible();
  });

  describe("Navigation", () => {
    describe("Next button", () => {
      it("navigates from User details to More info", async () => {
        renderWithRouter(<SignUpForm />, {
          route: "/",
        });

        expect(
          await screen.findByRole("heading", {
            name: /SignUp/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole("button", {
            name: /Next/,
          })
        );

        expect(
          await screen.findByRole("heading", {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();
      });

      it("navigates from More info to Confirmation", async () => {
        renderWithRouter(<SignUpForm />, {
          route: "/more-info",
        });

        expect(
          await screen.findByRole("heading", {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole("button", {
            name: /Next/,
          })
        );

        expect(
          await screen.findByRole("heading", {
            name: /Confirmation/,
            level: 2,
          })
        ).toBeVisible();
      });
    });

    describe("Back button", () => {
      it("navigates from Confirmation to More info", async () => {
        renderWithRouter(<SignUpForm />, {
          route: "/confirmation",
        });

        expect(
          await screen.findByRole("heading", {
            name: /Confirmation/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole("button", {
            name: /Back/,
          })
        );

        expect(
          await screen.findByRole("heading", {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();
      });

      it("navigates from More info to User details", async () => {
        renderWithRouter(<SignUpForm />, {
          route: "/more-info",
        });

        expect(
          await screen.findByRole("heading", {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole("button", {
            name: /Back/,
          })
        );

        expect(
          await screen.findByRole("heading", {
            name: /SignUp/,
            level: 2,
          })
        ).toBeVisible();
      });
    });
  });
});
