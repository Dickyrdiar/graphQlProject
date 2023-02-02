/* eslint-disable no-undef */
import { createAuth0Client } from "@auth0/auth0-spa-js";
import { useEffect, useState } from "react";
import { AUTH_CONFIG } from "./auth_config";

const Authentication = () => {
  const [auth0client, setAuth0client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0Client = await createAuth0Client({
        domain: AUTH_CONFIG.domain,
        clientId: AUTH_CONFIG.client_id,
      });

      setAuth0client(auth0client);

      if (window.location.search.includes("code=")) {
        const { appStore } = await auth0Client.handleRedirectCallBack();
        onRedirectCallback(appStore);
      }

      const isAuthenticated = await auth0Client.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0Client.getUser();
        setUser(user);
      }

      setIsLoading(false);
    };

    initAuth0();
  }, []);

  const handleLogin = async () => {
    await auth0client.loginWithRedirect({
      redirect_uri: window.location.origin,
    });
  };

  console.log("user", user);

  const handleLogout = () => {
    auth0client.logout({
      returnTo: window.location.origin,
    });
  };

  const handleClickLogin = () => {
    setShowPopup(true);
  };

  const handleClickClose = () => {
    setShowPopup(false);
  };

  return {
    handleLogin,
    handleLogout,
    isLoading,
    isAuthenticated,
    user,
    showPopup,
    handleClickLogin,
    handleClickClose,
  };
};

export default Authentication;
