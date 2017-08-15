# Gatsby + Netlify CMS Boilerplate

## Adding Netlify CMS to Gatsby Project
- Go to the admin directory
```
cd public/admin/config.yml
```
- Edit Line 3
```
repo: [YOUR_USERNAME]/[YOUR_REPO] # Path to your Github repository
```
- Follow these instructions ([Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/)) for a custom setup.

## To Dos
- [ ] Use Webpack to copy admin directory so it isn't necessary to commit the entire public directory.
- [ ] Setup the Netlify CMS to save/edit content as markdown files in the pages directory
- [ ] Use GraphQL queries to build pages based off markdown pages with frontmatter
- [ ] Save frontmatter values as strings
- [ ] Model content correctly
