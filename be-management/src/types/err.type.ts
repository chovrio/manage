// 错误信息格式
export interface IError {
  code: number;
  message: string;
  result: any;
}
export interface IErrConstans {
  [key: string]: IError;
}
