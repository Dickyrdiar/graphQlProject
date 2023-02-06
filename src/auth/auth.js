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
      const auth0 = await createAuth0Client({
        domain: AUTH_CONFIG.domain,
        clientId: AUTH_CONFIG.client_id,
      });

      setAuth0client(auth0);

      const isAuthenticated = await auth0client.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0client.getUser();
        setUser(user);
      }

      setIsLoading(false);
    };

    initAuth0();
  }, []);

  const handleLoginWithGithub = async (event) => {
    event.preventDefault();
    await auth0Client.loginWithPopup({
      connection: "github",
    });

    console.log("click");
  };

  const handleLoginWithGmail = async (event) => {
    event.preventDefault();
    await auth0client.loginWithPopup({
      connection: "google-oauth2",
    });

    console.log("click");
  };

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
    handleLogout,
    isLoading,
    isAuthenticated,
    user,
    showPopup,
    handleLoginWithGithub,
    handleLoginWithGmail,
    handleClickLogin,
    handleClickClose,
  };
};

export default Authentication;
