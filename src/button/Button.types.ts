import * as React from "react";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean;
  lookDisabled?: boolean;
  children: React.ReactNode;
};
