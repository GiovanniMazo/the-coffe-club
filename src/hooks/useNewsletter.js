import { useState } from 'react';

const API_URL = "http://localhost:4000/api";

const useNewsletter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Error al suscribirse.');
      }
    } catch (err) {
      setError('❌ No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error, success };
};

export default useNewsletter;