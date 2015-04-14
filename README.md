# react-count-down

react-count-down is a simple count down component using react.js.

![](example/screenshot.png)

## Installation

`npm install react-count-down --save`

## Usage

```javascript
var React = require('react');
var CountDown = require('react-count-down');

var OPTIONS = { endDate: '06/03/2015 10:12 AM', prefix: 'until my birthday!' }

React.renderComponent(<CountDown options={OPTIONS} />, document.getElementById("container"));

```

## Styles

react-count-down can be used with your own custom styles. A minimal count-down.css style sheet is included as a guide.

## Development

Initial set up, run:
    
    npm install

For watch on files, live reload, JSX transpiling and browserify, run:

    gulp

## License

(The MIT License)

Copyright (c) 2015 isekivacenz &lt;stevenisekimartin@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
