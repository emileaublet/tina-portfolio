"use client";

import { Provider } from "react-wrap-balancer";
import * as React from "react";

export function BalanceProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
