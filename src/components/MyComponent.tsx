import React, { useState, useEffect } from 'react';
import { getApiBaseUrl } from '../../config'; // Asegúrate de importar correctamente tu archivo

interface Page {
  id: number;
  slug: string;
}

const MyComponent: React.FC = () => {
  const [allPages, setAllPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${getApiBaseUrl()}/wp-json/wp/v2/pages`);
        const data: Page[] = await res.json();
        setAllPages(data);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Pages Names:</p>
      {allPages.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {allPages.map((page) => (
            <li key={page.id}>{page.slug}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
