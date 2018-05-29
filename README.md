Do not type them manually - will take forever …

<!-- Create a HTML document with a <ul id=”students”> somewhere in it.
Also create a <template id=”studentinfo”> somewhere - it should contain something like:
<li>Student:
<span data-json=”firstname”>FIRSTNAME</span>
<span data-json=”middlename”>MIDDLENAME</span>
<span data-json=”lastname”>LASTNAME</span>
<button class=”delete”>Remove</span>
</li> -->


You can design the HTML however you like, just remember the span elements with those exact data-attributes!
* 1. In JavaScript, create a function addStudent()  that clones the template, and appends the clone to the #students list
* 2. Test that it works, by calling it multiple times from the console - it should add a default <li> to the list everytime.
* 3. Create another function, buildList() that iterates through all the students from the array, and calls addStudent on each item.
This should result in a long list of identical <li>s
* 4. Make sure that a parameter is passed to addStudent, and console.log it - it should be the name of the student!
* 5. Modify the addStudent function, so it finds the span where data-json is firstname, and sets its’ textContent to the full name of the student. 
 You’ll need to look into attribute-selectors.
The full name is temporary, just to see that something works.
* 6. Create a function, getNameParts(fullname) that receives the full name, and splits it into three parts, first, middle and last.
* 7. The middle is either empty, if the person has only two names. The middlename, if the person has a middlename. Or a string with all the middle-names, if the person has more than three names.
* 8. For testing, just write the parts to the console.
* 9. Make sure the function works for all the persons in the list - make addStudent call it, before setting the textcontent of data-json span elements.
* 10. Make the function getNameParts return an object { } with three properties: “first”, “middle”, and “last”. Set the values of the properties to … you guessed it!
* 11. In addStudent, store the return-value from getNameParts, and put the three parts (first, middle and last) into the data-json span elements.

Now you should have a nice list of students, with first, middle and last names displayed.

Next, we want to be able to remove students from the list

* 12. In addStudent, add an eventlistener on the button, calling an anonymous function. That function must receive the event-object as a parameter. Console.log the event-object, and check that the .target is the button clicked.
* 13. Inside the click function: Find the <li> element from the .target. This means traversing up the tree from the button to the first <li>. Store the <li> in a variable, and console.log it.
* 14. Still inside the click function: remove the <li> from its’ parent.
* 15. Check that it works, you can click the button on any student, and remove him or her from the list.

The problem is, that we only remove students from the display. They are still in the data-list, so if we were to call buildList again, they will re-appear. And we will call buildList again, since we are going to sort the list! But let’s see how far we can go while ignoring the problem :)
