'use client';

import { useEffect, useState } from 'react';

const allMedicines = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  name: `Medicine ${i + 1}`,
  category: i % 2 === 0 ? 'pain-relief' : 'vitamins',
  price: (50 + i * 5).toFixed(0),
  image: '/assets/medicines/paracetamol.png',
}));

const useMedicines = (filters: { category: string; sort: string }) => {
  const [medicines, setMedicines] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const filtered = allMedicines
      .filter((m) => !filters.category || m.category === filters.category)
      .sort((a, b) => {
        if (filters.sort === 'price-low-high') return +a.price - +b.price;
        if (filters.sort === 'price-high-low') return +b.price - +a.price;
        if (filters.sort === 'name') return a.name.localeCompare(b.name);
        return 0;
      });

    const paginated = filtered.slice(0, page * 12);
    setMedicines(paginated);
    setHasMore(filtered.length > paginated.length);
  }, [filters, page]);

  return {
    medicines,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
  };
}

export default useMedicines;