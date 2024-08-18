"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IpInfo = () => {
  const [ipData, setIpData] = useState<{ ip: string; country: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Используем API ipinfo.io для получения данных о пользователе
        // 476f3ed8dbaf96
        const response = await axios.get('https://ipinfo.io/json?token=476f3ed8dbaf96');
        const { ip, country } = response.data;
        setIpData({ ip, country });
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontWeight: '700', marginBottom: '10px' }}>Now we know something about you)</p>
      {ipData ? (
        <>
          <p>Your IP: {ipData.ip}</p>
          <p>You are now here: {ipData.country}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div style={{ marginTop: '20px', marginBottom: '50px' }}>
        <p>Developer? Join us!</p>
        <br/>
        <br/>
        <br/>

        <a
          href="https://example.com"
          style={{
            padding: '10px 20px',
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '36px',
            marginTop: '12px'
          }}
        >
            Job vacancies
        </a>
      </div>
    </div>
  );
};

export default IpInfo;
