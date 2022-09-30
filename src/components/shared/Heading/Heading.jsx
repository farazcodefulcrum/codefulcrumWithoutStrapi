import React from 'react';

import './Heading.scss';

export default function Heading({variant, align, children, className, color}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <div
        className={
          'heading' +
          (color === 'white' ? ' heading-white' : '') +
          (variant === '64'
            ? ' size-64'
            : variant === '58'
            ? ' size-58'
            : variant === '52'
            ? ' size-52'
            : variant === '48'
            ? ' size-48'
            : variant === '42'
            ? ' size-42'
            : variant === '37'
            ? ' size-37'
            : variant === '32'
            ? ' size-32'
            : variant === '28'
            ? ' size-28'
            : variant === '26'
            ? ' size-26'
            : variant === '24'
            ? ' size-24'
            : 'def') +
          ' ' +
          (className ? className : '')
        }
      >
        {children}
      </div>
    </div>
  );
}
