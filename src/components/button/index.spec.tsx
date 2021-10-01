import { fireEvent, render } from "@test";

import { Button } from "./index";

describe("Button component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Button onClick={() => undefined} />);

        expect(component).toBeTruthy();
    });

    it("button is clickable", () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<Button onClick={mockFn} />);

        const btn = getByTestId("btn");
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("should click a large button", () => {
        props.size = "large";

        const component = mount(<Button {...props}>Send</Button>);
        simulate(component, { type: "click" });

        expect(component, "to have class", "clicked");
    });

    it("should render with a custom text", () => {
        expect(<Button>Send</Button>, "when mounted", "to have text", "Send");
    });

    it("show log on click", () => {
        const app = shallow(<App />);
        const spy = jest.spyOn(app.instance(), "showlog");
        app.instance().forceUpdate();
        app.find("button").simulate("click");
        expect(spy).toHaveBeenCalled();
    });

    it("show log on mouse over", () => {
        const app = shallow(<App />);
        const spy = jest.spyOn(app.instance(), "showlog");
        app.instance().forceUpdate();
        app.find("button").simulate("mouseover");
        expect(spy).toHaveBeenCalled();
    });

    it("show log on mouse leave", () => {
        const app = shallow(<App />);
        const spy = jest.spyOn(app.instance(), "showlog");
        app.instance().forceUpdate();
        app.find("button").simulate("mouseleave");
        expect(spy).toHaveBeenCalled();
    });
});
