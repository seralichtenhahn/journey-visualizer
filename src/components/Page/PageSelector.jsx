import React from 'react'
import usePageData from '@/hooks/usePageData'
import IconChevronRight from '@/components/Icon/IconChevronRight'
import IconChevronLeft from '@/components/Icon/IconChevronLeft'
import clsx from 'clsx'

export default function PageSelector() {
  const { page, setPage, totalPages } = usePageData()
  return (
    <div className="absolute bottom-[40%] transform mb-2 translate-y-1/2 md:mb-0 md:-translate-y-1/2 -translate-x-1/2 md:-translate-x-0 md:bottom-8 left-1/2">
      <div className="flex px-4 py-2 space-x-2 bg-white rounded-full shadow-lg">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <IconChevronLeft />
        </button>
        <div>
          {page + 1}/{totalPages}
        </div>
        <button
          disabled={page + 1 === totalPages}
          onClick={() => setPage(page + 1)}
          className="disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  )
}
