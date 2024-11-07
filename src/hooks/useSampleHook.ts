import { useState, useEffect } from 'react';

const useSampleHook = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Sample data fetching logic
    const fetchData = async () => {
      // Simulating a fetch request
      const result = await new Promise<string>(resolve =>
        setTimeout(() => resolve('Sample data'), 1000)
      );
      setData(result);
    };

    fetchData();
  }, []);

  return data;
};

export default useSampleHook;
