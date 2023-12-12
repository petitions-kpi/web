const PetitionView = () => {
  return (
    <div className="content">
      <div className="petition-info">
          <div className="first-line">
            <div className="petition-name">
              <span className="info">Назва петиції: </span>
              <span className="data">Дати премію Шемседінову</span>
            </div>
            <div className="petition-count">
              <span className="info">Кількість підписів: </span>
              <span className="data">1000</span>
            </div>
          </div>
          <div className="second-line">
            <span className="info">Автор: </span>
            <span className="data">Leonid</span>
          </div>
          <div className="third-line">
            <span className="info">Дата створення: </span>
            <span className="data">10.10.2011</span>
          </div>
          <hr />
      </div>
      <div className="button">
        <button>Підписати</button>
      </div>
    </div>
  );
};

export default PetitionView