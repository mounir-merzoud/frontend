import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Pour la redirection
import axios from "axios";
import "./RegisterForm.css"; // Import du fichier CSS
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // État pour afficher/cacher le mot de passe
  const [firstname, setFirstname] = useState(""); // État pour le prénom
  const [lastname, setLastname] = useState(""); // État pour le nom
  const [email, setEmail] = useState(""); // État pour l'email
  const [password, setPassword] = useState(""); // État pour le mot de passe
  const [confirmPassword, setConfirmPassword] = useState(""); // État pour la confirmation du mot de passe
  const [type, setType] = useState(""); // État pour le type
  const [errorMessage, setErrorMessage] = useState(""); // Message d'erreur
  const [successMessage, setSuccessMessage] = useState(""); // Message de succès

  const navigate = useNavigate(); // Hook pour la navigation

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Vérifier que les mots de passe correspondent
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      // Requête POST vers l'API pour l'inscription
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/signup`, // Correct usage of template literals
        {
          firstname,
          lastname,
          email,
          password,
          type,
        }
      );

      console.log("Réponse de l'API :", response.data);

      setSuccessMessage(
        "Inscription réussie ! Vous pouvez maintenant vous connecter."
      );
      // Rediriger vers la page de connexion après succès
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Petite pause avant la redirection
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      setErrorMessage(
        error.response?.data?.error ||
          "Une erreur est survenue. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="warpper">
      <form onSubmit={handleRegister}>
        <h1>Inscription</h1>

        {/* Messages de succès et d'erreur */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="input-box">
          <input
            type="text"
            placeholder="Nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>
        <div className="input-box">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="" disabled>
              Sélectionnez votre type
            </option>
            <option value="Admin">Admin</option>
            <option value="Employee">Employé</option>
            <option value="Acheteur/Vendeur">Acheteur/Vendeur</option>
          </select>
        </div>
        <button type="submit">{"S'inscrire"}</button>
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
