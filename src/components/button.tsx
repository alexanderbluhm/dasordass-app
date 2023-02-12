import clsx from "clsx";
import React, { forwardRef, ButtonHTMLAttributes, JSXElementConstructor, useRef } from "react";

// adapted from: https://github.com/vercel/commerce/blob/main/site/components/ui/Button/Button.tsx
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

// eslint-disable-next-line react/display-name
export const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const { className, children, width, loading = false, disabled = false, style = {}, Component = "button", ...rest } = props;
  const rootClassName = clsx(
    className,
    "inline-flex h-9 items-center dark:[text-shadow:0_1px_1px_rgb(0_0_0_/_0.7)] relative text-sm sm:text-tiny dark:text-neutral-200 bg-white focus:outline-none focus:ring-2 dark:hover:bg-brand-700 hover:bg-brand-100 font-medium dark:bg-brand-800 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 px-3.5 py-1.5 rounded-md border border-black/5 hover:border-black/10 shadow-input shadow-black/5 hover:shadow-black/10 transition-all dark:shadow-black/10 !outline-none"
  );
  return (
    <Component ref={buttonRef} disabled={disabled} style={{ width, ...style }} className={rootClassName} {...rest}>
      {children}
      {loading && (
        <svg className="w-5 h-5 ml-1 animate-spin" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 4.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Zm5.018 1.982a.75.75 0 0 1 0 1.06l-2.475 2.476a.75.75 0 1 1-1.06-1.06l2.474-2.476a.75.75 0 0 1 1.06 0ZM6.232 16.707a.75.75 0 0 0 1.06 1.06l2.476-2.474a.75.75 0 1 0-1.06-1.06l-2.476 2.474Zm10.475 1.06a.75.75 0 0 0 1.06-1.06l-2.474-2.475a.75.75 0 0 0-1.06 1.06l2.474 2.476ZM7.293 6.233a.75.75 0 0 0-1.06 1.06l2.474 2.476a.75.75 0 1 0 1.06-1.06L7.294 6.231ZM12 15.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Zm3.5-3.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm-11.25-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
          />
        </svg>
      )}
    </Component>
  );
});
