import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/posts/getList',
    method: 'get',
    params
  })
}

//获取单个文章
export function fetchPost(id) {
  return request({
    url: '/posts/detail',
    method: 'get',
    params: { id }
  })
}
