import { useEffect, useState } from 'react';

export const useAnimationEnabled = (): boolean => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  return enabled;
};
