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
    <div className="Container">
      <section className="vh-25 gradient-custom">
        <div className="container py-3 h-25">
          <div className="row d-flex justify-content-center align-items-center h-25">
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
                    <hr />
                    <form onSubmit={handleLogin}>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          value={email}
                          required
                          className="form-control form-control-lg"
                          placeholder="Enter your email..."
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          value={password}
                          required
                          id="typePasswordX"
                          className="form-control form-control-lg my-2"
                          placeholder="Enter your password..."
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <hr />
                      <button
                        className="btn btn-outline-light btn-lg px-5 register d-flex d-inline-flex me-1 mt-4"
                        type="submit"
                        style={{ borderRadius: " 1rem" }}
                      >
                        Login
                      </button>
                      <button
                        className="btn btn-outline-light btn-lg px-5 register d-flex d-inline-flex mt-4 "
                        type="submit"
                        style={{ borderRadius: " 1rem" }}
                        onClick={handleProviderLogin}
                      >
                        with
                        <img
                          src={google}
                          width="60"
                          height="30"
                          alt=""
                          className="pt-2 ps-1"
                        />
                      </button>
                      <button
                        className="btn btn-outline-light btn-lg px-5 register mt-1"
                        type="submit"
                        style={{ borderRadius: " 1rem" }}
                        onClick={() => navigate("/register")}
                      >
                        <small>
                          Don't You Have An Account Please Register Here
                        </small>
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
