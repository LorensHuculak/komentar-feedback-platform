import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} class='item'>
        <div class='content'>
          <div class='header'>{label}</div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please review your input</h5>

      <div class='ui  segment'>
        <div class='ui relaxed divided list'>{reviewFields}</div>
      </div>
      <button className='ui basic button' onClick={onCancel}>
        <i className='icon left arrow' />
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className='ui right labeled icon button yellow'>
        <i className='paper plane icon' />
        Send Survey
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { formValues: state.form.surveyForm.values };
};
export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
