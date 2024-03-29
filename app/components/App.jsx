import uuid from 'node-uuid';
import AltContainer from 'alt-container';
import React from 'react';
import Paths from './Paths.jsx';
import PathActions from '../actions/PathActions';
import PathStore from '../stores/PathStore';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="add-path" onClick={this.addPath}>+</button>
        <AltContainer
          stores={[PathStore]}
          inject={{
            paths: () => PathStore.getState().paths
          }}
        >
          <Paths />
        </AltContainer>
      </div>
    );
  }

  addPath() {
    PathActions.create({name: 'New Path'});
  }
}
