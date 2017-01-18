
Interpolated:
in a console.log(), you can pass as second string or whatever and have it inserted into the first string with the identifying piece %s. This was much like the query strings in SQL.

Styling:
You can style console.log by using the %c. include it in the qoutations at the beginning. then pass it some regular css in qoutations the same way you would a second argument in a method.


Warning:
shows up in red with a little X when you console.warn()

Info:
puts a little i for info in console.info()

Testing:
console.assert() takes two parameters, the first being a boolean check, if true, then nothing happens, if false, then the assertion is console.logged and the second parameter message is logged.

clear:
console.clear() will clear the console. Not smart to put at the bottom of the JS file.

viewing DOM elements:
you can console.log or console.dir DOM elements that are stored in JS variables.  console.dir is a way to look at all the properties and methods that live in a given element.

Grouping:
when you want to console.log a bunch of stuff for items in something like an Array, you run console.log in your loop.  by doing console.groupName and passing the identifying name for each item, you create a bold header in the console.  This requires a console.groupEnd() a the completion that is passed the same identifying name the first console.group was.  You can also do console.groupCollapsed so that the tabs start out collapsed.

Count:
just logs in real time how many of whatever string you have iterated over.

timing:
helps to have quick visual for how long something is taking. You run console.time() and pass a string to defining whatever you are timing.  Then run whatever task  you need that takes time.  You then run console.timeEnd() and pass it the same string you used to define it in the first console.time() and it will log the appropriately in the console.