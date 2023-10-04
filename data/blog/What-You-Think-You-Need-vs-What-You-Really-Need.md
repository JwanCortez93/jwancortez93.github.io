---
title: 'What You Think You Need vs. What You Really Need'
tags:
- Cloud Computing
date: 2015-10-03
---

Every business wants to keep costs down and save money, right? Choosing a dynamic environment gives you a way to do just that by ensuring you only buy what you really need…and use.

Most people tell you to only allocate what you need, but of course the theoretical is always easier than the practice. We’re going to help you make sense of this notion, so you can put the theory into practice to cut your costs.

First a little background about where we’ve been before we talk about where we are now.

Over the past 10 to 15 years, engineers have based decisions on business requirements that predicted growth, meaning they’ve been building environments for what might be, not for what is. Typically, engineers have built for three years out, because that’s about how long you’d keep a physical piece of hardware in production. The engineer thinks he or she has to keep those servers up and running for at least the next three years, based on growth projected out of the entire system. So even if all a business really needed was a couple of web servers and a database backend, the engineer would have scaled those web servers out to be multiple processors, with multiple gigs of RAM, and a lot of storage space.

What you’d end up with is an environment that’s much more than you currently needed…and all the costs and risks that go along with it. And in the end, it might be that none of that capacity was needed at all.

This mindset still exists, and engineers still build environments this way, but cloud computing is starting to change how people think. And as soon as people start changing their mindsets, they’ll start building more flexible, scalable and cost-effective environments!

With cloud computing, instead of setting up something for the next three years, you ask yourself, “What do we need now and what will we scale to in the future?”

With cloud computing, you don’t have to worry about planning ahead. Even if you do experience that optimistic growth, you can scale up down the road for less money than if you bought all the hardware upfront. If the opposite happens and you need to scale down, you can do that too. There’s no risk in cloud computing. You can easily scale down and remove servers and services.

With cloud computing, you only allocate what you really need right now. Need more? That’s easy. You can add processors and processes within minutes, in the course of a reboot. Compare that to the other way, where it can take days or even weeks to allocate something. With cloud computing, you can add resources on the fly to enable what you need when you need it. On the flip side, you can also do bursts. Say you need to add resources for a big campaign for two weeks. You can. And then you can drop them back down. And save the company a lot of money.

Here’s how cloud computing works for you to enable you to have only what you need when you need it: Underneath the covers, there are many servers. And your VM guest is sitting on top of it. Even though you say you’re allocating one processor and two Gigs of RAM, that’s what you’re going to get allocated out of a beefier server that’s sitting underneath this physical piece of hardware. So when you need that, it’s already there because the cloud computing provider has already allocated that performance and will enable you to do it.

Many cloud computing providers also let you edit the configuration which is a huge benefit. People with SQL Server, Active Directory or Dynamics from Microsoft, for example, are not going to want to change their server out because they probably spent a lot of money getting it configured exactly how they want it.

The other question to ask is, what are you actually using? Many people don’t know and they often have multiple servers that aren’t even using all of the required CPU that they actually have. To look at the load, do a performance chart that has the total cpu, memory, and storage read and writes. Set it up, run it for 48 hours or a week or a month, and then see what the highs and lows are. Configure it for what you need in the cloud computing environment. I can’t stress this enough: You should only allocate what you need when you need it.

Of course you want some buffer. We recommend about 30%, or if you bump through a processor, add a second processor, so you’re not hitting the top threshold. But most of the time processors are really fast, especially in the hypervisor environment. All of the CPU offload is going to the CPU processor.

The other issue is memory. Memory is usually the biggest killer and applications are very heavy on memory these days. Memory should match what you’re currently doing. The worst thing you could ever do is swap the disc. It’s also the slowest possible thing you can do on a VM. Never, ever swap! The more memory you allocate, the better it’s going to be.

In the end, this new mindset is about saving your business’ money, not spending it, by helping you allocate only what you really need right now. That’s cloud computing.