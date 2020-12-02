import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <React.Fragment>
                <br/><br/><br/>
                <div class="row">
                    <div class="ten columns offset by-one">
                        <h1>Yarwell is a small village in East Northamptonshire, about 10 miles West of Peterborough and close to the A1.</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="twelve columns">
                        <br/>
                    </div>
                </div>
                <div class="row">
                    <div class="four columns">
                        <p>Welcome to the new Yarwell website, originally donated, to the village, by Colin Wass.</p>
                        <p>The village has a pub - the Angel Inn, a village hall and about 130 houses. There is a Yarwell &amp; Nassington Britannia Band and our older residents are catered for with a
                            fortnightly lunch Club.</p>
                    </div>
                    <div class="seven columns offset by-one">
                        <img src="/images/village-sign.jpg" alt="village sign"/>
                    </div>
                </div>
                <div class="row">
                    <div class="twelve columns">
                        <p>The market towns of Oundle and Stamford are about 7 miles away in opposite directions and there are Post Offices in both Wansford and Nassington which are both a mile away
                            and easy walking or cycling distance.</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
