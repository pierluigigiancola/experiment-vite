import { lazy } from "react";

const CODE = import.meta.env.VITE_CODE;

const Routes = lazy(() => import(`./Routes${CODE}.tsx`));

export default Routes;
