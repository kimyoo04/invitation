import clsx from 'clsx'

import React, { forwardRef, PropsWithChildren, Ref } from 'react'

interface CenterProps {
  className?: string
}

function ColumnCenter({ className, children }: PropsWithChildren<CenterProps>) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      id: 'column-center',
      className: clsx(['flex flex-col items-center justify-center', className]),
    },
    children,
  )
}

function RowCenter({ className, children }: PropsWithChildren<CenterProps>) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      id: 'row-center',
      className: clsx(['flex items-center justify-center', className]),
    },
    children,
  )
}

export const Center = {
  Column: ColumnCenter,
  Row: RowCenter,
}
