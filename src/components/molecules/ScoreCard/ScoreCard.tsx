import React from 'react';
import { Badge } from '../../atoms/Badge/Badge';
import styles from './ScoreCard.module.css';

export interface ScoreCardProps {
  /** Title of the metric */
  title: string;
  /** Current score value */
  score: number;
  /** Maximum possible score */
  maxScore: number;
  /** Human-readable interpretation */
  interpretation: string;
  /** Optional description or context */
  description?: string;
  /** Metric type for styling */
  variant?: 'hix' | 'seo' | 'bitv';
}

/**
 * Card component displaying a score with interpretation.
 * Used in dashboards and result pages.
 */
export const ScoreCard: React.FC<ScoreCardProps> = ({
  title,
  score,
  maxScore,
  interpretation,
  description,
  variant = 'hix',
}) => {
  const percentage = (score / maxScore) * 100;
  
  const getBadgeVariant = (): 'success' | 'info' | 'warning' | 'danger' => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'info';
    if (percentage >= 40) return 'warning';
    return 'danger';
  };
  
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <Badge variant={getBadgeVariant()}>{interpretation}</Badge>
      </div>
      
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      
      <div className={styles.scoreDisplay}>
        <span className={styles.score}>{score}</span>
        <span className={styles.separator}>/</span>
        <span className={styles.maxScore}>{maxScore}</span>
      </div>
      
      <div className={styles.progressBar} role="progressbar" aria-valuenow={score} aria-valuemin={0} aria-valuemax={maxScore} aria-label={`${title}: ${score} von ${maxScore}`}>
        <div 
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className={styles.footer}>
        <span className={styles.percentage}>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};
