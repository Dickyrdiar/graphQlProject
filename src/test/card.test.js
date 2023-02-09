import React from "react";
import { render, cleanup } from "@testing-library/react";
import ProductCard from "../components/ProductList/card";

afterEach(cleanup);

describe("Card", () => {
  it("renders correctly", () => {
    const { asFrgment } = render(<ProductCard name="title" />);
    expect(asFrgment()).toMatchSnapshot();
  });
});
