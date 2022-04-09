// global.d.ts
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.json' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}

// 这里用于扩充window对象上的值
declare interface Window {
  [key: string]: any;
}
