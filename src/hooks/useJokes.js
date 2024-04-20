import { useEffect, useState, useCallback } from "react";

export default function useJokes(category = "Any") {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJokes = useCallback(
    async (cat = category) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://v2.jokeapi.dev/joke/${cat}?blacklistFlags=religious,political,racist&type=twopart&amount=10`
        );
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        setJokes(data.jokes || []);
      } catch (e) {
        setError(e.toString());
      } finally {
        setIsLoading(false);
      }
    },
    [category]
  );

  useEffect(() => {
    fetchJokes(category);
  }, [category, fetchJokes]);

  return { jokes, isLoading, error, fetchJokes };
}
