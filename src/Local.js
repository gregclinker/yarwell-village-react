import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div class="row">
        <div class="four columns">
          <h3>Doctors</h3>
          <p>The local doctors is in Wansford 1 mile away.</p>
          <a class="button" target="_blank" href="http://www.wansford.co.uk/">Read More</a>
        </div>
        <div class="four columns">
          <h3>Police</h3>
          <p>Northamptonshire Police are our local force but as with other Emergency Services there is a degree of overlap with Cambridgeshire / Peterborough. Yarwell falls under "North Northamptonshire" with Police stations in Corby and Kettering.</p>
          <p>Specials Recruitment Team at SpecialsRecruitment@northants.pnn.police.uk or phone 01604888113.</p>
          <a class="button" target="_blank" href="content/SpecialsShortArticleYarwellOct15.pdf">Read more</a>
        </div>
        <div class="four columns">
          <h3>East Northants District Council</h3>
          <p>East Northants District Council - based in Thrapston, has a reasonably good web site or phone 01832 742000</p>
          <a class="button" target="_blank" href="http://www.east-northamptonshire.gov.uk/">Read More</a>
        </div>
	</div>

            </React.Fragment>
        );
    }
}

