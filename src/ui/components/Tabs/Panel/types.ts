import { ReactNode } from 'react';

export interface TabsPanelProps {
  index: number;
  activeIndex?: number;
  children?: ReactNode;
  className?: string;
}
