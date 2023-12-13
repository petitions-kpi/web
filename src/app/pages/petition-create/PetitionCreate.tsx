const PetitionCreate = () => {
  return (
    <div className="content">
      <div className="label-name">
        <p>Назва петиції</p>
      </div>
      <div className="input-name">
        <input type="text" placeholder="Назва петиції"/>
      </div>
      <div className="label-name">
        <p>Текст петиції</p>
      </div>
      <div className="textarea-text">
        <textarea rows={10} placeholder="Напишіть про петицію"></textarea>
      </div>
      <div className="button">
        <button>Створити</button>
      </div>
  </div>
  );
};

export default PetitionCreate