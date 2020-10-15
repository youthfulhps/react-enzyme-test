import React from "react";
import { mount } from "enzyme";
import HookCounter from "./HookCounter";

describe("<HookCounter />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("increase", () => {
    const wrapper = mount(<HookCounter />);

    let plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    plusButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("2");
  });

  it("decrease", () => {
    const wrapper = mount(<HookCounter />);

    let minusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );

    minusButton.simulate("click");
    minusButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("-2");
  });
});

//hook 컴포넌트의 테스트를 할 때는 mount를 사용해야 한다.
//findWhere, 조건에 맞는 태그를 찾을 수 있다.
//simulate, 버튼 이벤트의 시뮬레이션을 할 수 있다.
