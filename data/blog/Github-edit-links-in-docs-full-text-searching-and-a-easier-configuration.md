---
title: 'Github edit links in docs, full text searching and a easier configuration.'
tags:
- Docula
- Open Source
date: 2016-11-09
featured_image: 'github-edit-links-in-docs-1.png'
---

Thanks so much for the great response and feedback on [Docula](https://docu.la/)! Here are some more fixes and also some enhancements. Now you can add some code to easily let people click on the article and edit it via a pull request in Github.

### Full Text Search Enabled

![](images/github-edit-links-in-docs-2.png)

The fixes are now in place for full text searching so that it will auto index as new documents come available. Just make sure to set it up with the following configuration on AWS or any Elastic Search provider.

### Easier Setup and Configuration

To make it even easier for setup now we will detect a blank elastic search engine and do an initial setup for you on this. Also, we have changed the configuration to have a base for your site and make it much more simple.

### Basic Setup…

To install Docula to your Express-enabled website at path /doc, just use DoculaExpress.install:

```javascript
var express = require('express');
var DoculaExpress = require('docula-ui-express');  

var app = express();

DoculaExpress.install(app, '/doc', {  
  
_// ... options_  
})  
```

Just in case, API will be available at /doc/docapi though you probably shouldn’t worry about it.

Available options are:

- git string or object { origin: “clone URL”, “branch”: “default: master”, “clonePath”: “a folder in local file system where to clone the repo. Default is somewhere in system temp folder.” } — pass git remote URL for where your knowledge base is located
- redis object { host, port, path, password } — connection parameters for Redis
- elasticsearch object { host, port, index, etc … all options passed directly to [elasticsearch](https://www.npmjs.com/package/elasticsearch) } — search server configuration

### CloudFoundry integration support

Both elasticseach and redis options support special form of

```javascript
{  
  redis: {  
    cloudFoundryService: 'docula-redis-service'  
  }  
}  
```

This config would look for environment variables to get connection parameters for CloudFoundry-bound service.

