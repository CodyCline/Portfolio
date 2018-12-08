import React from 'react';

class SnackBar extends React.Component {
    
    render () {
        return (
            <div style={{
                opacity: this.props.show ? '1' : '0'
            }}>> HEY</div>
            // <div class="mdc-snackbar"
            //     aria-live="assertive"
            //     aria-atomic="true"
            //     aria-hidden="true"
            // >
            //     <div class="mdc-snackbar__text">Hello</div>
            //     <div class="mdc-snackbar__action-wrapper">
            //         <button type="button" class="mdc-snackbar__action-button">Dismiss</button>
            //     </div>
            // </div>
        );
    }
}




export default SnackBar