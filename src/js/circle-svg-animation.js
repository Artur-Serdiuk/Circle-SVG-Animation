/**
 *
 * @private
 * @author Arthor Serdyuk
 * @param {Selector} selector selector to initialize plugin
 * @param {Object} svgOptions Object with svg styles
 * @param {Object} svgCircleOptions Object with svg circle styles
 * @param {Object} innerNumberStyles Object with svg inner number styles
 */
function SVG(selector, svgOptions, svgCircleOptions, innerNumberStyles) {
	this.element = document.querySelector(selector);
	const CIRCLE_LENGTH =  628.318;
	const DEFAULT_SVG_OPTIONS = {
		CIRCLE_LENGTH: CIRCLE_LENGTH,
		STROKE_DASHARRAY: CIRCLE_LENGTH,
		STROKE_DASHOFFSET: CIRCLE_LENGTH,
		FILL: 'none',
		SVGWidth: 200,
		SVGHeight: 200,
		innerNumber: 75,
		speed: 2000
	};
	this.svgOptions = Object.assign({}, DEFAULT_SVG_OPTIONS, svgOptions);
	const SVG_CIRCLE_OPTIONS = {
		strokeColor: '#006363',
		strokeWidth: '20px',
		circleCx: 110,
		circleCy: 110,
		circleR: 100
	};
	this.svgCircleOptions = Object.assign({}, SVG_CIRCLE_OPTIONS, svgCircleOptions);
	const INNER_NUMBER_STYLES = {
		position: 'absolute',
		display: 'inline-block',
		left: '50%',
		transform: 'translate(-50%) rotate(90deg)',
		lineHeight: this.svgOptions.SVGWidth + 'px',
		color: this.svgCircleOptions.strokeColor,
		fontWeight: 800,
		fontSize: '50px'
	};
	this.innerNumberStyles = Object.assign({}, INNER_NUMBER_STYLES, innerNumberStyles);
	this.animateToNumber = CIRCLE_LENGTH - CIRCLE_LENGTH / 100 * this.svgOptions.innerNumber;
	this.init();
}

SVG.prototype.createSvg = function (width, height, fill, strokeDasharray, strokeDashoffset, strokeColor, strokeWidth, cx, cy, r) {
	return `<svg width="${width}" height="${height}" viewBox="0 0 220 220"><circle class="circle" cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke-dasharray="${strokeDasharray}" stroke-dashoffset="${strokeDashoffset}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`;
};

SVG.prototype.createInnerNumber = function () {
	return `<span class="svg-number">0</span>`;
};

SVG.prototype.setRootElementStyles = function (el) {
	setStyles(el, {
		'position': 'relative',
		'display': 'inline-block',
		'transform': 'rotate(-90deg)'
	});
};

SVG.prototype.setSvgStyles = function (el) {
	setStyles(el, this.svgOptions);
};

SVG.prototype.setInnerNumberStyles = function (el) {
	setStyles(el, this.innerNumberStyles);
};

SVG.prototype.init = function () {
	this.element.innerHTML = this.createSvg(this.svgOptions.SVGWidth, this.svgOptions.SVGHeight, this.svgOptions.FILL, this.svgOptions.STROKE_DASHARRAY, this.svgOptions.STROKE_DASHOFFSET, this.svgCircleOptions.strokeColor, this.svgCircleOptions.strokeWidth, this.svgCircleOptions.circleCx, this.svgCircleOptions.circleCy, this.svgCircleOptions.circleR) + this.createInnerNumber(this.svgOptions.innerNumber);
	
	this.setRootElementStyles($(this.element));
	this.setSvgStyles($('.circle'));
	this.setInnerNumberStyles($('.svg-number'));
	this.setSvgAnimation();
	this.setInnerNumberAnimation(this.animateToNumber);
};

SVG.prototype.setSvgAnimation = function () {
	setAnimation($('.svg-number'), {num: this.svgOptions.innerNumber}, {
		duration: this.svgOptions.speed,
		step: function (num) {
			$(this).text((num).toFixed(0) + '%');
		}
	});
};

SVG.prototype.setInnerNumberAnimation = function (animateToNumber) {
	setAnimation($('circle'), {'stroke-dashoffset': animateToNumber}, this.svgOptions.speed);
};

function setAnimation(element, animationProperty, animationsvgOptions) {
	return element.animate(animationProperty, animationsvgOptions);
}

function setStyles(element, properties) {
	return element.css(properties);
}