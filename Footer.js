import React from 'react';

function Footer() {
    const date = new Date();
    return (
        <div class="container-fluid bg-dark">
            <div class="row"><hr></hr>
            <div class="col-8">
                <h4 style={{'color':'white','textAlign':'right'}}>@copyright {date.getFullYear()} org.com</h4>
            </div>
            </div>
        </div>
    );
}

export default Footer;