import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/App";

export default function AuthApp({ onSignIn }) {
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
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}
