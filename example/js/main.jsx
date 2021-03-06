import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Molecule3d from '../../src/main.js';
import Settings from './settings.jsx';
// import modelData from './1kbu';
// import modelData from './3aid_model_data';
// import styles from './3aid_styles';
import modelData from './bipyridine_model_data';
import styles from './bipyridine_styles';
import orbital from './orbital';

const shapes = [{
  type: 'Arrow',
  color: '#00ff00',
  start: {
    x: 0,
    y: 0,
    z: -2.5,
  },
  end: {
    x: 0,
    y: 0,
    z: 3,
  },
}];

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modelData,
      styles,
      shapes,
      orbital,
      selectedAtomIds: [],
      atomLabelsShown: false,
      backgroundColor: undefined,
      backgroundOpacity: undefined,
      selectionType: undefined,
    };
  }

  onChangeMolecule = (newModelData, newStyles) => {
    this.setState({ modelData: newModelData, styles: newStyles });
  }

  onChangeSelection = (newSelectedAtomIds) => {
    this.setState({ selectedAtomIds: newSelectedAtomIds });
  }

  onChangeModelData = (newModelData) => {
    this.setState({ modelData: newModelData });
  }

  onChangeStyles = (newStyles) => {
    this.setState({ styles: newStyles });
  }

  onChangeShapes = (newShapes) => {
    this.setState({ shapes: newShapes });
  }

  onChangeBackgroundColor = (newBackgroundColor) => {
    this.setState({ backgroundColor: newBackgroundColor });
  }

  onChangeBackgroundOpacity = (newBackgroundOpacity) => {
    this.setState({ backgroundOpacity: newBackgroundOpacity });
  }

  onChangeSelectionType = (newSelectionType) => {
    this.setState({ selectionType: newSelectionType });
  }

  onChangeAtomLabelsShown = (newAtomLabelsShown) => {
    this.setState({ atomLabelsShown: newAtomLabelsShown });
  }

  onChangeOrbital = (newOrbital) => {
    this.setState({ orbital: newOrbital });
  }


  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Molecule3d
          {...this.state}
          onChangeSelection={this.onChangeSelection}
        />
        <Settings
          {...this.state}
          onChangeMolecule={this.onChangeMolecule}
          onChangeSelection={this.onChangeSelection}
          onChangeModelData={this.onChangeModelData}
          onChangeStyles={this.onChangeStyles}
          onChangeShapes={this.onChangeShapes}
          onChangeBackgroundColor={this.onChangeBackgroundColor}
          onChangeBackgroundOpacity={this.onChangeBackgroundOpacity}
          onChangeSelectionType={this.onChangeSelectionType}
          onChangeAtomLabelsShown={this.onChangeAtomLabelsShown}
          onChangeOrbital={this.onChangeOrbital}
        />
      </div>
    );
  }
}

render(
  <Example />,
  document.querySelector('.container')
);
