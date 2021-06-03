import React, { PropsWithChildren } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import appConfig from "../config/config";
import { useHistory } from "react-router-dom";

export const AuthProvider: React.FC = (props: PropsWithChildren<{}>) => {
  const history = useHistory();
  const onRedirectCallback = (state: any) => {
    history.push(state?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={appConfig.authDomain}
      clientId={appConfig.authClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};
