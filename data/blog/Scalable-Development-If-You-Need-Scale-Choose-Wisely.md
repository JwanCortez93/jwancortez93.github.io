---
title: 'Scalable Development… If You Need Scale Choose Wisely.'
tags:
- Cloud Computing
date: 2015-10-03
---

I see many different applications at [Tier 3](http://www.tier3.com/) from our customers and how they plan on scaling it in the cloud. This usually becomes a debate about what site is running what application and then another debate about how that site really does not know what they are doing. Here the base examples that I would submit for review…

- Twitter: From Ruby on Rails to Java — The Gory Details: [youtube]http://www.youtube.com/watch?v=ohHdZXnsNi8[/youtube]
- Facebook trapped in MySQL ‘fate worse than death’:[http://gigaom.com/cloud/facebook-trapped-in-mysql-fate-worse-than-death](http://gigaom.com/cloud/facebook-trapped-in-mysql-fate-worse-than-death)
- @spolsky: Digg: 200MM page views, 500 servers. Stack Overflow: 60MM page views, 5 servers. What am I missing?:[https://twitter.com/#!/spolsky/status/27244766467](https://twitter.com/#!/spolsky/status/27244766467)

This really isn’t about what language you think is best overall or how another language sucks. This is really about planning your application and architecture to scale in your environment. The examples above talk about some of the largest social media sites out there that really founded the Web 2.0 era. These companies scale to millions of requests per second and have the growth issues that every company would ___kill___ to have. With each of these you can see a common theme that is going on where they first build the application and then scale. I agree with this as a new application you really have no idea what you are going to need until after your first launch.

With any application you should also know what the requirements are for uptime and performance. If you are a web application that is needing to processing millions of transactions you might want to think about the development platform you use as with Twitter they are now moving to a more scalable platform that shows a massive (10x or more) performance improvement just in output with less processor. With Facebook being ___trapped___ really is how they look at what their needs are because Facebook is a one in a million tech company who has requirements far above most companies. If you had to scale to the size of these companies would you really be able to do any better? With great success comes great problems…
