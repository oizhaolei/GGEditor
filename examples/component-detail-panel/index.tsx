import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, EditableLabel } from '@/index';

import data from '../mock/flow.json';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from './Panel';
import ItemPanels from './ItemPanels';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <ItemPanels />
        <Flow className={styles.editorBd} data={data} />
        <div className={styles.editorFt}>
          <NodePanel />
          <EdgePanel />
          <MultiPanel />
          <CanvasPanel />
        </div>
        <EditableLabel />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
