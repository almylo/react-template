import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url: string, headers?: any) => {
  const [data, setData] = useState<any>();
   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          url, {
            headers
          // headers: {'Cache-Control': 'max-age=3600'}
        });
        setData(response);
      } catch (error) {
        console.error(error)
      }
        setLoading(false);
    };
    
    fetchData();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return {
    data,
    loading,
  };
};

export default useFetch;