import { graphql, useStaticQuery } from "gatsby"
export const useSiteFooterData = () => {
  const { allWpElementorTempplate } = useStaticQuery(
    graphql`
      query FooterData {
        allWpElementorTempplate {
          nodes {
            slug
            elementorData
          }
        }
      }
    `
  )
  return allWpElementorTempplate
}
