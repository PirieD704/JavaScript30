Flex panel gallery: 

* worked with Flex Box:
	new terms:
		justify-content:
		align-items:
		flex: 1 (makes all flex boxes share equal amount of space)
		display: flex (applies the flexbox display)

	nested flex boxes to achieve layout design (three layers of nesting i believe)

	
```css
    .panel > *:first-child {transform:  translateY(-100%);}
    .panel.open-active > *:first-child {transform:  translateY(0);}
    .panel > *:last-child {transform:  translateY(100%);}
    .panel.open-active > *:last-child {transform:  translateY(0);}
```
This code creates the transition effect for the upper and lower text. The translate holds the text off of the screen and when open-active is applied, it cancels the translate (essentially). Note the child identification


```javascript
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')  
      }sd
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```
This is all the javascript needed to complete this.  Here, again we use querySelectorAll to target all things with .panel class.  Toggle open handles the first effect of resizing the panel and growing the text.  This is put into effect by the first eventListener.  THe second eventListener listens for the end of the transition.  We specifically listen for the end of any propertyName that includes 'flex' in it. upon completion, we fire the toggleActive function which applies our second class of open-active (the thing that removes the translateY on the upper and lower text).


There is a lot of transition and translate to this as well, but overall a cool implementation of flex box.
