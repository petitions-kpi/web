"use client"
import { useSearchParams } from 'next/navigation'

const PetitionView = async () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  let data;
  try {
    const response = await fetch(`https://petitions-api.onrender.com/v1/petitions/${id}`, {method: 'GET'});
    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  const date = new Date(data.createdAt);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getUTCFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className="content">
      <div className="petition-info">
          <div className="first-line">
            <div className="petition-name">
              <span className="info">Назва петиції: </span>
              <span className="data">{data.title}</span>
            </div>
            <div className="petition-count">
              <span className="info">Кількість підписів: </span>
              <span className="data">{data.signatures.length}</span>
            </div>
          </div>
          <div className="second-line">
            <span className="info">Автор: </span>
            <span className="data">{data.author.firstName + ' ' + data.author.lastName}</span>
          </div>
          <div className="third-line">
            <span className="info">Дата створення: </span>
            <span className="data">{formattedDate}</span>
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