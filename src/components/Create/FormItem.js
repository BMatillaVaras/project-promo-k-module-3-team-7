import React from "react";

class FormItem extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.name} className="fill__label">
          {this.props.title}
        </label>
        <input
          className="fill__input js-fill__input"
          placeholder={this.props.placeholder}
          id={this.props.name}
          type={this.props.type}
          name={this.props.name}
          pattern={this.props.pattern}
          // onChange={this.}
          required
        />
      </>
    );
  }
}

export default FormItem;
