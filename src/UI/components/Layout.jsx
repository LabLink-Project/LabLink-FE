import { BsArrowLeftSquare } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children, header }) => {
  const nav = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
      }}
    >
      <div
        style={{
          height: '56px',
          fontSize: '30px',
        }}
      >
        <BsArrowLeftSquare onClick={() => nav(-1)} />
        <span
          style={{
            fontSize: '20px',
            marginLeft: '20px',
          }}
        >
          {header}
        </span>
      </div>
      {children}
    </div>
  );
};

export default Layout;
