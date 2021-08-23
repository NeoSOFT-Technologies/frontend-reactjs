import { render } from "@test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Main />);

        expect(component).toBeTruthy();
    });

    it("renders texts successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("superplate");
        getByText(
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        );
    });

    it("renders button successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("Docs");
    });
});
