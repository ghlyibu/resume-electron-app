// global.d.ts
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}

// 这里用于扩充window对象上的值
declare interface Window {
  [key: string]: any;
}
