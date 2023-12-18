'use client';
import { useRouter } from 'next/navigation';
import { setToken } from '@/app/lib/api/auth/LocalStorageService';
import React, { useState, ChangeEvent, FormEvent } from 'react';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const PetitionCreate = () => {

  const router = useRouter();

  const [inputValue, setInputValue] = useState<string>('');
  const [textareaValue, setTextareaValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const createPetition = async () => {
    if (!inputValue) return void alert('Введіть назву петиції');
    if (!textareaValue) return void alert('Введіть текст петицій');
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
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`
        }
      });
      const data = await res.json();
      if (data.statusCode === 404) {
        router.push('/sign-in');
      } else {
        setToken('accessToken', data['accessToken']);
        setToken('refreshToken', data['refreshToken']);
        createPetition();
      }
    } else {
      const createPet = await fetch(apiUrl + `/petitions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          title: inputValue,
          text: textareaValue
        })
      });
      const signData = await createPet.json();
      if (createPet.ok) {
        router.push(`/pages/petition-view?id=${signData.id}`)
      } else {
        alert(signData.message[0]);
      }
    }
  };  

  return (
    <div className="content">
      <div className="label-name">
        <p>Назва петиції</p>
      </div>
      <div className="input-name">
        <input type="text" placeholder="Назва петиції" value={inputValue} onChange={handleInputChange}/>
      </div>
      <div className="label-name">
        <p>Текст петиції</p>
      </div>
      <div className="textarea-text">
        <textarea rows={10} placeholder="Напишіть про петицію" value={textareaValue} onChange={handleTextareaChange}></textarea>
      </div>
      <div className="button">
        <button onClick={createPetition}>Створити</button>
      </div>
  </div>
  );
};

export default PetitionCreate