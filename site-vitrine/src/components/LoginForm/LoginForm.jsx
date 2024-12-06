import { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Importation de useNavigate
import axios from "axios"; // Pour envoyer des requêtes au backend

const LoginForm = () => {
  const [email, setEmail] = useState(""); // Stocke l'email saisi
  const [password, setPassword] = useState(""); // Stocke le mot de passe saisi
  const [passwordVisible, setPasswordVisible] = useState(false); // Affiche ou masque le mot de passe
  const [errorMessage, setErrorMessage] = useState(""); // Message d'erreur pour les retours API
  const navigate = useNavigate(); // Hook pour la navigation

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
    setErrorMessage(""); // Réinitialise le message d'erreur

    try {
      // Requête POST vers l'API
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/login`, // Correct usage of template literals
        {
          email,
          password,
        }
      );

      console.log("Réponse de l'API :", response.data);

      // Enregistrer le token dans le localStorage
      localStorage.setItem("token", response.data.token);

      // Rediriger vers /dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setErrorMessage(
        error.response?.data?.error ||
          "Une erreur est survenue. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="warpper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Met à jour l'email
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Met à jour le mot de passe
            required
          />
          <FaLock className="icon" />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Affiche le message d'erreur */}
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
