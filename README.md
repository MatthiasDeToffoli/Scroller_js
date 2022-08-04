# Scroller_js
Buttons for scroll to the previous top element or the next bottom element. The top button is shown/hide at a certain position and the bottom hide when you're at the end of the website's page.

<hr>

For use it you will need two divs with the class **.Scroller** one will also has the class **.Top** and the other **.Bottom**.

```html 
<div class="Scroller Top"></div>
<div class="Scroller Bottom"></div>
```
You will also need a div with the ID **#TopScroll**. This div is here for define a min height to scroll bellow, to show the top scroller (or hide if you scroll above).

```html 
<div class="Scroller Top"></div>
<div class="Scroller Bottom"></div>
<div id="TopScroll"></div>
```

*It will be better if you define a size to your TopScroll div*

after that for every elements you want to scroll up to, you will need to add the class *.ElementToScroll* the scroller will make scroll up to the first it find after a click and to the next after another click etc.

```html 
<div class="Scroller Top"></div>
<div class="Scroller Bottom"></div>
<div id="TopScroll"></div>
<div class="ElementToScroll""></div>
<div class="ElementToScroll""></div>
```

*The css is here just for the example.*
<hr>

This repository contains the js script, a css specific to the Carousel and an example which show three type of carousel

Enjoy :)

<hr>

*<sub>Made with jquery-3.6.0, the script can't work without jquery</sub>*
