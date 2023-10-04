---
title: 'Four Golden Rules of High Availability'
tags:
- Cloud Computing
date: 2015-10-03
---

For over the past decade I have worked in the enterprise building large, high-availability systems. As CTO of a cloud company, one thing that still surprises me is the general lack of industry understanding of what it means to the business and application to have high availability. So I felt inspired to share a few rules for enabling high availability that I follow each time I build a system. But first…

Baseline Setting

Before the rules, let’s set some quick baseline on high availability measurements and how these apply in context of businesses. You have probably heard over and over again providers promising a percentage of uptime for a service such as 99.95% or 99.999%. This is how the majority of service providers and applications show the amount of time in agiven year the service is available and working. Normally this does not include maintenance windows (where they are doing an upgrade of the service), or even things out of their control such as the connection to the service (such as internet).

Here are the standard percentages, amount of service disruption, and some context on each one provided by [Wikipedia: High Availability](http://en.wikipedia.org/wiki/High_availability).

Now that you have a baseline, let’s talk about…

The Golden Rules

1. No Single Point of failure: This is the most common starting point when building a high availability system, but in truth it is _very hard_ to do. Most complex systems need to be able to write back transactional data to a centralized database layer. Even with clustering there are parts that don’t handle partial failure well. A better architecture for high availability is for easy fail over to alternative backup services with the ability to bring it back online and sync data. The application layer needs to be more aware of failure and work to heal itself. Remember, with datacenter facilities there is no such thing as 100% uptime, no matter how good their N+1 configuration. Eventually at some point they willmiss a beat. In the end, leveraging the flexibility and cost structure of the cloud is a better solution than building your own two facilities.
2. Self-healing is Required: When it comes to the application layer, self-healing is one of the hardest thing to do. There are so many possibilities. From my experience half of the things you thought would have issues — and spent a lot of time architecting for — just never happen. While it is always good to add some of the architecture around the standard items such as service and datalayer fail over, in the end as the system/application is rolling out you will start to see what components have the greatest possibility of failure.
3. It will go down so plan on it: No matter how good your team is or how amazing the architecture is, or even if you are _“cloud powered,”_ your application will have disruption in service. When that happens (and it will) what is most important is how fast it can recover. By developing good monitoring tools and ways to quickly diagnose the issues, recovery will be much faster.
4. It is going to cost more: Many times you will hear from the business that their application should “never go down!” The discussion instead should be what downtime is acceptable for the business. Find out what is that number really is and move towards it._ If you do not have the honest discussion with the owner of business owner of the system/application, then you should never build it!_

Is cloud changing this?

You have probably heard that just by moving to the cloud your applications will never go down. That is what happens when marketing gets involved and starts to sell false hope. The real truth is that cloud providers are on the forefront of giving better high availability than you could achieve yourself. Where they can — and where it is cost effective — these providers are building high availability into theirsystems. They offer an SLA (Service Level Agreement) with ramifications (usually financial) if there is service disruption. These SLAs incentive them to build in as much high availability as they can and to quickly respond to any service disruptions. That level of SLA is very hard to achieve and carry out inside a larger enterprise IT shop, and almost impossible for a mid-size business to do themselves.

_But.. but… Netflix did it on a provider that doesn’t have a great SLA!_

Yes and when you are the size of Netflix with hundreds of engineers working on your service offering, then you can do the same. If the provider does not have a good SLA then you need to walk in with eyes wide open to the reality that the availability will be handled only by your application. In most cases this will be _more costly_ than picking a good provider. Why? Developers are expensive. On the other hand, working with a cloud provider that delivers a strong SLA and high availability in the underpinning infrastructure should _reduce the overall cost _dramatically over doing it all at the application layer.

What is very unique about the cloud today is for the first time there are providers focusing only on making your application work better and providing instant access to resources. All of this flexibility and all of these best practices delivered as a service offering. Cloud is enabling the business to easily architect for high availability. Cloud providers can provide multiple data center locations to deploy your application across multiple regions which is _WAY _cheaper than building two of your own data centers forhigh availability. They are also moving more difficult items “as a service” for built in high availability — such as database as a service where it will setup replication and fail over for you.

The next big thing to watch with cloud providers is “platform as a service” or PaaS. This technology can instantly deploy your application across multiple datacenters with a few clicks of the mouse. PaaS is in its young adult stages but is gaining rapid adoption. These innovations are the key reason you should use the cloud as they are focusing on making HA easy inherently while you focus on your application/business.

In Short…

- Will the cloud have outages? Yes
- Will the cloud have less downtime? For the most part, Yes.
- Is Cloud going to be cheaper than doing it internally? Yes.
- Should I use the cloud for my application? Unless there is a compliance reason, Yes.
- Will the cloud be more innovative at enabling and automating the infrastructure layer for my application? _Loaded question,_ but I have to say Yes as that is what cloud providers focus on.

Conclusion

Let’s be honest: The biggest problem with high availability is setting the right expectations with the business/consumer and being transparent on the reality of what they should expect. Today many people consuming these systems/services are told that “no matter what the cloud makes so your application_NEVER_ goes down.” Not true. While it does help a lot, you can achieve better availability with the right SLA and application, cloud marketing has failed by setting false expectations.

The cloud is getting better every day and is focused on providing a better environment with high availability, but… things will go down. By remaining transparent on your goals of availability and following the golden rules with the cloud and your application, high availability is not only achievable and cost effective, but also easier to achieve than ever.

...

