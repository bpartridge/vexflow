# Vex Flow

A JavaScript library for rendering music notation.
Copyright (c) 2010 Mohit Muthanna Cheppudira

## On The Web

* [VexFlow Home](http://vexflow.com)
* [The VexFlow Tutorial](http://vexflow.com/docs/tutorial.html)
* [VexTab Home](http://vextab.com)
* [The VexTab Tutorial](http://vexflow.com/vextab/tutorial.html)

## To Contribute

* Send in your changes via a GitHub pull request.
* Rebase early, rebase often.
* Please include tests -- I will not commit changes that don't have
  accompanying tests.
* Please use 2 spaces instead of tabs and wrap your lines at 80 columns.
* Try to stick to the style conventions in the existing code. (It's not great,
  but it's what we have.)
* Join the VexFlow Google Group at:
  https://groups.google.com/forum/?fromgroups#!forum/vexflow

## Prerequisites (for Developers)

For performing full builds, you need the following:

* JRE
* Google Closure Compiler (included in support/)
* SCons
* git
* zip

## Build Instructions

Build with:

    $ scons

Clean with:

    $ scons -c

Quiet build:

    $ scons -Q

Open `tests/flow.html` for QUnit unit tests.

## Node.js Integration

Vex Flow can also be run outside the browser using Node.js.
Install dependencies with `npm install` here, then to use it,
`npm link` in this repository
then add "vexflow" as a dependency in your package.json.
Your system must have Cairo installed; see 
[here](https://github.com/LearnBoost/node-canvas#installation) for details.

For a usage example, see `tests/nodejsdemo.js` and run it 
with `node tests/nodejsdemo.js`.
To run QUnit unit tests, run `node tests/nodejsrunner.js`.
Rendered images from the unit tests can be found in `tests/output`.

## Links

The site: http://www.vexflow.com
The blog: http://0xfe.blogspot.com
The discussions: https://groups.google.com/forum/?fromgroups#!forum/vexflow
