---
title: 'Keyv Now with Etcd'
tags:
- Keyv
- Open Source
date: 2022-02-23
featured_image: 'keyv-etcd.png'
---

We’re excited to announce that keyv now fully supports etcd. This is an exciting development for anyone who uses etcd in their current tech stack.


## What is keyv?

keyv is a simple key-value storage system with support for multiple backend adapters (MySQL, PostgreSQL, SQLite, Redis, Mongo, DynamoDB, Firestore, Memcached, and more). 

keyv continues to be popular and has been used by over 2 million different packages and libraries. There also continues to be a high number of monthly downloads, almost 70 million a month.

keyv uses a familiar  Map-like API complete with set, get, delete, and clear methods. This API is Promise-based, meaning these methods return Promises that resolve with the data instead of immediately returning data.

keyv supports TTL-based expiry, making it suitable as a cache or a persistent key-value store. This made support for etcd possible.


## What is etcd?

[Red Hat](https://www.redhat.com/en/topics/containers/what-is-etcd) provides an excellent definition for etcd:

“etcd (pronounced et-see-dee) is an open-source, distributed, and consistent key-value store for shared configuration, service discovery, and scheduler coordination of distributed systems or clusters of machines. etcd helps to facilitate safer automatic updates, coordinates work being scheduled to hosts, and assists in the set up of overlay networking for containers. etcd is a core component of many other projects”. 

You may have encountered etcd without even realizing it. etcd is the primary datastore of Kubernetes.  Like all distributed workloads, containerized workloads bring can be difficult to manage, and this difficulty only increases as the workload scales. Kubernetes simplifies the process of managing these workloads by coordinating tasks such as configuration, deployment, service discovery, load balancing, job scheduling, and health monitoring across all clusters, which can run on multiple machines in multiple locations.

In order to achieve this, Kubernetes needs a data store that provides a single, consistent source of the truth about the status of the system. It needs access information on all of the clusters and pods and the application instances within them at any given point in time. etcd is the data store used to create and maintain this version of the truth.


## Using keyv with etcd

You can have etcd set up to work alongside keyv in a few lines of code.

First, make sure you have keyv installed:


```javascript
npm install --save keyv
```


Next, Install the storage adapter:


```javascript
npm install --save @keyv/etcd
```


Then, create a new Keyv instance, passing your connection string if applicable. keyv will automatically load the correct storage adapter.


```javascript
const Keyv = require('keyv');
const keyv = new Keyv('etcd://localhost:2379');
```


Finally, set up error handling:


```javascript
keyv.on('error', handleConnectionError);
```

## Summary

We’re proud to say that etcd is one of the official storage adapters supported by keyv that are covered by over 150 integration tests to guarantee consistent behavior. These official storage adapters are lightweight, efficient wrappers over the DB clients making use of indexes and native TTLs where available.

With etcd being fully supported by keyv, we’re excited to see how developers are going to make use of this new feature.