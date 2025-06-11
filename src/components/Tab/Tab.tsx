import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { TAB } from '../../lib/constants/components';

interface TabItemProps {
  /**
   * Label for the tab
   */
  label: string;
  
  /**
   * Content of the tab panel
   */
  content: ReactNode;
  
  /**
   * Whether the tab is initially active
   */
  isActive?: boolean;
  
  /**
   * Additional CSS class for the tab
   */
  className?: string;
}

interface TabProps {
  /**
   * Array of tab items
   */
  items: TabItemProps[];
  
  /**
   * Initial active tab index
   */
  activeIndex?: number;
  
  /**
   * Callback when tab changes
   */
  onTabChange?: (index: number) => void;
  
  /**
   * Additional CSS class for the tab component
   */
  className?: string;
}

/**
 * Tab component for switching between different content panels
 */
const Tab: React.FC<TabProps> = ({
  items,
  activeIndex = TAB.DEFAULTS.ACTIVE_INDEX,
  onTabChange,
  className = '',
}) => {
  const [currentTab, setCurrentTab] = useState(activeIndex);
  const tabRef = useRef<HTMLDivElement>(null);
  const tabInstance = useRef<any>(null);
  
  // Handle tab instance initialization and cleanup
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined' || !tabRef.current) return;

    // Dynamically import the tab script to avoid server-side rendering issues
    import('./scripts').then(({ default: TabClass }) => {
      if (tabRef.current) {
        tabInstance.current = new TabClass(tabRef.current);
      }
    });
    
    // Cleanup on unmount
    return () => {
      if (tabInstance.current) {
        tabInstance.current.destroy();
      }
    };
  }, []);
  
  // Handle tab change
  const handleTabClick = (index: number) => {
    setCurrentTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };
  
  return (
    <div className={`c-tabs js-atomix-tab ${className}`} ref={tabRef}>
      <ul className="c-tabs__nav">
        {items.map((item, index) => (
          <li className="c-tabs__nav-item" key={`tab-nav-${index}`}>
            <button 
              className={`c-tabs__nav-btn ${index === currentTab ? TAB.CLASSES.ACTIVE : ''}`}
              onClick={() => handleTabClick(index)}
              data-tabindex={index}
              role="tab"
              aria-selected={index === currentTab}
              aria-controls={`tab-panel-${index}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="c-tabs__panels">
        {items.map((item, index) => (
          <div 
            className={`c-tabs__panel ${index === currentTab ? TAB.CLASSES.ACTIVE : ''}`}
            key={`tab-panel-${index}`}
            data-tabindex={index}
            id={`tab-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-nav-${index}`}
            style={{ 
              height: index === currentTab ? 'auto' : '0px',
              opacity: index === currentTab ? 1 : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease, opacity 0.3s ease'
            }}
          >
            <div className="c-tabs__panel-body">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export type { TabProps, TabItemProps };

// Set display name for debugging
Tab.displayName = 'Tab';

// Default export (primary)
export default Tab;

export { Tab };