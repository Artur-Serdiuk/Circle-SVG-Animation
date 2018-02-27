Circle SVG animation
-------

##### Example using Circle SVG animation

Just copy circle-svg-animation.js or circle-svg-animation.min.js to your js files directory and add a link before your closing ```<body>``` tag:

```html
<script type="text/javascript" src="js.circle-svg-animation.min.js"></script>
```

#### Package Managers

```sh
# NPM
npm install circle-svg-animation
```

###Use
Simple use of the plugin initialize it using the constructor function by passing your custom css selector
```javascript
const svg = new SVG('.custom-css-selector');
```

####Options Properties
The options, and value, is quite unique and powerful.
You can use it like so:

```javascript
const svg = new SVG('.custom-css-selector', {svgOptions}, {svgCircleOptions}, {innerNumberStyles});
```
* svgOptions
    * *__SVGWidth__* - svg circle width, default 200px
    * *__SVGHeight__* - svg circle height, default 200px
    * *__innerNumber__* - svg circle inner counter number, default 75
    * *__speed__* - animation speed, default 2000

* svgCircleOptions
    * *__strokeColor__* - svg circle color, default #006363
    * *__strokeWidth__* - svg circle width, default 20px
    * *__circleCx__* - svg circle X coordinate of the center of the circle, default 110
    * *__circleCy__* - svg circle Y coordinate of the center of the circle, default 110
    * *__circleR__* - svg circle radius default 100

* innerNumberStyles
    * *__color__* - svg inner counter text color , default the same as svg circle color
    * *__fontWeight__* - svg inner counter font weight , default 800
    * *__fontSize__* - svg inner counter text font-size , default 50px

####Example
```javascript
const svg = new SVG('.custom-css-selector', {
    SVGWidth: 100,
    SVGHeight: 100,
    innerNumber: 30,
    speed: 1000
});
```

#### Dependencies

jQuery 3.1