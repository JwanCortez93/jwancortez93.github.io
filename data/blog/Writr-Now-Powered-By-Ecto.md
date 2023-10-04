---
title: 'Writr now powered by Ecto!!!'
tags:
- Ecto
- Open Source
- Writr
date: 2021-05-04
featured_image: 'writr-logo.png'
---

[Writr](https://github.com/jaredwray/writr) is a simple-to-use blogging system that until now only supported Handlebars. After its integration with [Ecto](https://github.com/jaredwray/ecto), we now support all the popular template engines such as  EJS, Nunjucks, Pug, Markdown, and Mustache.

Here's an example of how Writr works with EJS.

**Install Writr using the following command:**

*npm install -g writr*

The blog directory comprises of the following files:
```
blog/*.md               	// for your markdown files
blog/images            	//for the blog images
blog/config.json      	// for configuration of the blog
blog/templates       	//template directory which allows you to select the desired template engine
```

**Every instance of Writr requires three template files** to be placed inside the/blog/templates directory. The three template files are:

·  	Index – the main template that lists the index of the latest blogs you want to add

·  	Post – the post that you want to publish

·  	Tag – to show articles by tag filtering

To use Writr with EJS, you should include index.ejs, post.ejs, and tag.ejs files under your blog/templates file.

**Here is an example of the index.ejs file:**

```
<% posts.forEach(function(post) { %>
<p><a href="<%= post.url %>"><%= post.title %> - <%= post.author %></a></p>
 <% }); %> 

<p>Tags: <br />

<ul>
        <% tags.forEach(function(tag) { %>
        <li><a href="<%= tag.id %>"><%= tag.name %></a></li>
         <% }); %> 
    </ul>
</p>
```

**Here is an example of the index.ejs file:**

```
<h1>Post 3</h1>

<p><%= post.title %></p>

<p><%=post.author %></p>

<p><%- post.body %></p>

<p><%= post.matter.featured_image %></p>
```

**Here is an example of the tag.ejs file:**

```
<p>Tag: <%= tag.name %><br /></p>

<ul>
    <% tag.posts.forEach(function(post) { %>
    <li><%= post.title %> - <%= post.author %></li>
    <% }); %> 
</ul>
```

**Enter your desired .md files in the *blog* folder and your images in the *images* folder.**

Your final directory structure will look like this:

- templates
    - index.ejs
    - tag.ejs
    - post.ejs
- config.json
- images
- _ blog post 1.md_
- _ blog post 2.md_

**Run the command writr --path ./blog** to build the output of the files. The outputs are available in the **./blog_output** folder.

Creating a blog with your desired template in Writr is easy. With support for several template engines, it is now even easier to create simple and elegant blogs. 