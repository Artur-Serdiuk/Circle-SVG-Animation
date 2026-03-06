/**
 * @author Arthor Serdyuk
 * @param {string} selector - CSS selector for the container element
 * @param {Object} [svgOptions] - SVG dimensions and animation options
 * @param {Object} [svgCircleOptions] - Circle stroke styling options
 * @param {Object} [innerNumberStyles] - Inner counter text styling options
 */
class SVG {
  constructor(selector, svgOptions = {}, svgCircleOptions = {}, innerNumberStyles = {}) {
    this.element = document.querySelector(selector);
    if (!this.element) {
      throw new Error(`Element not found for selector: ${selector}`);
    }

    const defaultCircleOptions = {
      strokeColor: '#006363',
      strokeWidth: '20px',
      circleCx: 110,
      circleCy: 110,
      circleR: 100,
    };
    this.svgCircleOptions = { ...defaultCircleOptions, ...svgCircleOptions };

    const circleLength = 2 * Math.PI * this.svgCircleOptions.circleR;

    const defaultSvgOptions = {
      SVGWidth: 200,
      SVGHeight: 200,
      innerNumber: 75,
      speed: 2000,
    };
    this.svgOptions = {
      ...defaultSvgOptions,
      ...svgOptions,
      circleLength,
      strokeDasharray: circleLength,
      strokeDashoffset: circleLength,
      fill: 'none',
    };

    const defaultInnerNumberOptions = {
      color: this.svgCircleOptions.strokeColor,
      fontWeight: 800,
      fontSize: '50px',
    };
    this.innerNumberStyles = {
      ...defaultInnerNumberOptions,
      ...innerNumberStyles,
      position: 'absolute',
      display: 'inline-block',
      left: '50%',
      transform: 'translate(-50%) rotate(90deg)',
      lineHeight: this.svgOptions.SVGWidth + 'px',
    };

    this.animateToNumber =
      circleLength - (circleLength / 100) * this.svgOptions.innerNumber;

    this.init();
  }

  init() {
    const { SVGWidth, SVGHeight, fill, strokeDasharray, strokeDashoffset } =
      this.svgOptions;
    const { strokeColor, strokeWidth, circleCx, circleCy, circleR } =
      this.svgCircleOptions;

    this.element.innerHTML =
      `<svg width="${SVGWidth}" height="${SVGHeight}" viewBox="0 0 220 220">` +
      `<circle class="circle" cx="${circleCx}" cy="${circleCy}" r="${circleR}" ` +
      `fill="${fill}" stroke-dasharray="${strokeDasharray}" ` +
      `stroke-dashoffset="${strokeDashoffset}" stroke="${strokeColor}" ` +
      `stroke-width="${strokeWidth}"/></svg>` +
      `<div class="svg-number">0%</div>`;

    Object.assign(this.element.style, {
      position: 'relative',
      display: 'inline-block',
      transform: 'rotate(-90deg)',
    });

    const numberEl = this.element.querySelector('.svg-number');
    Object.assign(numberEl.style, this.innerNumberStyles);

    const circle = this.element.querySelector('.circle');
    this.animateCounter(numberEl, this.svgOptions.innerNumber, this.svgOptions.speed);
    this.animateCircle(circle, this.animateToNumber, this.svgOptions.speed);
  }

  animateCounter(element, target, duration) {
    const startTime = performance.now();
    const swing = (t) => 0.5 - Math.cos(Math.PI * t) / 2;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = swing(progress);
      element.textContent = Math.round(eased * target) + '%';
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  animateCircle(circle, targetOffset, duration) {
    const currentOffset = circle.getAttribute('stroke-dashoffset');
    circle.animate(
      [
        { strokeDashoffset: currentOffset },
        { strokeDashoffset: targetOffset },
      ],
      { duration, fill: 'forwards', easing: 'ease' },
    );
  }
}

export default SVG;
