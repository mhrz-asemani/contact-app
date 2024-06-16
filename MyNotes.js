// to call a prop function, it must be called within a function whether in class or functional component.

/* state declaration in class component is different from functional component. state is declared as an object in class component
while in functional component, it is declared as a variable using useState hook. */

// each time a state is updated, the whole component is re-rendered and only useEffects with the updated state as a dependency are called.