import { graphql, useStaticQuery } from 'gatsby';

export const useSiteInfo = () => {
    const { wp } = useStaticQuery(
        graphql`
            query HEADERINFO {
                wp {
                    getHeader {
                        siteLogoUrl
                        siteTagLine
                        siteTitle
                        favicon
                    }
                }
            }
        `
    );
    return wp.getHeader;
};
