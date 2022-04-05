import React from 'react';
interface Iprops {
    /**
     * @description 标题
     */
    text: string;
    /**
     * @description 样式
     */
    styles: React.CSSProperties
}

function Title({text,styles}:Iprops){
    return (<div style={styles}>{text}</div>)
}

export default Title;