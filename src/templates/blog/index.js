import React from "react";
//import { Link } from "gatsby" 
import Layout from "../../components/layout";
import Blog from './blog-list/blog';

const BlogTemplate = ({ pageContext }) => {
	//console.log(pageContext);
	return (
		<Layout seo={pageContext?.post?.wpPage}>
			<Blog pageContext={ pageContext } />
		</Layout>
	)
}
export default BlogTemplate