import { render } from "@test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Main />);

        expect(component).toBeTruthy();
    });

    it("renders texts successfuly", () => {
        const { getByText } = render(<Main />);

        expect(getByText("superplate")).toBeDefined();
        expect(
            getByText("The frontend boilerplate with superpowers!"),
        ).toBeDefined();
    });

    it("renders button successfuly", () => {
        const { getByText } = render(<Main />);

        expect(getByText("Docs")).toBeDefined();
    });
});
