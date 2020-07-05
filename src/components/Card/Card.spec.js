import React from "react";
import Enzyme, { shallow } from "enzyme";
import Card from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Card", () => {
    test("Must render component Card", () => {
      const wrapper = shallow(<Card />);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper).toMatchSnapshot();
    });

    test("Must find button HTML element in the DOM", () => {
      const wrapper = shallow(<Card />);
      const button = wrapper.find('button');
      expect(button).toHaveLength(1);
    });

});