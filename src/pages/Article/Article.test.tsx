import * as React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Article from "./Article";

describe("<Article />", () => {
  test("Component should receive params", () => {
    const numberParam = "01";
    render(
      <MemoryRouter initialEntries={[`/article/${numberParam}`]}>
        <Article />
      </MemoryRouter>
    );
  });
});
