import React, { forwardRef, ElementType } from 'react';
import { EmptyStateProps } from '../../lib/types/components';




export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = '',
  ...props
}) => (
    <div>
        
    </div>
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;