// to call a prop function, it must be called within a function whether in class or functional component.

/* state declaration in class component is different from functional component.
    state is declared as an object in class components,
    while in functional component, it is declared as a variable using useState hook. */

/* useEffect:
    Side Effect executes once after the first Render(regardless of the dependencies), and in subsequent times
     only when Dependencies values are changed.
  each time a state is updated, the whole component is re-rendered.
  when a comp is re-rendered, useEffect looks at the dependencies. If any of them is updated,
  the callback is fired.

  //useEffect is used to manage react side effects, and even to manage component lifecycle.
    useEffect with:
        1- empty array dependency => the callback fires only once the component renders.
        2- without any dep => the callback fires each time the comp re-render.

  //cleanUp function for unmounted component:
    function Timer() {
      const [time, setTime] = useState(0);

      useEffect(() => {
        let interval = setInterval(() => setTime(1), 1000);

        return () => {
          // setInterval cleared when component unmounts
          clearInterval(interval);
        }
      }, []);
    }
    // If you return a function in useEffect, useEffect itself will realize that
     it should execute this function only when the component is removed from the DOM.
*/

/*  // HOC: components/withLogger.js   ---   Tested component: ContactList.
    This is an example of "When and How to use" HOC(Higher Order Component).
    HOC is used to share a functionality with multiple components without
    editing the components.
 */