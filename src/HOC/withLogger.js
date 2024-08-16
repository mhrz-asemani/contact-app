/*
    This is an example of "When and How to use" HOC(Higher Order Component).
    HOC is used to share a functionality with multiple components without
    editing the components.
 */

import { useEffect } from "react";

const withLogger = WrappedComponent => {

    // new component
    const WithLogger = props => {
        useEffect(() => {
            console.log(`Component ${WrappedComponent.name} mounted.`);
            return () => {
                console.log(`Component ${WrappedComponent.name} unmounted.`)
            };
        }, []);

        useEffect(() => {
            // Log data on component update
            console.log(`Component ${WrappedComponent.name} updated.`);
        });

        return <WrappedComponent {...props} />
    }

    WithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithLogger;
}

export default withLogger;