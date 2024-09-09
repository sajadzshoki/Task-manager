import { useEffect, useRef } from "react";

function useClickOutside(handler: (event: MouseEvent | TouchEvent) => void) {
  const ref = useRef<HTMLDivElement| null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handler]);

  return ref;
}

export default useClickOutside;

// 1. ref.current &&
// ref.current: This is a reference to the DOM element that you want to monitor for outside clicks. The useRef hook is used to create this reference, and ref.current will hold the actual DOM node once the component mounts.
// Why check ref.current?: Before accessing properties or methods on ref.current, we need to make sure it exists. This check prevents potential errors that might occur if the reference hasn't been assigned to an element yet (e.g., during the initial render).

// 2. !ref.current.contains(event.target as Node)
// !ref.current.contains(...): This part checks whether the clicked element (event.target) is inside the referenced element (ref.current).
// event.target: Represents the actual DOM element that was clicked. For example, if you click a button, event.target would be that button.
// ref.current.contains(event.target): The contains method is a built-in DOM method that checks if a given element (in this case, event.target) is a descendant of another element (in this case, ref.current). It returns true if event.target is inside ref.current, and false otherwise.
// as Node: This is a TypeScript type assertion, ensuring that event.target is treated as a Node. This is necessary because event.target can be of various types, but contains expects a Node.

// 3. handler(event)
// If the condition !ref.current.contains(event.target as Node) is true (meaning the click was outside the referenced element), the handler function is invoked.
// handler(event): This is the function passed into the useClickOutside hook. It will be executed when a click outside the referenced element is detected. This could be a function that, for example, closes a dropdown or a modal.
// Putting It All Together
// Purpose: This block of code ensures that whenever a click occurs, the hook checks if the click was outside the specified element. If it was, the handler function is called to handle the "click outside" event.

// Flow:

// Check if ref.current exists: If ref.current is null or undefined, the code doesn't proceed further (avoiding errors).
// Check if the click is outside: If the click is outside the element referenced by ref.current, the handler function is called.
// Example Use Case
// Consider a dropdown menu:

// You have a dropdown, and you want it to close when the user clicks anywhere outside the dropdown.
// The ref.current points to the dropdown element.
// If the user clicks outside the dropdown, ref.current.contains(event.target) will be false, triggering the handler function, which closes the dropdown.
// Summary
// This code is the core of the useClickOutside hook. It ensures that clicks outside a specified element are detected and handled, enabling functionalities like closing menus, modals, or tooltips when the user interacts elsewhere on the page.


