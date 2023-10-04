---
title: 'My Greatest Successes Have All Come From Small Failures'
tags:
- Startup
- Entrepreneurship
date: 2015-10-03
---

My father-in-law recently sent me an article from the NY Times ([http://nyti.ms/nLBqp4](http://nyti.ms/nLBqp4)) asking the question “What if the Secret to Success Is Failure?.” This really hits home on many fronts as I was somebody that did not take the path most taken. I never went to college and even though I don’t have regrets, I do see the value in a higher education. By simply marking a success in my life and then back tracking how it was achieved every time I say small failures that really became the stepping stones to create that success.

Back in 2000 a company I worked for was running a very large web environment which served millions of images. The company negotiated a deal with Yahoo! (one of the internet greats at the time) to have them serve those images from their portal as a new feature. Everybody was jazzed about this but the day we went live it was an utter disaster. So much of a disaster that we had to urgently call the engineers at Yahoo and ask them to please turn it off asap. From there we began debugging what was going on and why this traffic was killing our web application. After some digging in to a legacy system we found out that the developers decided it would be ___REALLY___ cool to stick all images into the blob column of the database. Then we also found out that they were trying to be even more cool and removed the static images on the web servers and setup a 404 redirect handler that would pull the image from the database ___EVERY TIME___.

In the end all we had to do is get it back to static image paths and then we were able to get the site live with Yahoo. What is amazing about this are the failures and learning points that the company had when this happened:

- The operation team started to work more closely with the development team on how to architect for large scale and performance. We even started to really get the QA team on board with stress testing each item.
- The development team started giving even more detail on the changes they were making and working with QA and Operations on what the new features do and how they architected it.
- The business development people started to really plan for load on the system and would get operations involved ahead of time with what they are working on and how it would technically work.

Most important in this is that we all adjusted our systems and made a better system for handling scale by __learning__ from this failure.

Even now to this day the experience that all of us have come from small stumbling failures that amount to how we strive to create a better process / application / or even way of life. We sometimes don’t even realize it but as you seek to create excellence in something failure will/must happen.

