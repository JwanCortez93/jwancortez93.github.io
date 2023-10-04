---
title: 'Page Titles, Path Remix, API Hotness, and Your Own Logo. Oh My!'
tags:
- Open Source
- Docula
date: 2016-12-01
featured_image: 'page-titles-path-remix-api-hotness-and-your-own-logo-oh-my-1.png'
---

Big updates to [Docula](https://docu.la/) over the last couple weeks and it is about time we got it all written down for everybody. Lets get started…

##### Make your API documentation look amazing!

We have added a side navigation and also better design to the rendering engine that takes a standard OpenAPI spec document and makes it into something beautiful. Go see for yourself:

- API Spec for Docula: [https://github.com/jaredwray/docula-kb/blob/master/Configuration/api.json](https://github.com/jaredwray/docula-kb/blob/master/Configuration/api.json)
- API Spec Rendered: [https://docu.la/docs/api-spec/Configuration/api](https://docu.la/docs/api-spec/Configuration/api)

##### Defaulting to Readme.md

Since [Docula](https://docu.la/) is based on Github repositories we decided that it would be better to remove the idea of using index.md to what is used in Github. Now just use the default readme.md file at the root of your documentation repo and we pull it in as your default view for [Docula](https://docu.la/).

##### Default Paths

We received some great feed back on the paths of the application that could conflict or not make any sense so we decided to clean it up to make more sense:

- /article: This is where all of your articles will be shown via this path.
- /api: The API is now listed here always instead of `/docula/api/v1`
- /api-spec: This is where all [OpenAPI](http://www.openapis.org/) spec documents are rendered for now on.

As always you can set your base path for [Docula](https://docu.la/) in the initial config of your app like so:

```javascript
DoculaExpress.install(app, ‘/docs’, {…});
```

##### Page Titles

We have added page titles based on your articles meta data 

```title: "title goes here”``` in your repository. This now is rendered on the page like so:

![](images/page-titles-path-remix-api-hotness-and-your-own-logo-oh-my.png)

On top of that in the config you now need to place a `pageTitle` parameter to have it show the root page title such as `Docula` shown above.

##### Your own Logo!

You can now show your own logo instead of the [Docula](https://docu.la/) default logo. On your initial configuration add a parameter called `logo` and the path to where the logo is located on the web (remember to include the full path).
