import { useState } from "react";
import "./RegisterForm.css"; // Import du nouveau fichier CSS
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="warpper">
      <form action="">
        <h1>Inscription</h1>
        <div className="input-box">
          <input type="text" placeholder="Nom" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Prénom" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Mot de passe"
            required
          />
          <FaLock className="icon" />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>
        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <select required>
            <option value="" disabled selected>
              Sélectionnez votre type
            </option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </select>
        </div>
        <button type="submit">S&apos;inscrire</button>
        <div className="register-link">
          <p>
            Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
