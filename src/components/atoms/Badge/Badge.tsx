import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Visual variant based on semantic meaning */
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Badge component for status indicators and labels.
 * Used for scores, status messages, and categorical information.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
}) => {
  const classNames = [
    styles.badge,
    styles[variant],
    styles[size],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} role="status">
      {children}
    </span>
  );
};
