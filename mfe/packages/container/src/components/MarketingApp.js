import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/App";

export default function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname === nextPathname) {
          return;
        }

        history.push(nextPathname);
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}
