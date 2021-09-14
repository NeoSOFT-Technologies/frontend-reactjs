import React from "react";

import { Header, Footer } from "@components";
import useLocalStorage from "src/hooks/useLocalStorage";

const About: React.FC = () => {
    const [value, setValue] = useLocalStorage("name", "aatish");
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <h1>Set Name to store in Local Storage</h1>
            <div>
                <label>
                    Name:{" "}
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={value}
                        onChange={(e) =>
                            typeof window !== "undefined" &&
                            setValue(e.target.value)
                        }
                    />
                </label>
            </div>
            <Footer />
        </div>
    );
};

export default About;
