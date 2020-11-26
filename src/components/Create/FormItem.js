import React from "react";
import PropTypes from "prop-types";

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (ev) => {
    this.props.handleInputChange(ev.target.name, ev.target.value);
  };

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
          value={this.props.value}
          onChange={this.handleChange}
          required
        />
      </>
    );
  }
}

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default FormItem;
