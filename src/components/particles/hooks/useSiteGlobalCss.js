import { graphql, useStaticQuery } from 'gatsby';

export const useSiteGlobalCss = () => {
    const { wp } = useStaticQuery(
        graphql`
            query globalCssData {
                wp {
                    globalCSS
                }
            }
        `
    );
    return wp.globalCSS;
};
