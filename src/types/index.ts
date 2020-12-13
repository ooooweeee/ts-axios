export type Method =
  | 'get'
  | 'GET'
  | 'Get'
  | 'delete'
  | 'DELETE'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'Head'
  | 'options'
  | 'OPTIONS'
  | 'Options'
  | 'post'
  | 'POST'
  | 'Post'
  | 'put'
  | 'PUT'
  | 'Put'
  | 'patch'
  | 'PATCH'
  | 'Patch'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
