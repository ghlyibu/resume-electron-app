import { ComponentType } from 'react';
import _ from 'lodash';
export interface WidgetsType {
  [x: string]: ComponentType<any> | undefined;
}
function mixinWidgets(widgets: WidgetsType): void {
  _.each(widgets, (widget: any, k) => {
    const { displayName, attrs } = widget;
    if (!_.includes(displayName, 'styled') || widget.displayName === k) {
      return;
    }
    widget.displayName = k;
    // const widgetClassName = k === 'Container' ? className : k;
    // const attrsFn = attrs[attrs.length - 1];
    // if (_.isFunction(attrsFn)) {
    //   const newAttrsFn = (props: any) => {
    //     const originProps = attrsFn(props);
    //     originProps.className = `${originProps.className ? `${originProps.className} ` : ''}${widgetClassName}`;
    //     return originProps;
    //   };
    //   attrs[attrs.length - 1] = newAttrsFn;
    // } else if (attrs.length === 0) {
    //   widget.attrs = [{ className: widgetClassName }];
    // }
  });
}
export default mixinWidgets;
