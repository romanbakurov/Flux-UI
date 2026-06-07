import { createContext, useContext } from 'react';

export interface TabsContextValue {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabs = (): TabsContextValue => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tabs components must be used inside Tabs');

  return context;
};

export default TabsContext;
