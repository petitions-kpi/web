import "../styles/header.css";

const Header = () => {
  return (
      <div className="wrapper">
        <div className="logo-section">
          <img src="/img/logo-1.png" alt="KPI Petition" />
        </div>
        <div className="text-section">
          <p className="text">Електронні петиції КПІ</p>
        </div>
      </div>
  );
};

export default Header;