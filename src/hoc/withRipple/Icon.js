import React from 'react';
import withRipple from '@material/react-ripple';
import './Icon.scss'

const Icon = (props) => {
    const {
        children,
        className = '',
        // You must call `initRipple` from the root element's ref. This attaches the ripple
        // to the element.
        initRipple,
        // include `unbounded` to remove warnings when passing `otherProps` to the
        // root element.
        unbounded,
        ...otherProps
    } = props;

    // any classes needed on your component needs to be merged with
    // `className` passed from `props`.
    const classes = `ripple-icon-component ${className}`;

    return (
        <div
            className={classes}
            ref={initRipple}
            {...otherProps}>
            {children}
        </div>
    );
};

export default withRipple(Icon);