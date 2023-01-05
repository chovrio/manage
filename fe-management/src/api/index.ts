import request from './request'

// 登录返回tokan
interface ILogin {
  name: string
  password: string
}
interface ManageResult<T> {
  code: number
  message: string
  result: T
}
type PromiseRes<T> = Promise<ManageResult<T>>
// 登录返回接口
interface ILoginRes {
  token: string
}
// 当前用户信息
interface UserInfoRes {
  menus: []
}
export const Login = (data: ILogin): PromiseRes<ILoginRes> =>
  request.post('/user/login', data)
// 获取当前登录用户的信息
export const getUserInfo = (): PromiseRes<UserInfoRes> =>
  request.get('user/info')
