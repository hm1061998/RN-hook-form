import React from 'react';

function useForm() {
  const [_, forceUpdate] = React.useState(null);
  const formRef = React.useRef();
  const setFormRef = ref => {
    if (!formRef.current) {
      formRef.current = ref;
      forceUpdate({});
    }
  };

  const clearForm = () => {
    formRef.current = null;
    forceUpdate({});
  };

  return [formRef.current, setFormRef, clearForm];
}

export default useForm;
