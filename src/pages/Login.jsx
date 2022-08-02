import React, { useState } from "react";
import blok from "../assets/blok.png";
import google from "../assets/google.png";
import { signIn, signUpProvider } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password, navigate);
  };
  const handleProviderLogin = () => {
    signUpProvider(navigate("/"));
  };
  return (
    <div className="loginContainer">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: " 1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <img
                    src={blok}
                    alt=""
                    width="180"
                    height="180"
                    className="blog"
                  />
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="mb-2 text-uppercase">Login</h2>
                    <form onSubmit={handleLogin}>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          value={email}
                          required
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          value={password}
                          required
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5 register"
                        type="submit"
                        style={{ borderRadius: " 1rem" }}
                      >
                        Login
                      </button>
                      <hr />
                      <button
                        className="btn btn-outline-light btn-lg px-5 register"
                        type="submit"
                        style={{ borderRadius: " 1rem" }}
                        onClick={handleProviderLogin}
                      >
                        with
                        <img
                          src={google}
                          width="80"
                          height="30"
                          alt=""
                          className="m-2"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
