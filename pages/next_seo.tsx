import React from "react";
import { NextSeo } from "next-seo";

import { Header, Footer } from "@components";
import { NextSeoDesc } from "@components/examples/next-seo-desc";

const Page: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100 ">
            <NextSeo
                title="Next SEO Description"
                defaultTitle="Next SEO Description"
                description="Custom Page to depict implementation of NextSEO"
                additionalMetaTags={[
                    {
                        property: "title",
                        content: "Next SEO Description",
                    },
                    {
                        property: "keywords",
                        content:
                            "ReactJS, NextJS, Bootstrap, Redux, SCSS, Axios, SVGR, Jest, react-testing-library",
                    },
                    {
                        httpEquiv: "x-ua-compatible",
                        content: "IE=edge; chrome=1",
                    },
                ]}
            />
            <Header />
            <NextSeoDesc />
            <Footer />
        </div>
    );
};

export default Page;
