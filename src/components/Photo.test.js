import React from "react";
import { shallow } from "enzyme";

import Photo from "./Photo";
import { findByTestAttr } from "../test/testUtils";

describe("<Photo />", () => {
    const photoUrl = "https://via.placeholder.com/600/92c952";

    it("should render without crashing", () => {
        const wrapper = shallow(<Photo photoUrl={photoUrl} />);
        const component = findByTestAttr(wrapper, "photo-component");
        expect(component.length).toBe(1);
    });
});
