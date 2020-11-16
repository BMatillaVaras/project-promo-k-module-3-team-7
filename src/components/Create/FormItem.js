import React from "react";

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (ev) => {
    console.log("me han clicado", ev.target.value);
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

export default FormItem;
