---
title: After Effects Scripting for Absolute Beginners
description: Welcome to the tutorial after effects scripting for absolute beginners. At the end of the tutorial you will be able to write a script that applies a expressions to all the properties you have selected. But even better you will also have a good understanding of all the different aspects of scripting.
img: ae-scripting-beginners.png
slug: after-effects-absolute-beginners
video: UutXfHp9KDg
tags: ['After Effect', 'ExtendScript']
date: 4 Oct, 2019
---

Welcome to the tutorial after effects scripting for absolute beginners. At the end of the tutorial you will be able to write a script that applies a expressions to all the properties you have selected. But even better you will also have a good understanding of all the different aspects of scripting. I will discuss all the concepts one by one so it will become very clear how each part of the code works. If you want to know a specific thing I’ll put the timestamps for all the things I cover in the description. Let’s Begin!

Scripts for after effects are essentially automated actions that are performed by after effects. So we command after effects by telling it to do different actions. Everything that we normally do with our mouse and keyboard to interact with after effects can also be done with scripting. To command after effects we need to speak it’s language, which unfortunately will not be English but ExtendScript.

ExtendScript is a variation of JavaScript so if you know JavaScript you’ll come a long way. In this tutorial I will assume that you don’t know any JavaScript yet so I’ll start really simple and build from there.

## ExtendScript Toolkit CC

To write and execute the code we will need a code editor, adobe has one that is especially built for ExtendScript. If you want to install it you can go to your CC desktop app and click on: your account icon > preferences > apps and then under settings slide the "show older apps" to true. Then you'll be able to see it in your "all apps" section to download and install it.

There is also a installer avaliable on the [Adobe-CEP](https://github.com/Adobe-CEP/CEP-Resources "https://github.com/Adobe-CEP/CEP-Resources") github. Dowload the repository by clicking on the code button in the top right and then select download ZIP. You can find the installer in the ExtendScript-Toolkit folder.

Open up After Effects and just let in run in the background so we can test our scripts. Select After Effects as your target application in the editor. Now it’s time to write some code!

## Variables

Variables are used to store information to be referenced and manipulated in the code. They also provide a way of labeling data with a descriptive name, so our programs can be read more easily. Think of variables as containers that hold information. Their sole purpose is to label and store data. This data can then be used throughout your program.

```js
	var myVariable = "This is the content";
```

A Resource to get to know variables more in depth: <https://www.w3schools.com/js/js_variables.asp>

## Functions

Functions are blocks of code that perform a perticular task. These functions can be executed when you invoke them. You could compare them to variables but instead of storing data they store actions.

```js
	function myFunction(inputVar) {
		return inputVar + 5;
	}
```

A Resource to get to know functions more in depth: <https://www.w3schools.com/js/js_functions.asp>

## Objects

How do we make After Effects do actual useful things? That is where objects come in. Javascript is a Object oriented language which means that it revolves around using different objects to perform actions.

Javascript objects contain attributes and methods. These are things that we can use to manipulate the program to do certain things. Attributes are things that a object has and methods are actions that the object can do. A circle object could for example have as attributes: color and diameter. A method for a cicle could be for example: `bounce()`{lang="js"} or `transform()`{lang="js"}.

A Resource to get to know JavaScript objects more in depth: <https://www.w3schools.com/js/js_objects.asp>

## Adobe After Effects Object Structure

After Effects is completely devided into objects so we can tell the program how to work. The diagram show the object structure of after effects. Here you can see that the application contains a project and a project contains items. By referencing these items in our code we can manipulate them. A object is referenced by using the name, a lot of objects are connected or contain other objects. You can access these objects by using a dot at the end of the object and writing the name of the object it contains.

![After Effects Object Model](/img/ae-object-model.webp){style="max-width: 100%"}

The documentation of After Effects scripting: <http://docs.aenhancers.com/introduction/overview/>

## Arrays

You can make a array by using brackets and writing the different variables in there seperated by comma’s. Each object in the array has a certain index, the index of array starts at zero and goes up from there. This means that if you have a array with four items the first one has a index of zero the second of one. You can use this index to get values from the array.

Keep in mind that the array starts at zero when trying to access the values in a array. If you want the 4th item you have to use a index of 3. To get the values or objects out of the array type the name of the property or variable, then the index of the item you want within brackets `myArrayVariable[3]`{lang="js"}. This will get the third item of this array.

```js
	function myFunction(inputVar) {
		return inputVar + 5;
	}
```

A Resource to get to know arrays more in depth: <https://www.w3schools.com/js/js_arrays>

## Conditional if/else statements

Conditional statements are used to check certaivn conditions and perform different actions depending on that condition.

```js
	if (time < 10) {
		greeting = "Good morning";
	} else if (time < 20) {
		greeting = "Good day";
	} else {
		greeting = "Good evening";
	}
```
	
Some Resources to get to know Conditions more in depth:
<https://www.w3schools.com/js/js_comparisons>
<https://www.w3schools.com/js/js_if_else>

## Loops

Loops are very handy when you need to repeat a action with a slight variation a couple of times. There are a couple of different types of loops but for now the “for loop” is the only thing you need to know. This is the most commonly used loop in JavaScript and you don’t really need to know the others. Everything can be done with just this for loop.

A Resource to get to know loops more in depth: <https://www.w3schools.com/js/js_loop_for>

## UI Code

The code for the UI that you can copy/paste into your code.

```js
	function expressionPanel(thisObj) {
		var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Expression Script", undefined);
		win.spacing = 5;

		var groupOne = win.add("group", undefined, "GroupTwo");
		groupOne.orientation = "column";
		expressionInput = groupOne.add("edittext", undefined, "loopOut();");
		expressionInput.characters = 25;

		var groupTwo = win.add("group", undefined, "GroupOne");
		groupTwo.orientation = "column";
		applyBtn = groupTwo.add("button", undefined, "Apply");

		applyBtn.onClick = function(){
			addExpression();
		};

		win.onResizing = win.onResize = function() {
			this.layout.resize();
		};

		win instanceof Window
			? (win.center(), win.show()) : (win.layout.layout(true), win.layout.resize());
	}
```