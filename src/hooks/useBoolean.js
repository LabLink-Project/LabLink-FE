import { useState } from 'react';

function useBoolean() {
  const [show, setShow] = useState(false);

  const onClickShowOptionsHandler = () => {
    setShow(!show);
  };

  return [show, onClickShowOptionsHandler];
}

export default useBoolean;
