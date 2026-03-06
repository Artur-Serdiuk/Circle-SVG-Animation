Circle SVG animation
-------

Animated SVG circle counters / progress meters in pure JavaScript. No dependencies.

### Install

```sh
npm install circle-svg-animation
```

### Use

Import as an ES module:

```javascript
import SVG from 'circle-svg-animation';

const svg = new SVG('.custom-css-selector');
```

Or include as a script tag (UMD build):

```html
<script src="dist/circle-svg-animation.umd.cjs"></script>
<script>
  const svg = new CircleSVGAnimation.default('.custom-css-selector');
</script>
```

### Options

```javascript
const svg = new SVG('.custom-css-selector', {svgOptions}, {svgCircleOptions}, {innerNumberStyles});
```

* svgOptions
    * *__SVGWidth__* - svg circle width, default 200px
    * *__SVGHeight__* - svg circle height, default 200px
    * *__innerNumber__* - svg circle inner counter number, default 75
    * *__speed__* - animation speed in ms, default 2000

* svgCircleOptions
    * *__strokeColor__* - svg circle color, default #006363
    * *__strokeWidth__* - svg circle width, default 20px
    * *__circleCx__* - svg circle X coordinate of the center of the circle, default 110
    * *__circleCy__* - svg circle Y coordinate of the center of the circle, default 110
    * *__circleR__* - svg circle radius default 100

* innerNumberStyles
    * *__color__* - svg inner counter text color, default the same as svg circle color
    * *__fontWeight__* - svg inner counter font weight, default 800
    * *__fontSize__* - svg inner counter text font-size, default 50px

### Example

```javascript
const svg = new SVG('.custom-css-selector', {
    SVGWidth: 100,
    SVGHeight: 100,
    innerNumber: 30,
    speed: 1000
});
```

### Development

```sh
npm install
npm run dev       # start dev server with hot reload
npm run build     # build library to dist/
npm run preview   # preview production build
```

### Dependencies

None. Pure JavaScript.
