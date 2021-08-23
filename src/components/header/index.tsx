import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <div
            className="text-center"
            style={{ backgroundColor: "#20232a" }}
            data-testid="container"
        >
            <Logo />
        </div>
    );
};
