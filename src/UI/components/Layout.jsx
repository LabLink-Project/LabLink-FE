import { BsArrowLeftSquare } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { StHeader, StLayout, StTitle } from '../styles/Layout.styled';

const Layout = ({ children, header }) => {
  const nav = useNavigate();

  return (
    <StLayout>
      <StHeader>
        <BsArrowLeftSquare onClick={() => nav(-1)} />
        <StTitle>{header}</StTitle>
      </StHeader>
      {children}
    </StLayout>
  );
};

export default Layout;
