import React, { Fragment } from 'react';
import { Command } from '@/index';
import upperFirst from 'lodash/upperFirst';

import { Divider, Tooltip } from 'antd';
import { EditorCommand } from '@/common/constants/index.js';
import IconFont from './IconFont';
import styles from './index.less';

const FLOW_COMMAND_LIST = [
  EditorCommand.Undo,
  EditorCommand.Redo,
  '|',
  EditorCommand.Copy,
  EditorCommand.Paste,
  EditorCommand.Remove,
  '|',
  EditorCommand.ZoomIn,
  EditorCommand.ZoomOut,
];

const ItemPanels = () => (
  <Fragment>
    {FLOW_COMMAND_LIST.map(name => {
      if (name === '|') {
        return <Divider type="vertical" />;
      }

      return (
        <Command key={name} name={name} className={styles.command} disabledClassName={styles.commandDisabled}>
          <Tooltip title={upperFirst(name)}>
            <IconFont type={`icon-${name}`} />
          </Tooltip>
        </Command>
      );
    })}
  </Fragment>
);

export default ItemPanels;
