---
title: 'Introducing Docula!'
tags:
- Docula
- Open Source
date: 2019-03-07
featured_image: 'introducing-docula-1.png'
---

No trick, just a treat! One of the big things that I love is the idea of making documentation (when needed) more of a community effort. In the past I have been in companies that seem to always rely on “customer support” or even specialized “tech writers” to do the documentation.

![](images/introducing-docula-2.jpeg)

In my last role we really worked to remove that barrier and allow anybody to contribute but found the tools in place for documentation to be painful. It was usually a very stringent system that required some training or expertise to run. It came with a bunch of approval processes that nobody could remember or follow. Most of all it didn’t allow somebody to just quickly edit and go live.

Today I am changing that with the release of [Docula](https://docu.la/). This documentation system allows you to use Github as your core documentation hub so that versioning, pull requests, and all the goodness that is built into this process now works for documentation.

Once you edit an article your instance of [Docula](https://docu.la/) can be notified to refresh and will pull the file and changes, index them into search, and make it live. To make it even cooler it also supports the [Open API](https://www.openapis.org/) standard from [Swagger](http://www.swagger.io/) and makes a very nice UI:

![](images/introducing-docula-3.png)


It supports Google Analytics via configuration and also Disqus as seen below:

![](images/introducing-docula-4.png)


## How to Get Started

In your node.js project go ahead and install Docula’s Express module from NPM:

```javascript
npm install docula-ui-express
```

### Configure Docula Core (Included in Docula Express)

First, you should configure Docula’s core docula object. See [Core Configuration](https://docu.la/kb/kb/Configuration/core.md) for reference and available parameters.

```javascript
var Docula = require('docula-core');  
var DoculaExpress = require('docula-ui-express');
```

### Configure API

Assuming you have your express app defined in variable app, it’s just a one-liner to install Docula’s API endpoints to a certain path within your application:

```javascript
var DoculaExpress = require('docula-ui-express')

app.use('/docula-api-base', DoculaExpress.api(docula));
```

DoculaExpress.api has no special parameters, and returns Express [Router](https://expressjs.com/en/4x/api.html#router)object.

### Configure UI

UI configuration is similar to API, except that UI now has a few more parameters for tuning different aspects of supported features.

```javascript
app.use('/knowledge-base', DoculaExpress.ui({  
  apiBase: '/docula-api-base'  
}); 
```

Have a spooktacular time! Check out the web site [https://docu.la](https://docu.la/) for more info

