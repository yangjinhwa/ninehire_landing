import { useState, useCallback } from 'react';

export function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => setValue(''), [initialValue]);

  return [value, handleChange, reset];
}

export function useInputs(initialForm: any, atomState?: any) {
  const [form, setForm] = useState(initialForm);

  // change
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, handleChange, reset];
}
