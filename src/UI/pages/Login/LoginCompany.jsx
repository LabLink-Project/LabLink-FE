import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginCompany() {
  const nav = useNavigate();
  return (
    <>
      <form>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            alignContent: 'center',
            marginTop: '200px',
          }}
        >
          <div>
            <button onClick={()=>nav('/login/user')}>개인회원</button>
            <button onClick={()=>nav('/login/company')}>기업회원</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginCompany;
