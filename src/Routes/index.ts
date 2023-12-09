import { ComponentType, lazy } from "react";

const Route = import.meta.glob(`./Routes[0-9]+.tsx`);

const importRoute = Route[`./Routes${import.meta.env.VITE_CODE}.tsx`];

if (!importRoute) {
  throw new Error(`Route not found for code ${import.meta.env.VITE_CODE}`);
}

export default lazy(importRoute as () => Promise<{ default: ComponentType }>);
