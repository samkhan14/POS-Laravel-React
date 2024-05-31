import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../auth/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Spinner } from "../components/Spinner"; // Adjust the import path if necessary

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (username === "" || password === "") {
      setError("Both fields are required.");
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Both fields are required.",
      });
      return;
    }

    setLoading(true);
    let item = { username, password };

    try {
      let result = await Api.post("/api/login", item);
      console.log(result);
      setLoading(false);
      navigate("/dashboard");
      // Navigate to the dashboard or handle success appropriately
      // Swal.fire({
      //   icon: "success",
      //   title: "Login Successful",
      //   text: "You have successfully logged in!",
      // });
    } catch (error) {
      console.error("Error during login:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Please check your credentials and try again.";
      setError(errorMessage);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* <!-- Register --> */}
          <div className="card">
            <div className="card-body">
              {/* <!-- Logo --> */}
              <div className="app-brand justify-content-center">
                <Link to="/dashboard" className="app-brand-link gap-2">
                  <span className="app-brand-text demo text-body fw-bolder">
                    POS
                  </span>
                </Link>
              </div>
              {/* <!-- /Logo --> */}
              <p className="text-center mb-4">Please sign-in to your account</p>

              {/* {error && <div className="alert alert-danger">{error}</div>} */}

              <form
                id="formAuthentication"
                className="mb-3"
                onSubmit={handleLogin}
              >
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    name="username"
                    placeholder="Enter your User Name"
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                    disabled={loading}
                  >
                    Sign in
                  </button>
                </div>
                {loading && (
                  <div className="text-center">
                    <Spinner />
                  </div>
                )}
              </form>
            </div>
          </div>
          {/* <!-- /Register --> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
