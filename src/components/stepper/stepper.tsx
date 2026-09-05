import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './stepper.module.css';

export type StepperStep = {
  title: ReactNode;
  description?: ReactNode;
};

export type StepperProps = {
  steps: StepperStep[];
  className?: string;
};

export const Stepper: FC<StepperProps> = ({ steps, className }) => (
  <ol className={clsx(styles.stepper, className)}>
    {steps.map((step, index) => (
      <li key={index}>
        <div className={styles.body}>
          <strong>{step.title}</strong>
          {step.description && <span>{step.description}</span>}
        </div>
      </li>
    ))}
  </ol>
);
