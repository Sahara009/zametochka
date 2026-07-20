import type { ReactNode } from "react";

type BrowserShellProps = {
  children: ReactNode;
};

export function BrowserShell({ children }: BrowserShellProps) {
  return (
    <div className="site-browser-shell">
      <div className="site-browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <div>zametoshka.local</div>
      </div>
      {children}
    </div>
  );
}
