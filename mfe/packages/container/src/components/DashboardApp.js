import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/App";

export default function DashboardApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}
