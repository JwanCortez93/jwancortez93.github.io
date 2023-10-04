---
title: 'It’s the Polish that Makes Something Special'
tags:
- Startup
- Entrepreneurship
date: 2015-10-03
---

When you look at applications today it is very easy to tell which ones have the “polish” — and because of that, are exceptional. Many times it is just the simple way of taking a complex three step workflow to one or no steps at all.

At [Tier 3](http://www.tier3.com/) one of the simple examples of adding polish was adding a “Maintenance Mode” button for virtual machines and groups. This feature was built to help simplify the maintenance mode process that a administrator has done many times in the past.

When a system administrator needs to do patching, updating, or just needs to put a system in maintenance mode they usually do the following steps during this time:

1. Notify their operational team letting them know the server is going out of rotation.
2. Logging the event to an internal system for tracking.
3. Pause all monitoring for that server so that it doesn’t do false alarms.
4. If it is in a load balanced rotation pull it out of rotation and drain the sessions if possible.
5. Perform tasks that need to happen on the system.
6. Turn on monitoring to verify everything is good with the system.
7. If it is load balanced put it back into rotation if everything was good with monitoring.
8. Log that it is not completed with maintenance
9. Notify the operations team letting them know it is back into rotation.

Now these steps on average for each server probably do not seem to take a lot of time but if you do the averages that we have seen across our platform it is about 15 minutes not including step number 5. Now enters the “Maintenance Mode” feature (available via API and a button):

1. Enter Maintenance Mode: The system will do steps 1–4 for you including notify the NOC team, pausing monitoring, and checks if it is in load balanced rotation.
2. Perform tasks that need to happen on the system.
3. Remove Maintenance Mode: The system will do steps 6–9 with enabling monitoring and verifying that everything is ok, moving it back into rotation, logging the system as coming out of maintenance mode, and notifying the operations team.

This is a great example of a simple feature that eliminates 6 steps and about 13 minutes per server. Here are the savings for operational teams just handling patch Tuesday on their systems:

- Small (about 8 servers): ~ 21 hours saved
- Medium (about 65 servers): ~168 hours saved
- Large (about 300 servers): ~840 hours saved

_(Note: savings based on annual usage)_

My grandfather was a constant perfectionist and always believed that if something had to be done then it should be be done as good or better than the last time. This constant perfection is an accelerator for “polish” to happen when the process is constantly refined. Many times in dealing with software and the enterprise we often forget about the polish that has to happen to make it not just better than what they were using before but exceptional. [Amazon](http://www.amazon.com/) made it easy to shop online with tools that understand you as the customer and a very fast checkout process. [37 Signals](http://www.37signals.com/) has paved the way with keeping web applications simple and streamlining processes that really dont need to exist. Last but not least, [Apple](http://www.apple.com/) provided exceptional polish by keeping their products simple and very easy to use. Always remember … the first 90% can make you successful but the last 10% will make you exceptional.


