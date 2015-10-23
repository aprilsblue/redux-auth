import React, { PropTypes } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import Spinner from "react-loader";

class ButtonLoader extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
    loading: PropTypes.bool,
    spinConfig: PropTypes.object,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    icon: <Glyphicon glyph="heart" />,
    loading: false,
    spinConfig: {
      lines: 10,
      length: 4,
      width: 1,
      radius: 3
    },
    children: <span>Submit</span>
  }

  renderIcon () {
    let icon = (this.props.loading)
      ? <Spinner {...this.props.spinConfig} loaded={false} />
      : <this.props.icon />;

    return (
      <div style={{
        position: "relative",
        display: "inline-block",
        marginRight: "6px",
        width: "10px",
        height: "10px",
        top: "1px"
      }}>
        {icon}
      </div>
    );
  }

  render () {
    return (
      <Button onClick={this.props.onClick}
              disabled={this.props.disabled || this.props.loading}
              bsStyle={this.props.bsStyle}
              className={this.props.className}
              type={this.props.type}
              bsSize={this.props.bsSize}>
        {this.renderIcon()} {this.props.children}
      </Button>
    );
  }
}

export default ButtonLoader;