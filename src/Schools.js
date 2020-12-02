import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div class="row">
        <div class="four columns">
          <h3>Pre-School</h3>
          <p>There is a pre-school in the next village, which takes children from the age of 2.</p>
          <a class="button" target="_blank" href="http://nassingtonpreschool.com/">Read More</a>
        </div>
        <div class="four columns">
          <h3>Primary School</h3>
          <p>The local primary school takes children from Reception to year 6.</p>
          <a class="button" target="_blank" href="http://www.nassingtonschool.org.uk/">Read more</a>
        </div>
        <div class="four columns">
          <h3>Secondary School</h3>
          <p>The local secondary school is in Oundle, approximately 5 miles away.</p>
          <a class="button" target="_blank" href="http://www.princewilliamschool.co.uk/">Read more</a>
        </div>
      </div>
            </React.Fragment>
        );
    }
}
