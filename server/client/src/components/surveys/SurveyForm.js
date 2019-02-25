import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Title', name: 'title', noValueError: 'Please provide a title' },
  {
    label: 'Subject',
    name: 'subject',
    noValueError: 'Please provide a subject'
  },
  { label: 'Description', name: 'body', noValueError: 'Please provide a body' },
  {
    label: 'Recipients',
    name: 'emails',
    noValueError: 'Please provide an email address'
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type='text'
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          className='ui form'
          onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}

          <Link to='/surveys' className='ui basic button'>
            <i className='icon left arrow' />
            Back
          </Link>

          <button className='ui right labeled icon button yellow' type='submit'>
            <i className='right arrow icon' />
            Continue
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
