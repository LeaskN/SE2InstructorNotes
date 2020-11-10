### What is HTML?
  * Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.
  * Note: Markup languages refer to the page layout and how elements lay within the page.

### How does it relate to the internet?
  * HTML is the accepted standard markup language of the internet 
  * It ensures the proper formatting of text and images for your Internet browser. 

### How does it relate to the "web development stack"
  * Its the structure or bones. Ultimately it needs to exist even if it has been replaced by React, Angular, Vue, etc..

### How does it relate to JavaScript?
  * html tags create objects; JavaScript lets you manipulate those objects
  * JavaScript is what animates HTML and it’s what brings your website to life.

### What are the parts of HTML?
  * HTML Decleration, Head, & Body. Within the Head and Body we have:
  * Elements, which contain Tags & Attributes

### What are HTML Elements?
  * Elements are the features of a website. They have a wide range which can be from paragraphs, to links, to iframes, images, and more. 

### What are HTML Tags?
  * Tags are the syntax of an html element
    * this is an opening tag: <>
    * this is a closing tag: </>
      * example:
        * <p>This viewable text</p>
    * this is a self closing tag: <img href="https://static.pokemonpets.com/images/monsters-images-800-800/58-Growlithe.png" />

### What are some commonly used HTML elements?
  * html: <html></html>
  * head: <head></head>
  * body: <body></body>
  * h1 to h6: <h1>Text</h1>, <h2>Text</h2> ...
  * paragraph: <p>Text</p>
  * break: <br></br> OR <br/>
  * horizontal rule: <hr></hr> <hr/>
  * anchor tags: <a href="https://google.com">Text<a>
  * ordered list: <ol><li></li></ol>
  * unordered list: <ul><li></li></ul>
  * list item: <li></li> (usually inside ol or ul)
  * bold: <b></b> or <strong></strong>

### What are HTML attributes?
  * Data used to control an element's behavior. 
  * Example: <p style="color:red">This is text</p>

### What is the DOM?
  * The Document Object Model
  * API, application programming interface for HTML
  * With the Document Object Model, programmers can build documents, navigate their structure, and add, modify, or delete elements and content.
  * https://www.w3.org/TR/DOM-Level-2-Core/introduction.html

### What is a node?
  * A node is any object that exists in the DOM.
  * This includes the document, the window, and HTML elements.

### What is an element?
  * An element is a type of node that can be specified in HTML with an HTML tag

### In short what is the difference between a node an an element?
  * All elements are nodes, not all nodes are elements
  * https://medium.com/@issabmsangare/nodes-vs-elements-in-the-dom-1865885d0b9b#:~:text=An%20element%20is%20a%20specific,are%20one%20type%20of%20node.