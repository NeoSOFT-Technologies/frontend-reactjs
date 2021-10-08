import React from "react";

export const NextSeoDesc: React.FC = () => {
    return (
        <p style={{ margin: "50px 30%" }}>
            <b>NextSeo</b> works by including it on pages where you would like
            SEO attributes to be added. Once included on the page you pass it a
            configuration object with the page's SEO properties. This can be
            dynamically generated at a page level or in some cases your API may
            return an SEO object.
        </p>
    );
};
