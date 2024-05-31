import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../auth/Api"; // Adjust the import path as necessary
import { Spinner } from "../components/Spinner";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Api.get("/api/logout")
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        navigate("/");
      });
  }, [navigate]);

  return (
    <div>
      <Spinner /> Loggin out .........
    </div>
  );
};
