import React from "react";
import Helmet from "react-helmet";
import { decodeHTML } from "../particles/helper";

const Seo = ({ data }) => {
  //console.log(data); 
  if (!data) return null
  const {opengraphUrl} = data;
  const {
    opengraphType,
    metaDesc,
    opengraphImage,
    opengraphTitle,
    title,
    twitterDescription,
    twitterImage,
    twitterTitle,
  } = data

  const postURL = `/`

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: process.env.GATSBY_SITE_URL,
      name: decodeHTML(opengraphTitle) || decodeHTML(title),
      alternateName: "ninjaMahabub",
    },
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name:  decodeHTML(opengraphTitle) || decodeHTML(title),
            image: opengraphImage?.sourceUrl || null,
          },
        },
      ],
    },
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url: process.env.GATSBY_SITE_URL,
      name: decodeHTML(opengraphTitle) || decodeHTML(title),
      alternateName: "ninjaMahabub",
      headline: decodeHTML(opengraphTitle) || decodeHTML(title),
      image: {
        "@type": "ImageObject",
        url: opengraphImage?.sourceUrl || null,
      },
      description: metaDesc,
    },
  ]

  return (
    <Helmet>
      {/* General tags */}
      <title>
        { decodeHTML(opengraphTitle) || decodeHTML(title)}
      </title>
      <meta name="description" content={metaDesc} />
      <meta name="image" content={opengraphImage?.sourceUrl || null} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={`${process.env.GATSBY_SITE_URL}${opengraphUrl}`}
      />
      {opengraphType ? <meta property="og:type" content={opengraphType} /> : null}
      <meta
        property="og:title"
        content={ decodeHTML(opengraphTitle) || decodeHTML(title) }
      />
      <meta property="og:description" content={ metaDesc || ""} />
      <meta
        property="og:image"
        content={opengraphImage?.sourceUrl || null}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`${process.env.GATSBY_SITE_URL}${opengraphUrl}`}
      />
      <meta name="twitter:creator" content={"whatjackhasmade"} />
      <meta
        name="twitter:title"
        content={ twitterTitle ||  decodeHTML(opengraphTitle) || decodeHTML(title) }
      />
      <meta
        name="twitter:description"
        content={ twitterDescription || metaDesc || "" }
      />
      <meta
        name="twitter:image"
        content={ twitterImage?.sourceUrl || opengraphImage?.sourceUrl || null
        }
      />
    </Helmet>
  )
}

export default Seo