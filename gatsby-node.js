const path = require('path');

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   // During develop and build stages, copy admin to public. Do it last.
//   switch (stage) {
//     case 'develop':
//       config.loader('css', {
//         include: /admin/,
//       });
//
//       break;
//
//     case 'build-html':
//       config.loader('css', {
//         include: /admin/,
//       });
//
//       break;
//   }
//
//   return config;
// };

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            layout
            path
            date
            title
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
