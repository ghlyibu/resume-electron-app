import React from 'react';
import './index.less';
interface Iprops {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({ text, styles }: Iprops) {
  return (
    <div style={styles} className="title">
      {text}
    </div>
  );
}

export default Title;
