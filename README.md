# Simple Animations

This is a simple JS script for animations. You can use it, test it, expand it etc. What ever works for you.

- All modern browsers are supported (Tested in Chrome, Firefox, Opera, Safari, IE9+ and Edge).
- Bugs? create an issue [here](https://github.com/markoarula/simpleAnimations/issues).

## How to use

First download simpleAnimation.js and simpleAnimation.css files and include them to your project.

For CSS file (include in the head section):

```
<link rel="stylesheet" href="simpleAnimation.css">
```

For JS file (include before the end of the body):

```
<script src="simpleAnimation.js" type="text/javascript"></script></code>
```

After that, it's pretty easy to use it:

* To trigger animation, use the `simple-animation` class on any element (image, div, column,...)
* Which animation will be triggered depends on other class. For now, there is 6 basic animations available:
  * Fade: `animate-fade` class
  * Fade center: `animate-afc` class
  * Fade left: `animate-afl` class
  * Fade right: `animate-afr` class
  * Fade top: `animate-aft` class
  * Fade bottom: `animate-afb` class
* There is two attributes for setting the duration and delay of the animation:
  * `data-duration="1000"` attribute in milliseconds
  * `data-delay="1000"` attribute in milliseconds

There is also an HTML example in this repo.

## Changelog

### Ver 1.0

* Initial release