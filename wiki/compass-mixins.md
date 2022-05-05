# compass-mixins
A mixin is a class containing methods that can be used by other classes without a need to inherit from it. In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.
## Compass SASS Stylesheets
This is a repository to pull SASS style sheets on Bower, and enjoy the compass mixins by using libsass for faster compilation. This project makes minimal modifications to the original Compass 0.12.X stylesheets from the [original repository](https://github.com/Compass/compass/tree/f9e8b54f41ee349f53413d36785b0f979881e6e3/frameworks/compass/stylesheets), intented to improve libsass compatibility and not change output.
## Compass Ruby Functions
This project includes reasonably similar implementations of some of the Ruby functions that Compass provides as Sass extensions. These are used in some Compass mixins, such as `@include background()`.

To make those functions available to your compass mixins, you'll want to either `@import "compass";` or `@import "compass/functions"'` before the specific compass scss files you import.

# installation and Usage

npm cmd : `npm i compass-mixins`

syntax
```css
@mixin mixin-name {
 Properties that you want to reuse or override
}
```

example :
- Defining mixin

```css
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}
```
- importing
```css
@import "path"
```
- including
```css
nav ul {
  @include horizontal-list;
}
```

 ## Properties
### A
```css
adjust-font-size-to($to-size, $lines, $from-size)
adjust-leading-to($lines, $font-size)
align-content($align-content)
align-items($align-items)
align-self($align-self)
alternating-rows-and-columns($even-row-color, $odd-row-color, $dark-intersection, $header-color, $footer-color)
animation
animation-delay
animation-direction
animation-duration
animation-fill-mode
animation-iteration-count
animation-name
animation-play-state
animation-timing-function
appearance($appearance)
apply-origin($origin, $only3d)
apply-side-rhythm-border($side, $width, $lines, $font-size, $border-style)
 ```
### B
```css
backface-visibility($visibility)
background
background-clip
background-image
background-origin
background-size
background-with-css2-fallback
bang-hack($property, $value, $ie6-value)
baseline-grid-background($baseline, $color)
border-bottom-left-radius($radius)
border-bottom-radius($radius)
border-bottom-right-radius($radius)
border-corner-radius($vert, $horz, $radius)
border-image($value)
border-left-radius($radius)
border-radius($radius, $vertical-radius)
border-right-radius($radius)
border-top-left-radius($radius)
border-top-radius($radius)
border-top-right-radius($radius)
box-align($alignment)
box-direction($direction)
box-flex($flex)
box-flex-group($group)
box-lines($lines)
box-ordinal-group($group)
box-orient($orientation)
box-pack($pack)
box-shadow
box-sizing($box-model)
break-after($value)
break-before($value)
break-inside($value)
```
### C
```css
clearfix
color-interpolation-filters($value)
column-break($type, $value)
column-break-after($value)
column-break-before($value)
column-break-inside($value)
column-count($count)
column-fill($fill)
column-gap($width)
column-grid-background($total, $column, $gutter, $offset, $column-color, $gutter-color, $force-fluid)
column-rule($width, $style, $color)
column-rule-color($color)
column-rule-style($style)
column-rule-width($width)
column-span($columns)
column-span($span)
column-width($width)
columns($width-and-count)
comma-delimited-list
content($value)
contrasted($background-color, $dark, $light, $threshold)
create-transform($perspective, $scale-x, $scale-y, $scale-z, $rotate-x, $rotate-y, $rotate-z, $rotate3d, $trans-x, $trans-y, $trans-z, $skew-x, $skew-y, $origin-x, $origin-y, $origin-z, $only3d)
```
### D
```css
debug-vertical-alignment($img)
delimited-list($separator)
display-box
display-flex($display)
```
### E
```css
each-gradient-prefix($values)
ellipsis($no-wrap)
establish-baseline($font-size)
```
### F
```css
filter($filters)
filter-gradient($start-color, $end-color, $orientation)
filter-margin($widths)
filter-margin-bottom($width)
filter-margin-left($width)
filter-margin-right($width)
filter-margin-top($width)
flex($flex)
flex-basis($flex-basis)
flex-direction($direction)
flex-flow($flow)
flex-grow($flex-grow)
flex-shrink($flex-shrink)
flex-wrap($wrap)
flexbox($properties, $version)
float($side)
float-left
float-right
flow-from($target)
flow-into($target)
font-face($name, $font-files, $eot, $weight, $style)
for-legacy-browser($browser, $min-version, $max-version, $threshold, $ranges)
for-legacy-browsers($browsers, $threshold)
force-wrap
```
### G
```css
global-reset
global-reset
grid-background($total, $column, $gutter, $baseline, $offset, $column-color, $gutter-color, $baseline-color, $force-fluid)
```
### H
```css
h-borders($width, $lines, $font-size, $border-style)
has-layout($approach)
has-layout-block
has-layout-zoom
hide-text($direction)
horizontal-borders($width, $lines, $font-size, $border-style)
horizontal-list($padding, $direction)
horizontal-list-container
horizontal-list-item($padding, $direction)
hover-link
hyphenation
hyphens($value)
```
### I
```css
image-property($property)
inline-block($alignment, $ie-alignment)
inline-block-list($padding)
inline-block-list-container
inline-block-list-item($padding)
inline-list
inner-table-borders($width, $color)
input-placeholder
 ```
### J
```css
justify-content($justify-content)
``` 
### K
```css
keyframes($name)
```
### L
```css
leader($lines, $font-size, $property)
leading-border($width, $lines, $font-size, $border-style)
legacy-pie-clearfix
link-colors($normal, $hover, $active, $visited, $focus)
list-style($value)
list-style-image($image)
```
### M
```css
margin-leader($lines, $font-size)
margin-trailer($lines, $font-size)
min-height($value)
min-width($value)
```
### N
```css
nested-reset
nested-reset
no-bullet
no-bullets
nowrap
```
### O
```css
opacity($opacity)
opaque
order($order)
outer-table-borders($width, $color)
```
### P
```css
padding-leader($lines, $font-size)
padding-trailer($lines, $font-size)
perspective($p)
perspective-origin($origin)
pie-clearfix
prefix-prop($property, $value, $prefix)
prefixed-properties($capability, $threshold, $properties, $capability-options)
pretty-bullets($bullet-icon, $width, $height, $line-height, $padding)
print-utilities($media)
```
### R
```css
replace-text($img, $x, $y)
replace-text-with-dimensions($img, $x, $y, $inline)
reset-baseline($font-size)
reset-body
reset-body
reset-box-model
reset-box-model
reset-display($selector, $important)
reset-display($selector, $important)
reset-float($display)
reset-focus
reset-focus
reset-font
reset-font
reset-html5
reset-html5
reset-image-anchor-border
reset-image-anchor-border
reset-list-style
reset-list-style
reset-quotation
reset-quotation
reset-table
reset-table
reset-table-cell
reset-table-cell
rhythm($leader, $padding-leader, $padding-trailer, $trailer, $font-size)
rhythm-borders($width, $lines, $font-size, $border-style)
rhythm-margins($leader, $trailer, $font-size)
rhythm-padding($padding-leader, $padding-trailer, $font-size)
rotate($rotate, $perspective, $only3d)
rotate3d($vector-x, $vector-y, $vector-z, $rotate, $perspective)
rotateX($rotate, $perspective)
rotateY($rotate, $perspective)
rotateZ($rotate, $perspective, $only3d)
```
### S
```css
scale($scale-x, $scale-y, $perspective, $only3d)
scale3d($scale-x, $scale-y, $scale-z, $perspective)
scaleX($scale, $perspective, $only3d)
scaleY($scale, $perspective, $only3d)
scaleZ($scale, $perspective)
selection($background-color, $color)
simple-transform($scale, $rotate, $trans-x, $trans-y, $skew-x, $skew-y, $origin-x, $origin-y)
single-box-shadow($hoff, $voff, $blur, $spread, $color, $inset)
single-text-shadow($hoff, $voff, $blur, $spread, $color)
single-transition($property, $duration, $function, $delay)
skew($skew-x, $skew-y, $only3d)
skewX($skew-x, $only3d)
skewY($skew-y, $only3d)
sprite($map, $sprite, $dimensions, $offset-x, $offset-y, $use-percentages, $use-magic-selectors, $separator)
sprite-background($img, $width, $height)
sprite-background-position($map, $sprite, $offset-x, $offset-y, $use-percentages)
sprite-background-rectangle($img, $width, $height)
sprite-column($col, $width, $margin)
sprite-dimensions($map, $sprite)
sprite-img($img, $col, $row, $width, $height, $margin)
sprite-position($col, $row, $width, $height, $margin)
sprite-replace-text($map, $sprite, $dimensions, $offset-x, $offset-y)
sprite-replace-text-with-dimensions($map, $sprite, $offset-x, $offset-y)
sprite-row($row, $height, $margin)
sprites($map, $sprite-names, $base-class, $dimensions, $prefix, $offset-x, $offset-y, $use-percentages, $separator)
squish-text
sticky-footer($footer-height, $root-selector, $root-footer-selector, $footer-selector)
stretch($offset-top, $offset-right, $offset-bottom, $offset-left)
stretch-x($offset-left, $offset-right)
stretch-y($offset-top, $offset-bottom)
```
### T
```css
table-scaffolding
tag-cloud($base-size)
text-shadow
trailer($lines, $font-size, $property)
trailing-border($width, $lines, $font-size, $border-style)
transform($transform, $only3d)
transform-origin($origin-x, $origin-y, $origin-z, $only3d)
transform-style($style)
transform2d($trans)
transform3d($trans)
transition
transition-delay
transition-duration
transition-property
transition-timing-function
translate($translate-x, $translate-y, $perspective, $only3d)
translate3d($translate-x, $translate-y, $translate-z, $perspective)
translateX($trans-x, $perspective, $only3d)
translateY($trans-y, $perspective, $only3d)
translateZ($trans-z, $perspective)
transparent
```
### U
```css
underscore-hack($property, $value, $ie6-value)
unstyled-link
user-select($select)
```
### W
```css
with-browser-ranges($capability, $prefix)
with-browser-support-debugging
with-each-prefix($capability, $threshold, $capability-options)
with-prefix($prefix)
word-break($value)
```