## A Native Windows Look for Electron Apps
Electron is an amazing framework for cross-platform app development, enabling developers to built standalone web apps powered by Chromium and Node.js. JavaScript (and the various supercharged versions) has become powerful enough that we can easily handle most business logic well - but how do you achieve that "native look"?

This is a simple example, showcasing [WinJS](http://buildwinjs.com). WinJS is the Windows Library for JavaScript and actually used when building UWP (Universal Windows Apps). The open-source JavaScript library can assist you in building HTML, CSS, and JavaScript applications for the Windows Store with a consistent look and performance across all Windows devices - it will however work just fine in any browser, including Electron. Tl;dr: WinJS is used to build "real" Windows Store apps and can therefore make your Electron app look just like a full-blooded Windows app.

Multiple bindings exist for WinJS - it can be used standalone, or together with Knockout, React, or Angular. This example is built using the [React bindings](https://github.com/winjs/react-winjs).

#### License 
Licensed [MIT](LICENSE.md) - Copyright 2015 Microsoft Corporation
