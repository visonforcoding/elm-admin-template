import request from '@/utils/request'

export function fetchDocList(params) {
  return request({
    url: '/document/getList',
    method: 'get',
    params
  })
}

//获取单个文章
export function fetchDoc(id) {
  return request({
    url: '/document/detail',
    method: 'get',
    params: { id }
  })
}

//获取单个文章
export function fetchDocDetail(id) {
  return request({
    url: '/document/docDetail',
    method: 'get',
    params: { id }
  })
}
