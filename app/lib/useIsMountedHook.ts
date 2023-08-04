'use client';

import { useEffect, useState } from 'react';

const useIsMountedHook = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { mounted };
};

export default useIsMountedHook;
