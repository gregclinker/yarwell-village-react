import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="six columns">
                        <p>Address</p>
                        <p>48, Main Street, Yarwell, PE8 6PR</p>
                        <p><a href="mailto:yarwellvillagehall@gmail.com">yarwellvillagehall@gmail.com</a></p>
                    </div>
                    <div class="six columns">
                        <img src="/images/villaghall.jpg" alt='village hall'/>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}
