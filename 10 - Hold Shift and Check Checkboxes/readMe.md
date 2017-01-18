###Objective:
we are looking to create list feature where we check a list and using the shift key, we can select everything in between another checkbox.

We start by selecting the checkboxes and storing it in a variable.
```javascript
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
```
To note the identification method that is used here, we are looking at the parent div of the list by the className "inbox" and then specifying further by identifying the input element with the type "Checkbox".

Next want to make a loop that attaches an EventListener to each checkbox. We use a click listener and that has a callback that use to call in our functionality: handleCheck.
```javascript
checkboxes.forEach(checkbox => checkbox.addEventListener("click" , handleCheck));
```
Now we look at our handCheck function:
```javascript
function handleCheck(e){
  let inBetween = false;
  if (e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log("looking inbetween")
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

```
We must pass it the event which allows us to see if the shiftkey was used during the click via a property of the event: e.shiftKey which is a boolean. We use an if statement to determine if they did use shift and if they were selecting/checking a box (and not unselecting a box).  If so, we want to run a loop over the our nodeList "checkboxes" . 
Now for this part we must define some variables to help us manipulate our checkboxes properly. We need a variable to keep track of the input last selected.  We also need one to keep track of whether we are 'inbetween' the selected area.  our lastChecked variable is global to retain our first selection. we set this at the end of our handlecheck function.  Inside our loop, we check each checkbox.  If we are on the current one we selected or the lastChecked one, we take our inBetween boolean and flip it from false to true (or true to false if its already selected). This accounts for going both ways, such as the first one selected is below the second selected on the list. This will still properly change the boolean To identify what is in between. Our final conditional checks the boxes if the inBetween boolean is set to true.