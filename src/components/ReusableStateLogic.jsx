import React from "react";

class ReusableStateLogic extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.state = {
      clientX: 0,
      clientY: 0
    };
  }

  handleMouseOver(event) {
    this.setState({
      clientX: event.clientX,
      clientY: event.clientY
    });
  }

  render() {
    const { clientX, clientY } = this.state;

    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseOver}>
        {/** 
          below provides a way for this component to share
          reusable state logic to components available through
          render props
        */}
        {this.props.children({ clientX, clientY })}
      </div>
    );
  }
}

export default ReusableStateLogic;
