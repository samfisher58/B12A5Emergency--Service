### 6. **Answer** the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
****Answer**:** getElementById: select only 1 id at a time. it is the fastest method as every element is unique. 

getElementByClassName: returns an Html collection, meaning if the element inside html is changed or update, it updates automatically.We cannot use array method in it.

querySelector / querySelectorAll: while querySelector return html element, querySelectorAll return a node list. Meaning querySelector return only the first selector if it have multiple matching element, while querySelectorAll return all elements as it returns node ist

2. How do you **create and insert a new element into the DOM**?
**Answer**: First need to create a new element to insert, with
document.createElement()

then need to get the parent element where insertion will take place by 
getElementById()

Finally, using the appendChild method we'll insert the newly created element to the parent 

Example:

const container = document.getElementById("container");
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
container.appendChild(newDiv);


3. What is **Event Bubbling** and how does it work?
**Answer**: Event Bubbling is a method where the event take place on the target element, then it traverse back to it's parent, all the way to the <html> tag. In my code event bubbling is used, to get the call/copy/heart event. Without it i'd have to add **eventListener** to every button instead of the parent.

4. What is **Event Delegation** in JavaScript? Why is it useful?
**Answer**: Event Delegation is a technique where we attach a single event listener to a parent element **(like i used for **hotline-section-parent** to get all the button click)**, instead of attaching separate listeners to multiple child elements. It keeps the code clean and make the code reuseable.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Answer**: The main difference between **preventDefault() and stopPropagation()** is :
**preventDefault()** stops default browser action for an event
**stopPropagation()** stops the event from bubbling or capturing to its parents

---