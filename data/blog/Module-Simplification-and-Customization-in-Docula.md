---
title: 'Module Simplification and Customization in Docula!'
tags:
- Docula
- Open Source
date: 2017-02-08
featured_image: 'module-simplification-1.png'
---

Let the Simplification Begin! We have moved from three modules to now only two. [docula-core](https://www.npmjs.com/package/docula-core): The core module with all the logic. (what makes docula tick & tock!).[docula-ui](https://www.npmjs.com/package/docula-ui): the web interface that you can customize using React and Express. The reason for this is to a) simplify the current development of this project (one less module to maintain), and b) there has been only two use cases:

1) Developers using the core module and then building their interface.   
2) Developers using the core and web interface altogether (most popular)  

### Adding a Customized Header

Now you can easily create and include your customized header by just adding to the config the string of the HTML page you would like to use.

### In memory caching by default

Redis is the core caching that is used in [Docula](https://docu.la/) but is also a pain when there is no Redis available or doing local development. Now, all caching will be in memory by default!

While this is great for local development and small installs, we still recommend that when you have multiple instances of [Docula](https://docu.la/) running to configure Redis.
