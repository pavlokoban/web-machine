'use client';
import React, { useEffect, useState } from 'react';
import styles from './VoteComponent.module.css'; // Файл стилей для компонента

const VoteComponentRu = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [votes, setVotes] = useState<{ [key: string]: number }>({});
  const [options, setOptions] = useState<string[]>([]); // Опции теперь будут загружаться из базы

  // Загружаем данные голосования при первом рендере
  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await fetch('/api/vote/get');
        const data = await res.json();
        setVotes(data.votes);
        setOptions(data.options); // Загрузка опций из базы данных
        console.log(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных голосования:', error);
      }
    };

    fetchVotes();
  }, []);

  // Функция для обработки выбора варианта
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  // Функция для отправки голоса
  const handleVote = async () => {
    if (selectedOption) {
      try {
        const res = await fetch('/api/vote/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ option: selectedOption }),
        });

        const data = await res.json();
        if (data.success) {
          setVotes(data.votes); // Обновляем голоса
          setShowResults(true);
        } else {
          alert('Ошибка при голосовании');
        }
      } catch (error) {
        console.error('Ошибка при голосовании:', error);
      }
    } else {
      alert('Пожалуйста, выберите вариант перед голосованием.');
    }
  };

  const handleReturnToVote = () => {
    setShowResults(false);
  };

  return (
    <div className={styles.voteContainer}>
      <h2>Какой способ продвижения интернет-магазина самый эффективный?</h2>
      {!showResults ? (
        <>
          <form>
            {options.map((option, index) => (
              <div key={index} className={styles.option}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    style={{ marginRight: '10px' }}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
          <button className={styles.voteButton} onClick={handleVote}>
            Голосовать
          </button>
        </>
      ) : (
        <>
          <h3>Результаты голосования</h3>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                {option}: <b>{votes[option]}</b> голосов
              </li>
            ))}
          </ul>
          <button className={styles.returnButton} onClick={handleReturnToVote}>
            Вернуться к голосованию
          </button>
        </>
      )}
    </div>
  );
};

export default VoteComponentRu;
