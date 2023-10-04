---
title: 'The Cost of High Availability'
tags:
- Cloud Computing
- DevOps
date: 2021-06-23
featured_image: 'high-availability.jpg'
---

99.99% availability, also known as four nines availability, requires a system to only have 52.60 minutes of downtime per year, which corresponds to 4.38 minutes of downtime per month. It is the most achievable and optimal availability model for most systems. 

When cloud computing entered the market, 99.99% availability cost a lot of money. Obtaining 99.9% availability could cost  thousands per month, with 99.99% availability usually costing tens of thousands per month. The magnitude of cost when it came to 99.999% availability was around a whopping 100k per month!

Achieving  99.99% availability several years ago required the following items:



*   A DNS Anycast with Load Balancing with a minimum price of $3k per month.
*   Data centers or cloud service providers with multiple instances, with a minimum price of $10-20k per month.
*   A scalable, database layer with active/passive configurations. If replication was required, there was a need to purchase an enterprise license which incurred additional costs. This totaled to a minimum cost of $30k per year or $2.5k/month.
*   A full-time, fully dedicated team to handle the entire infrastructure and ensure that the system remains scalable. 

Needless to say, achieving high availability was both time consuming and expensive, costing approximately  $25k/month and requiring a dedicated team to handle the entire infrastructure. 

With the advent and increased popularity of cloud computing and the increasing need to make cloud environments more scalable, the costs of having high availability systems has dramatically decreased. What would previously cost around $25k/month, now costs less than $1.2k/month.


## Low cost cloud computing setup

Here is how you can achieve 99.99% availability for less than $1.2k per month:



*   **Cloud Flare**: Cloud flare offers cost-effective load balancing. You can also use it for CDN and firewall, and this entire offering will cost you just $250 per month.
*   **Dual region AWS (EKS or Beanstalk) or Google Cloud (Cloud Run)**: Both dual region AWS or Google Cloud are your best  bets for storing data in the cloud.
*   **MongoDB Atlas Global Cluster**: Mongo Atlas Global Cluster is a scalable database layer that won't break the bank

<table border="1">
  <tr>
   <td>
<strong>Service vs Size of Organization</strong>
   </td>
   <td><strong>Small</strong>
   </td>
   <td><strong>Medium</strong>
   </td>
   <td><strong>Large</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Cloudflare</strong>
   </td>
   <td>Pro + Load Balancing ~ $30/Month
   </td>
   <td>$250 + LoadBalancing
<p>
~ $300/Month
   </td>
   <td>Enterprise (Call)
<p>
Depends on size and requirements
   </td>
  </tr>
  <tr>
   <td><strong>Cloud Run or EKS</strong>
   </td>
   <td>~ $70/Month
   </td>
   <td>~ $200/Month
   </td>
   <td>~ $1000/Month
   </td>
  </tr>
  <tr>
   <td><strong>MongoDB Atlas</strong>
   </td>
   <td>~ $75/Month
   </td>
   <td>M3 Multi-Region
<p>
~ $800/Month 
   </td>
   <td>~ $3000/Month
   </td>
  </tr>
</table>


If you are a medium-sized organization, you can achieve 99.99% availability with less than $1.2k per month. With the current cloud computing offerings and tools in the market, you should be able to achieve 99.99% availability for a relatively low cost. This should increase customer satisfaction and retention, and enable the continual growth of your business. 
