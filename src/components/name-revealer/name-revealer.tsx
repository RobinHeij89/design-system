import clsx from 'clsx';
import styles from './name-revealer.module.css'

type Props = {
  firstName: string;
  lastName: string;
};

export const NameRevealer = (props: Props) => {
  const { firstName, lastName } = props;
  return (
    <div className={styles.name}>
      <span className={styles.line} style={{ transitionDelay: '100ms' }}>
        {firstName.split("").map((char, index) => (
          <span key={index} className={clsx(styles.char, 'reveal-bottom')} style={{ transitionDelay: `${index * 50 + 100}ms` }}>
            {char}
          </span>
        ))}
      </span>
      <span className={clsx(styles.line, styles.accent, 'reveal-right')} style={{ transitionDelay: '200ms' }}>{lastName}</span>
    </div>
  );
};
