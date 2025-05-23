import App from "./App";

import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders without crashing", async () => {
    render(<App />);

    expect(
      await screen.findByRole("heading", {
        name: "Welcome to Upgrade challenge",
        level: 1,
      })
    );

    expect(await screen.findByRole("button")).toBeDisabled();
  });
});
