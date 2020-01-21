import React from 'react';
import { Item, ItemPanel } from '@/index';

import styles from './index.less';

const ItemPanels = () => (
  <ItemPanel className={styles.editorHd}>
    <Item
      className={styles.item}
      model={{
        shape: 'circle',
        size: 100,
        label: 'circle',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB1IRuSnRr0gK0jSZFnXXbRRXXa-110-112.png"
        width="55"
        height="56"
        draggable={false}
      />
    </Item>
    <Item
      className={styles.item}
      model={{
        shape: 'rect',
        size: [100, 50],
        label: 'rect',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB1reKOnUT1gK0jSZFrXXcNCXXa-178-76.png"
        width="89"
        height="38"
        draggable={false}
      />
    </Item>
    <Item
      className={styles.item}
      model={{
        shape: 'ellipse',
        size: [100, 50],
        label: 'ellipse',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB1AvmVnUH1gK0jSZSyXXXtlpXa-216-126.png"
        width="108"
        height="63"
        draggable={false}
      />
    </Item>
    <Item
      className={styles.item}
      model={{
        shape: 'diamond',
        size: 100,
        label: 'diamond',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB1EB9VnNz1gK0jSZSgXXavwpXa-178-184.png"
        width="89"
        height="92"
        draggable={false}
      />
    </Item>
    <Item
      className={styles.item}
      model={{
        shape: 'triangle',
        size: 100,
        label: 'triangle',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB12sC2nKH2gK0jSZJnXXaT1FXa-126-156.png"
        width="63"
        height="78"
        draggable={false}
      />
    </Item>
    <Item
      className={styles.item}
      model={{
        shape: 'star',
        size: 100,
        label: 'star',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB1m4O1nO_1gK0jSZFqXXcpaXXa-194-198.png"
        width="97"
        height="99"
        draggable={false}
      />
    </Item>
    <Item
      className={styles.item}
      model={{
        shape: 'image',
        size: 100,
        label: 'image',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB1eP94nKH2gK0jSZJnXXaT1FXa-112-134.png"
        width="56"
        height="67"
        draggable={false}
      />
    </Item>
    <Item
      className={styles.item}
      model={{
        shape: 'bizNode',
        size: [112, 66],
        label: 'bizNode',
        center: 'topLeft',
      }}
    >
      <img
        src="https://gw.alicdn.com/tfs/TB1_cbfnHj1gK0jSZFuXXcrHpXa-244-132.png"
        width="112"
        height="66"
        draggable={false}
      />
    </Item>
  </ItemPanel>
);

export default ItemPanels;
