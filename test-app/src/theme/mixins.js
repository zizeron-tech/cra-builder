const mixins = {
  /*
    MEDIA QUERY MANAGER

    Breakpoint       Device ($breakpoint)
    -------------  | --------------
    0 - 600px      | Phone (phone)
    600px - 900px  | Tablet portrait (tab-port)
    900px - 1200px | Tablet landscape (tab-land)
    [1200 - 1800]: | Normal styles
    1800px - ∞:    | Big desktop (big-desktop)

    1em = 16px
  */

  breakpoints: {
    phone: 'max-width: 37.5em',
    tabPort: 'max-width: 56.25em',
    tabLand: 'max-width: 75em',
    bigDesktop: 'min-width: 112.5em',
  },

  /*
  Hiding scrollbars mixins:
    scrollXContainer: parent element
    scrollXContained: Child element
  */

  scrollXContainer: (width = '100%', padding = 0) => `
    width: ${width};
    padding: ${padding};
    overflow: hidden;
    overflow: -moz-scrollbars-none;
  `,

  scrollXContained: `
    overflow-x: scroll;
    width: 100%;
    height: 100%;
    padding-bottom: 5rem;
    box-sizing: content-box;
  `,

  boxShadow: (shadow) => `
    -webkit-box-shadow: ${shadow};
    -moz-box-shadow   : ${shadow};
    box-shadow        : ${shadow};
  `,

  textShadow: (shadow) => `
    -webkit-text-shadow: ${shadow};
    -moz-text-shadow   : ${shadow};
    text-shadow        : ${shadow};
  `,

  borderRadius: (radius) => `
    -webkit-border-radius: ${radius};
    -moz-border-radius   : ${radius};
    -ms-border-radius    : ${radius};
    border-radius        : ${radius};
  `,

  transition: (time) => `
    -webkit-transition: ${time};
    -moz-transition   : ${time};
    -ms-transition    : ${time};
    -o-transition     : ${time};
    transition        : ${time};
  `,

  transitionProperty: (property) => `
    -webkit-transition-property: ${property};
    -moz-transition-property   : ${property};
    -ms-transition-property    : ${property};
    -o-transition-property     : ${property};
    transition-property        : ${property};
  `,

  transitionDuration: (duration) => `
    -webkit-transition-duration: ${duration};
    -moz-transition-duration   : ${duration};
    -ms-transition-duration    : ${duration};
    -o-transition-duration     : ${duration};
    transition-duration        : ${duration};
  `,

  transitionTimingFunction: (timing) => `
    -webkit-transition-timing-function: ${timing};
    -moz-transition-timing-function   : ${timing};
    -ms-transition-timing-function    : ${timing};
    -o-transition-timing-function     : ${timing};
    transition-timing-function        : ${timing};
  `,

  transitionDelay: (delay) => `
    -webkit-transition-delay: ${delay};
    -moz-transition-delay   : ${delay};
    -ms-transition-delay    : ${delay};
    -o-transition-delay     : ${delay};
    transition-delay        : ${delay};
  `,

  animation: (animate) => `
    -webkit-animation: ${animate};
    -moz-animation   : ${animate};
    -ms-animation    : ${animate};
    animation        : ${animate};
  `,

  animationPlayState: (animate) => `
    -webkit-animation-play-state: ${animate};
    -moz-animation-play-state   : ${animate};
    -ms-animation-play-state    : ${animate};
    animation-play-state        : ${animate};
  `,

  transform: (transform) => `
    -webkit-transform: ${transform};
    -moz-transform   : ${transform};
    -ms-transform    : ${transform};
    transform        : ${transform};
  `,

  opacity: (opacity) => {
    const IEValue = opacity * 100;
    return `
    -webkit-opacity: ${opacity};
    -moz-opacity   : ${opacity};
    -ms-opacity    : ${opacity};
    opacity        : ${opacity};
    -ms-filter     : "progid:DXImageTransform.Microsoft.Alpha(Opacity="+${IEValue}+")";
    filter         : alpha(opacity=${IEValue});
    `;
  },

  minWidth: (minWidth) => `
  -webkit-min-width: ${minWidth};
  -moz-min-width   : ${minWidth};
  -ms-min-width    : ${minWidth};
  min-width        : ${minWidth};
  `,

  appearance: (value) => `
    -webkit-appearance: ${value};
    -moz-appearance   : ${value};
    appearance        : ${value};
  `,

  columns: (columns, gap) => `
    -webkit-column-count: ${columns};
    -moz-column-count   : ${columns};
    column-count        : ${columns};

    -webkit-column-gap: ${gap};
    -moz-column-gap   : ${gap};
    column-gap        : ${gap};

    -webkit-column-fill: auto;
    -moz-column-fill   : auto;
    column-fill        : auto;
  `,

  calc: (property, expression) => `
    #{${property}}: -webkit-calc(#{${expression}});
    #{${property}}: -moz-calc(#{${expression}});
    #{${property}}: calc(#{${expression}});
  `,

  grayscale: (percentage) => `
    -webkit-filter: grayscale(${percentage});
    filter        : grayscale(${percentage});
  `,

  absolute: (minHeight, width = '100%') => `
    left      : 0;
    min-height: ${minHeight};
    position  : absolute;
    top       : 0;
    width     : ${width};
  `,

  linearGradient: (direction, from, to) => `
    background-image: -moz-linear-gradient(${direction}, ${from}, ${to});
    background-image: -webkit-linear-gradient(${direction}, ${from}, ${to});
    background-image: linear-gradient(${direction}, ${from}, ${to});
  `,

  /*
    Usage: @include keyframe (name-animation) { animation }
  */

  keyframe: (animationName) => `
    @-webkit-keyframes #{${animationName}} {
      @content;
    }

    @-moz-keyframes #{${animationName}} {
      @content;
    }

    @-o-keyframes #{${animationName}} {
      @content;
    }

    @keyframes #{${animationName}} {
      @content;
    }
  `,

  placeholderColor: (color) => `
    &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: ${color};
    }
    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: ${color};
    }
    &::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: ${color};
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${color};
    }
    &::-ms-input-placeholder { /* Microsoft Edge */
      color: $color;
    }
  `,

  /* Hiding scrollbars mixins */

  clearfix: `
    &::after{
      content: "";
      display: table;
      clear: both;
    }
  `,

  backgroundImg: `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
  `,

  absCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default mixins;
