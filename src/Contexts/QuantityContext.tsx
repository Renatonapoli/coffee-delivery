import React, { createContext, useContext, useState } from "react";

interface QuantityContextData {
  quantities: { [key: string]: number };
  updateQuantity: (cardId: string, quantity: number) => void;
  totalQuantity: number;
}

const QuantityContext = createContext<QuantityContextData>({
  quantities: {},
  updateQuantity: () => {},
  totalQuantity: 0,
});

export function QuantityProvider({ children }: { children: React.ReactNode }) {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const updateQuantity = (cardId: string, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cardId]: quantity,
    }));
  };

  const totalQuantity = Object.values(quantities).reduce(
    (sum, qty) => sum + qty,
    0
  );

  return (
    <QuantityContext.Provider
      value={{ quantities, updateQuantity, totalQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
}

export function useQuantity() {
  const context = useContext(QuantityContext);

  if (!context) {
    throw new Error("Ops, deu ruim. Tente novamente.");
  }

  return context;
}
