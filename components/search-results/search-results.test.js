import React from "react";
import { shallow } from "enzyme";
import SearchResults from "./search-results";

describe("SearchResults", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper).toMatchSnapshot();
  });
});
