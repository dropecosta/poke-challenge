import React from "react";
import Enzyme, { shallow } from "enzyme";
import Cards from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Cards", () => {
    test("Must render component Cards", () => {
      const wrapper = shallow(<Cards />);
      expect(wrapper.exists()).toBe(true);
    });
    
});