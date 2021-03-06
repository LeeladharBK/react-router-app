// Component to display the redux form
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    // component in field heps us to render form on screen
    
    // onSubmit: first the react side function are executed in handleSubmit if all that is correct
    // then the values of the form are taken through handleSubmit and returned
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post:"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories:"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content:"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

// function to validate the input in the form
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter an title";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // if errors is empty the form is fine to submit
  // if errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
