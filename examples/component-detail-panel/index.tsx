import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, EditableLabel, ItemPopover } from '@/index';
import { Popover } from 'antd';

import data from '../mock/flow.json';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from './Panel';
import ItemPanels from './ItemPanels';
import ContextMenus from './ContextMenus';
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
        <ContextMenus />
        <ItemPopover
          renderContent={(item, position) => {
            const { minY: top, centerX: left } = position;

            return (
              <Popover visible={true} title="Title" content="Content">
                <div style={{ position: 'absolute', top, left }} />
              </Popover>
            );
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
