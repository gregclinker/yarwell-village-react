import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="ten columns">
                        <p>Every year the band thrills audiences across the region, from village fetes to beer
                            festivals, with its diverse range and enthusiastic approach to making music. We are proud to
                            be a part of a quintessentially British tradition and represent the two villages in our
                            name, and hope you will celebrate this with us!</p>
                        <a class="button" target="_blank" href="https://sites.google.com/site/yarwellnassingtonband/">Read
                            More</a>
                    </div>
                    <div class="two columns">
                        <a target="_blank" href="https://www.facebook.com/yarwell">
                            <img src="/images/facebook.png" height="42" width="42"/>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
