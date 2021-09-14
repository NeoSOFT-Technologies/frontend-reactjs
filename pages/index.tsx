import React from "react";

import { Header, Main, Footer, Cards } from "@components";
import Counter from "@components/examples/counter";

const Home: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100 ">
            <Header />
            <Counter />
            <Footer />
        </div>
    );
};

export default Home;
