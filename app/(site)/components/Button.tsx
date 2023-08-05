'use client';

import { FC } from 'react';
import clsx from 'clsx';
interface Props {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  fulWidth?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  children,
  danger,
  disabled,
  onClick,
  secondary,
  type,
  fulWidth,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        disabled && 'opacity-50 cursor-default',
        fulWidth && 'w-full',
        secondary ? 'text-gray-100' : 'text-white',
        danger &&
          'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !secondary && !danger && 'bg-sky-500 focus-visible:outline-sky-600'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
