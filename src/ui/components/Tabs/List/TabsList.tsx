import type { TabsListProps } from './types';
import styles from './TabsList.module.scss';
import { cn } from '@utils/cn';

export const TabsList = ({ children, className = '' }: TabsListProps) => {
  return (
    <div role='tablist' className={cn(styles.list, className)}>
      {children}
    </div>
  );
};

TabsList.displayName = 'TabsList';
