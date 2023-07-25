import React, { createContext, useMemo, useState } from "react";

interface QuantityContextData {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  totalQuantity: number;
  updateTotalQuantity: (amount: number) => void;
}

const QuantityContext = createContext<QuantityContextData>({
  quantity: 0,
  setQuantity: () => {},
  totalQuantity: 0,
  updateTotalQuantity: () => {},
});

export function QuantityProvider({ children }: { children: React.ReactNode }) {
  const [quantity, setQuantity] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  const updateTotalQuantity = (amount: number) => {
    setTotalQuantity((prevTotal) => prevTotal + amount);
  };

  return (
    <QuantityContext.Provider
      value={{ quantity, setQuantity, totalQuantity, updateTotalQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
}

export function useQuantity() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const updateQuantity = (cardId: string, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cardId]: quantity,
    }));
  };

  const totalQuantity = useMemo(() => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  }, [quantities]);

  return { quantities, updateQuantity, totalQuantity };
}
