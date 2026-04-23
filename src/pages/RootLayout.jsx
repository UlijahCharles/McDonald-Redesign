import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import InitialLoad from "../components/InitialLoad";

function RootLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return <>{loading ? <InitialLoad /> : <Outlet />}</>;
}
export default RootLayout;
