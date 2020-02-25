import React, { Component } from "react";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { UnconnectedPhoneCard } from "./phoneCard";

Enzyme.configure({ adapter: new Adapter() });

const phone = {
  id: 0,
  name: "iPhone 7",
  manufacturer: "Apple",
  description:
    "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
  color: "black",
  price: 769,
  imageFileName: "IPhone_7.png",
  screen: "4,7 inch IPS",
  processor: "A10 Fusion",
  ram: 2
};

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = { phone, message: "phones ready", ready: true };
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<UnconnectedPhoneCard {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("Shallow rendered PhoneCard", () => {
  const { enzymeWrapper, props } = shallowSetup();
  it("should render a Card of the correct phone", () => {
    // Setup wrapper and assign props.
    // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector.
    expect(enzymeWrapper.find("h2").text()).toBe(props.phone.name);
  });
  it("with all the information from the phone in a list", () => {
    const liTexts = [
      `Fabricante: ${props.phone.manufacturer}`,
      `Color: ${props.phone.color}`,
      `${props.phone.description}`,
      `Precio: ${props.phone.price}`,
      `Tipo de pantalla: ${props.phone.screen}`,
      `Cantidad de RAM: ${props.phone.ram}`
    ];

    const liNodes = enzymeWrapper.find("ul li").map(li => li);
    liNodes.forEach((node, idx) => expect(node.text()).toBe(liTexts[idx]));
  });
  it("with the right source", () => {
    console.log(enzymeWrapper.find("h2").getElement(0));
  });
});

// expect(enzymeWrapper.find("button.ui.basic.red.button").text()).toBe("Delete");
// // enzymeWrapper.containsMatchingElement(node i.e reactElement) : Check if the provided React element matches one element in the render tree. Returns a boolean.
// expect(enzymeWrapper.containsMatchingElement(<button>Delete</button>)).toBe(true);
// test("-----------------TEST1-----------", () => {
//   const component = renderer.create(
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
//   let tree = component.toJSON();
//   console.log(test);
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // tree.props.onMouseLeave();
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
// });
