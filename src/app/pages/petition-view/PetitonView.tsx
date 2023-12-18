'use client';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import { setToken } from '@/app/lib/api/auth/LocalStorageService';

const PetitionView = async () => {
  const router = useRouter();

  const signPetition = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const res = await fetch(apiUrl + '/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      } 
    });
    const data = await res.json();
    if (data.statusCode === 401) {
      const res = await fetch(apiUrl + '/auth/refresh/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      });
      const data = await res.json();
      if (data.statusCode === 404) {
        router.push('/sign-in');
      } else {
        setToken('accessToken', data['accessToken']);
        setToken('refreshToken', data['refreshToken']);
        signPetition();
      }
    } else {
      const resSign = await fetch(apiUrl + `/petitions/${id}/sign`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const signData = await resSign.json();
      if (signData.statusCode === 409) {
        alert(signData.message);
      }
    }
  }

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
        <button onClick={signPetition}>Підписати</button>
      </div>
    </div>
  );
};

export default PetitionView