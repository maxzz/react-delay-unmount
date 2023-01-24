import { classNames } from '@/utils/classnames';
import React, { HTMLAttributes } from 'react';

export function StartTestButton({ children, className, ...rest }: HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames("px-2 py-2 border rounded border-zinc-200 text-zinc-100 hover:bg-zinc-900 focus:bg-zinc-900 focus:outline-none", className)}
            {...rest}
        >
            {children}
        </button>
    );
}
