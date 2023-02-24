---
title: Dockable Scripts with ScriptUI and ExtendScript
description: Learn ScriptUI and ExtendScript and Create Dockable Scripts for After Effects.
img: posts/dockable-scripts-scriptui-extendscript/thumbnail-borderless.png
video: WJ0afngYwF0
tags: ['ScriptUI', 'ExtendScript']
date: 2022-10-29
---

Welcome today we're going to take a deep dive into Adobe's ScriptUI so you will be able to make your own dock-able panels in most of the Adobe programs. This is a follow up of the :homelink{to="/blog/after-effects-absolute-beginners/" text="After Effects Scripting for Absolute Beginners"} tutorial.

For this particular tutorial I'll will be working with After Effects but the ScriptUI programming applies almost the whole Adobe suite. I'll be using Visual Studio Code to create the script because not everybody can use the Extendscript Toolkit nowadays because of compatibility issues. If you want to know how to set that up check out my other tutorial called: :homelink{to="/blog/visual-studio-code-adobe-extendscript" text="Visual Studio Code for Adobe ExtendScript"}

What is ScriptUI? Well UI stands for User Interface so it's a module within the Adobe library that you can use to create your own panels for your scripts. Like I said in my last tutorial, most programming languages contain objects that you can manipulate. ScriptUI also consists of a lot of objects. To create a new UI you need to make a new Window object. After you have your window object you can add different control objects like text inputs, buttons, dropdowns, groups, tabs and radio buttons and much more.

## Creating a window

But before I continue telling you all this theoretical stuff let's start coding. So to create a panel simply type:

```js
	var win = new Window("palette", "Expression Library", undefined);
```

We generate a new window by creating a new 'Window' object and passing in some parameters, first the type of window that can be either 'dialog' or 'palette'. If you want your window to be dock-able like the other panels in after effects you should use 'palette'. If you want to have a popup which the user needs to use only once you can use a 'dialog'. When a dialog window is open the user cannot use the program until it is dismissed.

After we create a window we can add UI elements to it like buttons etc. As a example I'll just add a button and a text input. To get into more detail watch the video at the top of the page or read all the details about ScriptUI in the resources linked at the bottom of this article.

## Adding a UI element

To add a textbox to the window we just created you can just call on the window object, in this case I put in a 'win' variable. Then use the dot notation (a '.' after the variable name) to call the add function like this:

```js
	var expressionInput = win.add("edittext", undefined, "loopOut();");
```

The first parameter we pass into this function is the type of UI element we want. Here we want a textbox so that is called 'edittext'. There are many more types like `statictext`, `group`, `button`, `dropdownlist` and many more. The next parameter is the bounds of the element, for now we will let the parent decide the bounds of how big the element can get. Just put it on `undefined` to give the function a empty value. Then we need to input what we want to prefill into the textbox. I just want a standard `loopOut();` expression to be inserted. You can also input a empty string value like this `""`

## Changing a UI element

If we put this edit text straight in our window like this it's going to be awfully small. Not nice to work with. To make it a bit bigger we can set some properties of this UI object. We use the dot notation again here but this time not to call a function but to set a variable of the object.

```js
	expressionInput.characters = 25;
```

Now the input will be 25 characters wide, some more space to work with.

## Handling Button Clicks

Now lets add a button to our window too like this.

```js
	var applyBtn = win.add('button', undefined, 'Apply');
```

To have the program do a action when we press the button we can set a callback function. In essence it means call this function if this event is fired. We can set the `onClick` callback on a button as follows:

```js
	applyBtn.onClick = funtion () {
		applyExpression(expressionInput.text);
	}
```

Within this function we can call or change things in our program that we want to happen when the user presses the button. In this case apply the expression that we have in our textbox.

## Resources

This is as far as I'm going in this article, if you want to learn more watch my YouTube tutorial at the top of the page or use one of these resources. I highly recommend Peter Kahrel's ScriptUI for dummies.

[Peter Kahrel's ScriptUI for Dummies](https://creativepro.com/files/kahrel/indesign/scriptui.html) - Best resource on ScriptUI for all the Adobe products.

[API documentation by YEARBOOK](http://yearbook.github.io/esdocs/#/) – Again the YEARBOOK documentation, select ScriptUI in the left drop-down to see all the classes that are available.

[Joonas Pääkkö’s ScriptUI builder](https://scriptui.joonas.me/) – If you’re just starting out and don’t know how to use ScriptUI or if you’re just lazy you can use this tool to build custom ScriptUI panels. Actually learning the language is of course a better option if you want full flexibility.

## Code Snippet

```js
(function (thisObj) {

	expressionPanel(thisObj);

	var applyBtn;
	var applyCustomBtn;
	var deleteBtn;
	var expressionInput;
	var expressionDropdown;

	function expressionPanel(thisObj) {
		var win = (thisObj instanceof Panel) ? thisObj : new Window('palette', 'Expression Script', undefined);
		win.spacing = 6;

		var tabPanel = win.add('tabbedpanel');
		tabPanel.alignChildren = ['fill', 'fill'];
		tabPanel.preferredSize = [350, 300];

		// -- Tab One --
		var tabOne = tabPanel.add('tab', undefined, 'Expressions');
		tabOne.alignChildren = 'right';

		// Expression Dropdown
		var dropdownGroup = tabOne.add('group', undefined, 'dropdownGroup');
		dropdownGroup.orientation = 'row';

		dropdownGroup.add ("statictext", undefined, "Expression: ");
		expressionDropdown = dropdownGroup.add('dropdownlist', undefined, [
			'loopOut();',
			'loopIn();',
			'posterizeTime(7); random(0, 1000);',
			'random(0, 50);'
		]);
		expressionDropdown.selection = 0;
		expressionDropdown.preferredSize.width = 240;

		// Apply Button
		var btnGroup = tabOne.add('group', undefined, 'btnGroup');
		btnGroup.orientation = 'row';
		applyBtn = btnGroup.add('button', undefined, 'Apply');
		deleteBtn = btnGroup.add('button', undefined, 'Delete');

		// -- Tab Two --
		var tabTwo = tabPanel.add('tab', undefined, 'Custom Expression');
		tabTwo.alignChildren = 'fill';

		// Custom Expression Input
		expressionInput = tabTwo.add('edittext', undefined, 'loopOut();');
		expressionInput.characters = 25;

		// Apply Custom Button
		applyCustomBtn = tabTwo.add('button', undefined, 'Apply');


		// --- ACTIONS ---
		applyCustomBtn.onClick = function () {
			applyCustomExpression(expressionInput.text);
		};

		applyBtn.onClick = function () {
			applyCustomExpression(expressionDropdown.selection.text);
		};

		deleteBtn.onClick = function () {
			expressionDropdown.remove(expressionDropdown.items[expressionDropdown.selection.index]);
			expressionDropdown.selection = 0;
		};

		win.onResizing = win.onResize = function () {
			this.layout.resize();
		};

		win instanceof Window
			? (win.center(), win.show()) : (win.layout.layout(true), win.layout.resize());
	}

	function applyCustomExpression(expression) {
		app.beginUndoGroup('My Script Action');
		var selected = app.project.activeItem.selectedProperties;
		if (selected.length == 0) {
			alert('Please select a property');
		} else {
			for (var i = 0; i < selected.length; i++) {
				selected[i].expression = expression;
			}
		}
		app.endUndoGroup();
	}
})(this);
```
