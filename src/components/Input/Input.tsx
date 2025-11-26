import { useId, useState } from 'react';
import { GoEye, GoEyeClosed, GoX } from 'react-icons/go';
import styles from './Input.module.css';

interface InputProps {
  labelText: string;
  name: string;
  type: 'text' | 'password' | 'number';
  placeholder?: string;
  isClearable: boolean;
  hasError?: boolean;
}

export function Input({
  labelText,
  name,
  type,
  placeholder,
  isClearable,
  hasError,
}: InputProps) {
  const [isShowPass, setIsShowPass] = useState(false);
  const [value, setValue] = useState<string>('');
  const inputId = useId();

  const handleToggleVisibility = () => {
    if (type === 'password') {
      setIsShowPass((prev) => !prev);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const toggledType = isShowPass ? 'text' : 'password';

  const renderVsisibleEye = () => {
    return (
      <button
        type="button"
        onClick={handleToggleVisibility}
        className={styles.button}
      >
        {isShowPass ? <GoEye height={16} /> : <GoEyeClosed />}
      </button>
    );
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={inputId} className={styles.label}>
        {labelText}

        {hasError && <span className={styles.errMessage}>Error message</span>}
      </label>

      <div
        className={`${styles.inputContainer} ${hasError && styles.errorInputContainer}`}
      >
        <input
          type={type === 'password' ? toggledType : type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={styles.input}
        />

        {isClearable && value && (
          <button
            type="button"
            onClick={() => setValue('')}
            className={styles.button}
          >
            <GoX />
          </button>
        )}

        {type === 'password' && renderVsisibleEye()}
      </div>
    </div>
  );
}
