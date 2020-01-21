import React from 'react';
import { ContextMenu } from '@/index';
import { Menu } from 'antd';

const ContextMenus = () => (
  <ContextMenu
    renderContent={(item, position, hide) => {
      const { x: left, y: top } = position;

      return (
        <div style={{ position: 'absolute', top, left }}>
          <Menu mode="vertical" selectable={false} onClick={hide}>
            <Menu.Item>Option 1</Menu.Item>
            <Menu.Item>Option 2</Menu.Item>
            <Menu.Item>Option 3</Menu.Item>
          </Menu>
        </div>
      );
    }}
  />
);

export default ContextMenus;
