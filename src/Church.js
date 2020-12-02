import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="six columns">
                        <img src="/images/church.jpg"/>
                    </div>
                    <div class="six columns">
                        <a class="button" target="_blank" href="http://www.oundledeanery.org.uk/parishes/yarwell">Read
                            More</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

