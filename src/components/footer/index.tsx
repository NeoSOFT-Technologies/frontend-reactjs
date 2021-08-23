import React from "react";

import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from "@components/icons";

export const Footer: React.FC = () => {
    return (
        <div
            className="text-center py-4"
            style={{ backgroundColor: "#282c34" }}
        >
            <a
                href="https://github.com/pankod"
                target="_blank"
                className="d-block mb-3"
                data-testid="pankod-logo"
            >
                <PankodIcon color="white" width="140" height="28" />
            </a>

            <ul
                className="d-flex justify-content-center list-unstyled p-0 m-0"
                data-testid="icons-container"
            >
                <li className="mx-2">
                    <GithubIcon color="white" width="28" height="29" />
                </li>
                <li className="mx-2">
                    <TwitterIcon color="white" width="28" height="28" />
                </li>
                <li className="mx-2">
                    <YoutubeIcon color="white" width="28" height="29" />
                </li>
                <li className="mx-2">
                    <LinkedinIcon color="white" width="28" height="32" />
                </li>
            </ul>
        </div>
    );
};
