import React from 'react'
import s from './Paginator.module.css'

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanget,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map(p => {
        return (
          <span
            className={currentPage === p && s.selectetPage}
            onClick={() => {
              onPageChanget(p)
            }}
          >
            {p}
          </span>
        )
      })}
    </div>
  )
}

export default Paginator
