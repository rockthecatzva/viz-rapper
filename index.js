import { PureComponent } from "react";
import PropTypes from "prop-types";

export default class VizRapper extends PureComponent {
  static propTypes = {
    scrollActive: PropTypes.bool.isRequired,
    onInitialize: PropTypes.func,
    onIntroduction: PropTypes.func,
    dimensions: PropTypes.func
  };

  state = {
    hasActivated: false,
    hasInitialized: false
  };

  onInitialize = () =>
    this.props.onInitialize ? this.props.onInitialize() : true;

  onIntroduction = () =>
    this.props.onIntroduction ? this.props.onIntroduction() : true;

  onDataUpdate = hasActivated =>
    this.props.onDataUpdate ? this.props.onDataUpdate(hasActivated) : false;

  onDeactivate = () => {
    if (this.props.dimensions) {
      this.setState({
        hasActivated: false,
        hasInitialized: false,
        dimensions: this.props.dimensions()
      });
    }
  };

  componentDidMount() {
    if (this.onInitialize()) {
      this.setState({ hasInitialized: true });
    }
    if (this.props.dimensions) {
      window.addEventListener("resize", this.onDeactivate);
    }
  }

  componentWillUnmount() {
    if (this.props.dimensions) {
      window.removeEventListener("resize", this.onDeactivate);
    }
  }

  componentDidUpdate() {
    //has it initalizeed?
    if (this.state.hasInitialized === false) {
      //has not initialzied
      if (this.onInitialize()) {
        this.setState({ hasInitialized: true });
      }
      return;
    }

    //it has initialized, but has  it activated?
    if (this.state.hasActivated === false && this.props.scrollActive === true) {
      if (this.onIntroduction) {
        this.setState({ hasActivated: true });
      }
      return;
    }

    //it has initialized and introduction'd
    //run the update func
    this.onDataUpdate(this.state.hasActivated);
  }

  render() {
    return this.props.render();
  }
}
