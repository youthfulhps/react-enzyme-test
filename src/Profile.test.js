import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="youthfulhps" name="유병호" />);
    expect(wrapper).toMatchSnapshot();
  });
});

//스냅샷 테스트, 랜더링된 결과가 이전에 랜더링 되었던 결과와 일치하는 지 확인 작업

//mount, 리액트 컴포넌트를 랜더링해준다.
//랜더링 결과로 가져온 wrapper를 통해 props, DOM, state 조회 가능

//스냅샷 테스팅을 진행하면, _snapshots 폴더에 결과물이 생성된다.
//컴포넌트를 수정하여 랜더링하면, 테스트 실패가 발생, U 를 콘솔창에 입력하면
//가장 최근의 랜더링 결과물을 새롭게 저장한다.
