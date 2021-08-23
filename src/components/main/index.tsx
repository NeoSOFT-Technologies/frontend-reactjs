import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div
            className="text-center py-4"
            style={{ backgroundColor: "#282c34" }}
        >
            <Container>
                <h1 className="display-2 text-white">superplate</h1>
                <p className="lead text-white">
                    The frontend boilerplate with superpowers!
                </p>
                <Button
                    variant="primary"
                    size="lg"
                    href="https://pankod.github.io/superplate/"
                    target="_blank"
                >
                    Docs
                </Button>
            </Container>
        </div>
    );
};
