# Gatsby-JNS Surfboards
A [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered site for JNS Surfboards.  A local shaper of custom boards from the Gold Coast QLD.  

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.   [Stripe Checkout](https://stripe.com/en-au/payments/checkout) is used to faciliate payment collection through the site.  Currently JNS Surfboards utitlizes the client-only integration, whereby products are defined directly in the stripe dashboard and referenced by ID on the client side. This allows easy integration of checkout into the site WITHOUT any server-side code.

## Live Site
https://hopeful-raman-c3c7d5.netlify.app/

Proper content is yet to be uploaded.  'Lorem Ipsum' text is present through out and images reused.

## Features
* Complete Business Website Suite - Home Page, About Page, Gallery, Contact Page, Custom Board Order Page, Search and Payment page.
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Elastic-Lunr Search (NEW)
* Contact and New Board Order Form (Netlify Forms)

## Prerequisite
* Node
* Gatsby CLI (globally installed)


#Using gatsby
A steep learning curve initially, but worth the investment in the end.

### Develop
Runs a server in the background, enabling useful features like hot-reloading development environment (served on `localhost:8000`) and Gatsby’s data explorer [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/).
```shell
gatsby develop
```

### Build
Creates a version of your site with production-ready optimizations like packaging up your site’s config, data, and code, and creating all the static HTML pages that eventually get rehydrated into a React application into a 'Public' folder.  
```shell
gatsby build
```

### Serve
Starts a local HTML server for testing your built site.
```shell
gatsby serve
```


## Deployment

### Option 1: Deployment without connecting to Git.
After Running
```shell
gatsby build
```
Deployment without connecting to Gitto netlify by is as simple as Dragging and Dropping the public folder into Netlify's deployment dashboard.

### Option 2: New Site from Git

You can connect to a repo or even have netlify create a new repo in your Git Hub account. From there just push your changes to GitHub and Netlify will automatically deploy them to their global CDN.


### CMS
Utilised in the site build, but without a full understanding.  Simplifies site updating through Netlify CMS. Identity and Authentication miust be set up [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/).
