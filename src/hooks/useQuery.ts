import { useLocation } from 'react-router-dom'

/**
 * 解析 URL Query参数
 * @returns {URLSearchParams}
 */
export const useQuery = () => {
  const query: { [x: string]: string } = {}
  const params = new URLSearchParams(useLocation().search)
  params.forEach((val, key) => {
    query[key] = val
  })
  return query
}
