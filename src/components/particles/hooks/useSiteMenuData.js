import { graphql, useStaticQuery } from "gatsby"
export const useSiteMenuData = () => {
  const { allWpMenu } = useStaticQuery(
    graphql`
      query MenuData {
        allWpMenu {
          nodes {
            id
            name
            slug
            menuItems {
              nodes {
                id
                label
                url
                parentId
                cssClasses
                fontAwecome {
                  fontawesomeClass
                }
              }
            }
          }
        }
      }
    `
  )
  return allWpMenu
}
