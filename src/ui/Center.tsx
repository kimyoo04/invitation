import clsx from 'clsx'

import React, { PropsWithChildren } from 'react'

interface CenterProps {
  className?: string
}

function ColumnCenter({ className, children }: PropsWithChildren<CenterProps>) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: clsx(['flex flex-col items-center justify-center', className]),
    },
    children,
  )
}

function RowCenter({ className, children }: PropsWithChildren<CenterProps>) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: clsx(['flex items-center justify-center', className]),
    },
    children,
  )
}

const Center = {
  Column: ColumnCenter,
  Row: RowCenter,
}

export default Center
