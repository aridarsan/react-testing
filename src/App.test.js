import App from "./App";
import { mount } from "enzyme";

describe("Counter App Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render title apps", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with text of `Plus`", () => {
    expect(wrapper.find(".btn-plus").text()).toBe("Plus");
  });

  test("render a button with text of `Minus`", () => {
    expect(wrapper.find(".btn-minus").text()).toBe("Minus");
  });

  test("render the initial value of `counter` state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("simulate `Plus` button", () => {
    wrapper.find(".btn-plus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find(".btn-plus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("2");
  });

  test("simulate `Minus` button", () => {
    // simulasikan button plus di klik
    wrapper.find(".btn-plus").simulate("click");
    // ekspektasinya, nilai counter == 1
    expect(wrapper.find("#counter-value").text()).toBe("1");

    // simulasikan button plus di klik
    wrapper.find(".btn-plus").simulate("click");
    // ekspektasinya, nilai counter == 2
    expect(wrapper.find("#counter-value").text()).toBe("2");

    // simulasikan button minus di klik
    wrapper.find(".btn-minus").simulate("click");
    // ekspektasinya, nilai counter == 1
    expect(wrapper.find("#counter-value").text()).toBe("1");

    // simulasikan button minus di klik
    wrapper.find(".btn-minus").simulate("click");
    // ekspektasinya, nilai counter == 0
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("value counter can not less than 0", () => {
    wrapper.find(".btn-minus").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});