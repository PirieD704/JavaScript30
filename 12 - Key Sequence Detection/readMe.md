The purpose of this exercise is to detect when a certain sequence is typed while viewing a screen (just like a cheat code in a video game). 

We start by creating an event listener that watches for a keyup on the DOM.  you pass the anonymous function the event and in order to access the specific key that was pressed.  You can either look up the key by e.key or by e.keyCode. For sake of not having to type out the sequence we desired, I went with the keyCode as it is just a number representation of the particular key.

You need an array to push each key press onto so that you can check for the sequence.  You need another variable to hold the particular sequence you are looking for to check against the first array. You then push the e.keyCode onto your pressed array but you need to control the length of the array so that it does not get bigger than what you need to check for.  You can make this dynamic by using the splice method and checking backwards through the array.
```javascript
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```
You first indicate that the start which only applies once the length of pressed reachs the length of secretCode.  Then you specify the delete count which will be 1 for each key press.  This too only become a value of 1 when pressed reaches one larger in length than secretCode (i.e. it's too big).

From here, we check the array's against eachother(I used join but I don't think it's necessary, just looks better when console logging) and if it's confirmed, we can execute whatever we so choose.  Here we use cornify which adds something random and corny to the page everytime it's called.