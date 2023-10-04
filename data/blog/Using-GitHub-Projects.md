---
title: 'Using GitHub Projects'
tags:
- Productivity
- Github
date: 2019-01-24
featured_image: 'github-projects-1.png'
---

The [Fons](https://fons.io/) team decided to use [GitHub Projects](https://github.com/blog/2272-introducing-projects-for-organizations) to organize and prioritize its work — and I just wanted to share some of our experiences with you.

To give you some background, Fons is an application that enables independent music teachers, tutors, coaches, and others to run their business easily. They can schedule lessons and bill clients directly. It gets rid of all that time-consuming admin.

Our team is small, but we are starting to add more people as Fons scales up. At the moment, we have more than five services running in the backend, and about a dozen or so repositories making up our application.

We started doing our Kanban / Agile process using [Trello](https://trello.com/) and then tried out [Waffle](https://waffle.io/). Then, we landed on [Github Projects](https://github.com/blog/2272-introducing-projects-for-organizations) when it came out. The experience has been a mixed bag of (mostly) good, (some) bad and (a lot) of lessons learned.

## The Good

#1 A Single Source of Truth  
GitHub Issues sits at the card’s core — and that’s one of the primary reasons we love it so much.

We can centralize all the bugs and features into a single location and, once checked, we can mark the card as closed. Simple.

#2 Multiple Repos / Issues to a Single Project  
This feature was introduced right on the heel of our initial release — and it was a big deal for us.

Because we are doing micro-services, many EPIC features live across multiple projects. Now, we can track the entire thing in a single view. It is also really nice that you can have an issue live on various project boards.

#3 App Sprawl  
Removing an app from the equation was such an elegant and simple benefit to us.

There was no need to have another browser window open on another site, and everybody already had a GitHub account.

## The Bad

#1 Browsing the Details of a Card / Issue  
Getting to the details of a card or issue is really cumbersome. When you click the card’s link it takes you off the board and into the issue section.

This makes a user go from the board to the issue and then back. It is just an all-round bad experience. It would be much better if it let you view the details instantly from the board.

#2 Simple Agile Metrics  
There is no way to set the cost of a card or issue, which makes it very hard to estimate as a team.

Another feature that would be great to see is a “Burndown” chart. It’s used everywhere and needs to be added to help us monitor how the Sprint is going on a day-to-day basis.

#3 UX Needs a Little Love  
There are a couple of things that need a little love on the UX side. First, when you enter information into a card and then try to select it — sometimes it just doesn’t work.

Second, as you move cards around you can see a delay or lag. You can even lose the positioning. It just needs the sort of polish you see with other boards, such as [Trello](https://trello.com/).

Last, the character limits on the card needs extended. When you start off with a note, you usually just want to paste in what you already have and then convert it into an issue later, adding the description and any other information.

#4 Project URL  
My final pet peeve is the URL. I do not like that they use a number to define the URL.

Many of us have auto-complete on our browsers and when you start typing a URL to see what’s there you end up with projects coming up as “/projects/1”, “/projects/2”, “/projects/3” and so on. You have no context and can’t figure out which one you want.

## Lessons Learned

We enjoy using GitHub Projects and have changed the way we do things to optimize our experience. Here are some of our simple tips and tricks:

#1 Cards vs. Issues  
We found that it is always good to start creating a card as a note first, and then clicking the down arrow to create it as an issue. It’s much faster to do it on the board instead of creating an issue and then adding it to the board. In some cases, we keep them as cards until we start working on them.

#2 One Master Board  
If you are a small team, I would highly suggest working with a single board. At the outset, we thought about splitting it up but, in the end, making a single board that has everything on it was the easiest option. If you have multiple boards, you are constantly going to each board to check the status of a single release.

The boards concept could be really amazing when you have multiple teams as, while each one could have their own “master project” board, the product/project owners could have a master board tracking the release of each issue.

#3 Kanban Style  
Simple Kanban style is the way to go as it’s agonizing to hack in estimates, it doesn’t really work. We experimented with tagging for estimates, but it was a real pain. So, in the end, we know that we are a small team and we know what we can get done, so we’ve left that feature out for now.
