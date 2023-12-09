import { lazy } from "react";

const Route = lazy(() => import(`./Routes${import.meta.env.VITE_CODE}.tsx`));

export default Route;
