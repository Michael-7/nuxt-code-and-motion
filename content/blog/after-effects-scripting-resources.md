---
title: After Effects Scripting Resources
description: ExtendScript Toolkit CC is used a lot in scripting for the Adobe products like After Effects, Premier, Illustrator and Photoshop. It’s probably the best option for beginners that just want to create some small scripts. However for someone like me it’s quite annoying, not very customizable and very limited in possibilities. But we can now use Visual Studio Code for Adobe ExtendScript scripting.
img: ae-scripting-resources.png
slug: after-effects-scripting-resources
video: a90H-Pf61LQ
tags: ['After Effect', 'Visual Studio Code']
date: 22 Oct, 2019
---

ExtendScript Toolkit CC is used a lot in scripting for the Adobe products like After Effects, Premier, Illustrator and Photoshop. It’s probably the best option for beginners that just want to create some small scripts. However for someone like me it’s quite annoying, not very customizable and very limited in possibilities. Normally code editors are quite extensive and well developed. However Adobe stopped developing and updating ExtendScript Toolkit CC so it’s outdated, slow and not very customizable. But there was never really a good alternative… Until NOW! We can now use Visual Studio Code for Adobe ExtendScript scripting.

## Visual Studio Code

When developing websites or web-apps I normally use Visual Studio Code. It’s a very light weight code editor and offers a lot of customizability with the help of many free downloadable extensions. Today I will take you through the steps to create a workspace for developing for ExtendScript. There a couple of extensions that Adobe especially made for debugging in Visual Studio Code. Plus there is a library for type checking so you get hints and errors along the way while you code. This is super helpful for spotting mistakes early.

You can download Visual Studio Code here: <https://code.visualstudio.com/>

## Create a Workspace

To have a pleasant working experience I highly reccomend creating a dedicated folder for Adobe scripting. Here you can put all your scripts that you are currently developing or that you already developed. This is great so you can reference your old code fast when coding in the future. You do this by opening your scripts folder in Visual Studio Code and going to File > Save Workspace As…

This will create a .code-workspace file where the settings of the workspace reside, you can change these in the future.

## Type Definitions

To let Visual Studio Code check our code we need the definitions of all the types that can be used. There is a great resource by Pravdomil and Atarabi on GitHub. Thanks guys!

The type definitions for Adobe: <https://github.com/pravdomil/Types-for-Adobe>

Download all of the types and save them somewhere on your computer. In the scripting workspace create a folder called types. Add the types that you need depending on which software you’re scripting for. Rename the main file to index.d.ts. Now the IntelliSense should work!

![Visual Studio Code Intellisense](/img/intellisense.png){style="max-width: 100%"}

## Error Reporting

Normally JavaScript files don’t have error reporting but you can enable this by using a config file. To de this create a `jsconfig.json` file in the main folder of your workspace. Then add these settings to the file:

```json
	{
		"compilerOptions": {
			"module": "none",
			"target": "ES3",
			"noLib": true,
			"checkJs": true
		}
	}
```

Now check if your .jsx files are on JavaScript language mode by looking in the bottom right corner of the Visual Studio Code window. If it’s on JavaScript it should work like this!

![Visual Studio Code Error Reporting](/img/error-reporting.png){style="max-width: 100%"}

## Adobe Script Runner

To run the scripts for Visual Studio Code directly in your Adobe program you need to install a extension. Go to extensions in the left menu bar and search for: “Adobe Script Runner” by renderTom. Install it and read the description to see how it works. Now you can use `ctrl + shift + p` to open up a command prompt. Type “Adobe” to see all your options to run your script in, with the command next to it! For After Effects it’s `ctrl + r`.

## Debugging

If you’re writing big scripts you’ll want to be able to debug your application. To do this the Adobe team has blessed us with the ”ExtendScript Debugger” extension. To set this up there are a couple of steps required:

- Install ExtendScript Debugger from the extensions menu.
- Go to the debug mode (left menu) and click on the gear icon at the top to create a launch.json.
- Insert your name and script path.
- Restart Visual Studio Code.
- Click on the yellow “select target application” in de bottom right.
- Select the application that you want to use to run the script.
- Click “yes” to open the application.
- Go to settings and click on allow breakpoints everywhere.
- Set some breakpoints to debug your code.
- Start your script by clicking the green arrow icon at the top of the debugging screen.
- Happy debugging!

## Other Extensions

[Document This by Joel Day](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) – is a Visual Studio Code extension that automatically generates detailed JSDoc comments for both TypeScript and JavaScript files. JSDoc is very handy for keeping your code readable and understandable in the future. Here’s a great resource: <https://devdocs.io/jsdoc/>

[Beautify by HookeyQR](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) – To have custom settings for formatting documents.

[file-icons by file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons) – Add nice flat icons to the files. I’m a visual person after all 😉

That was it! Thanks for your attention and remember to use Visual Studio Code for Adobe ExtendScript scripting the next time you have a big project.
