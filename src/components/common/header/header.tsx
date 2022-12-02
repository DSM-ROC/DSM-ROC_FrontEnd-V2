import { Outlet } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <>
      <h1>Header</h1>
      <Outlet /> {/**이거 지우지 마 */}
    </>
  );
};

export default Header;
