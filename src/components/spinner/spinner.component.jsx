import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';
import { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  }
}
