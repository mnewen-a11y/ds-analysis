import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Icon to display before text */
  icon?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Primary UI component for user interactions.
 * Follows WCAG 2.1 AA standards with minimum 4.5:1 contrast ratio and 44px touch targets.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  icon,
  fullWidth = false,
  type = 'button',
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  );
};
