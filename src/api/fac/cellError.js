import request from '@/utils/request'

// 查询电解槽故障列表
export function listCellError(query) {
  return request({
    url: '/fac/cellError/list',
    method: 'get',
    params: query
  })
}
// export function listCellError(condition) {
//   return request({
//     url: `/fac/cellError/list?pageNum=${condition.pageNum}&pageSize=${condition.pageSize}&params%5BbeginAcquisitionTime%5D=${condition.beginAcquisitionTime}&params%5BendAcquisitionTime%5D=${condition.endAcquisitionTime}`,
//     method: 'get',
//   })
// }
// 查询电解槽故障详细
export function getCellError(id) {
  return request({
    url: '/fac/cellError/' + id,
    method: 'get'
  })
}

// 新增电解槽故障
export function addCellError(data) {
  return request({
    url: '/fac/cellError',
    method: 'post',
    data: data
  })
}

// 修改电解槽故障
export function updateCellError(data) {
  return request({
    url: '/fac/cellError',
    method: 'put',
    data: data
  })
}

// 删除电解槽故障
export function delCellError(id) {
  return request({
    url: '/fac/cellError/' + id,
    method: 'delete'
  })
}
