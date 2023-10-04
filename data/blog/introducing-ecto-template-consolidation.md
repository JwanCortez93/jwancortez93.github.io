---
title: 'Introducing Ecto - A modern template consolidation javascript library for EJS, Handlebars, Markdown, Pug, and more!'
tags:
- Ecto
- Open Source
- Coding
date: 2021-03-17
featured_image: 'ecto_logo.png'
---

## What is Ecto?

Template engines have long been used to simplify code and to use static template files in an application. With template engines, you can easily feed data into variables and compile them into HTML. 

**Ecto** is a modern template consolidation engine that works with top template engines like EJS, Markdown, Pug, Nunjucks, Mustache, Handlebars, and Liquid. It consolidates all these template engines to a single library, allowing you to use any of these with ease. With capabilities like Automatic Engine Selection, easy-to-use API, zero-configuration needs, and regular updates, you can rest assured that Ecto works as expected for all your templating needs.


## What are the top template engines used?

There are a huge number of template engines being created every day, and most of them are all over the place. Some of these engines have limited type definitions and are not maintained making them unpopular. On drilling down further, we found that the following engines are the most popular ones which handle a vast majority of cases. 


<table>
  <tr>
   <td><strong>Engine</strong>
   </td>
   <td><strong>Downloads</strong>
   </td>
  </tr>
  <tr>
   <td>EJS
   </td>
   <td>Approximately 36M times /month
   </td>
  </tr>
  <tr>
   <td>Markdown
   </td>
   <td>Approximately 18M times/month
   </td>
  </tr>
  <tr>
   <td>Pug
   </td>
   <td>Approximately 5M times/month
   </td>
  </tr>
  <tr>
   <td>Nunjucks
   </td>
   <td>Approximately 1.3M times/month
   </td>
  </tr>
  <tr>
   <td>Mustache
   </td>
   <td>Approximately 8.5M times/month
   </td>
  </tr>
  <tr>
   <td>Handlebars
   </td>
   <td>Approximately 313K times/month
   </td>
  </tr>
  <tr>
   <td>Liquid
   </td>
   <td>Approximately 302K times/month
   </td>
  </tr>
</table>


There is a good reason why these template engines are this popular. It is because these engines have supported packages, are updated regularly, and are easy to validate. Needless to state, these are the most used engines and the only ones that matter.


## How does Ecto compare with _Consolidate.js_?

The template engine consolidation library _Consolidate.js_ has also been around for quite some time. However, some issues with it make it unsuitable for most cases.

For one, _Consolidate.js_ is not scalable. It requires you to load packages with the same key name according to the order number. For example, consolidate uses dust engines in the order _dust_ > _dustjs-helpers_ > _dustjs-linkedin_. So, if _dustjs-helpers_ is installed, _ConsolidateJs_ does not use _dustjs-linkedin_. 

Additionally, a lot of its packages are unmaintained (_dust_), have security issues (_eco_), have been deprecated (_jqtpl_), or will not add new features (_liquid_), making it unreliable, to say the least.

Ecto on the other hand promises monthly upgrades and is highly maintained. This is because it focuses on the top engines, thus reducing the risk of being unmaintained or deprecated. It is flexible, easy to use, and selects engines automatically, thus reducing the need to select an engine every time it is to be used.

Ecto not only supports the top template engines but also allows support for multiple engines at the same time. 

```javascript
let ecto = require("ecto").create();
let handlebarsOutput = await ecto.renderFromFile("./handlebars-example.hbs");
let markdownOutput = await ect.renderFromFile("./markdown-example.md");
```

## How to use Ecto?

Getting started with Ecto is easy. Ecto has two major easy-to-use APIs. The API uses the main Ecto class and has two functions _render_ and _renderFromFile_. All commands are written in TypeScript.

**render(async)** has the following parameters:

*   **source:string** – the markup/template source that you want to render
*   **data?:object** – data to be rendered
*   **engineName?:string** – used to override the _Ecto.defaultEngine_ parameter.
*   **rootTemplatePath?:string** – used for _partials _and _layouts_
*   **filePathOutput?:string** -  the path where you want to write the rendered output 

**renderFromFile (async) **renders from a file path by auto-selecting the engine based on the extension of the file. It returns a Promise&lt;string> of the output. It has the following parameters:

*   **filePath?:string** – the file you want to render
*   **data?:object** – data that you want to render
*   **rootTemplatePath?:string** – used for _partials _and _layouts_
*   **filePathOutput?:string** – the path where you want to write the rendered output
*   **engineName?:string** – used to override the _Ecto.defaultEngine_ parameter

## Getting Started

### 1. Add Ecto to your project using the command:

```javascript
yarn add ecto
```


### 2. Initialize Ecto and set your default engine using the command:

```javascript
Const Ecto = require ("ecto");
Let ecto= new Ecto(defaultEngine: "Nunjucks");
```


### 3. Render your engine to Ecto. You can do so by either using render from string or render from a file.

**Render from String**


You can render your template engine from string easily using the _render_ function:


```javascript
let source = "<h1>Hello <%= firstName%> <%= lastName %>!</h1>";
let data = {firstName: "Jane", lastName: "Doe"};
let output = await ecto.render(source, data);

    console.log(output);
```

If your current engine is not the default engine (i.e. Nunjucks in this case), you can simply set the defaultEngine parameter again, or pass the engine name as a string from the render function. You can also pass partial files of your standard engines (markdown excluded) using this function. To write an output file using the function, you can specify the _filePathOutput_ parameter. Refer to the Ecto readme file for examples.


**Render from File**


You can render the template engine via a template file using the _renderFromFile _function. It selects the correct engine automatically from the given file extension.


```javascript
let ecto = new Ecto();
let data = { firstName: "Jane", lastName: "Doe"};

let output = await ecto.renderFromFile("./path/to/template.md", data);
```

To write an output file using the function, you can specify the filePathOutput parameter. Additionally, you can override the auto-selected engine, and render the template using the overridden engine, by passing the engine name as a parameter. Refer to the Ecto readme file for examples.

---

[Now that it is established that Ecto is easy, scalable, and here to stay, download and start using it today!](https://github.com/jaredwray/ecto)