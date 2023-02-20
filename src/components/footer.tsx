import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="flex items-center text-sm sm:text-tiny justify-between">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexanderbluhm/dasordass-app" className="text-brand-500 hover:text-blue-500 transition-colors font-medium p-1 -m-1 dark:text-brand-300">
        GitHub
      </a>
    </footer>
  );
};
