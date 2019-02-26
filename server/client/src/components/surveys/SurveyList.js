import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { Progress } from 'semantic-ui-react';

var options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className='ui card'>
          {/* <div className='image'>
            <img src='/images/wireframe/image.png' />
          </div> */}
          <div className='content'>
            <a className='header'>{survey.title}</a>
            <div className='meta'>
              {new Date(survey.dateSent).toLocaleDateString('en-EN', options)}
            </div>
            <div class='description'>
              <p>{survey.body}</p>
            </div>
          </div>
          <div className='extra content'>
            <a>
              <i className='check icon' />
              {survey.yes}
            </a>
            <a className='right floated column'>
              <i className='x icon' />
              {survey.no}
            </a>
          </div>
          <div className='ui bottom attached progress'>
            <Progress percent={(survey.yes / (survey.no + survey.yes)) * 100} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui three cards'>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
