import Link from 'next/link';

import styled from 'styled-components';
import { RiUserFill, RiSettings5Fill } from 'react-icons/ri';
import { CgLogOut } from 'react-icons/cg';
import { BsFillChatFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { removeCookies } from 'cookies-next';
import { COOKIE_KEY } from '@libs/enum';

const Container = styled.div`
  width: 70px;
  background-color: ${(props) => props.theme.sidebarBgColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const TopIconBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

interface Icon {
  current: boolean;
}

const Icon = styled.a<Icon>`
  font-size: 28px;
  color: ${(props) => (props.current ? props.theme.textColor : props.theme.lightTextColor)};
  opacity: ${(props) => (props.current ? 1 : 0.7)};
`;

const Sidebar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    removeCookies(COOKIE_KEY.TOKEN);
    window.location.href = '/enter';
  };
  return (
    <Container>
      <TopIconBox>
        <Link href="/">
          <Icon current={router.pathname === '/'}>
            <RiUserFill />
          </Icon>
        </Link>
        <Link href="/chat">
          <Icon current={router.pathname === '/chat'}>
            <BsFillChatFill />
          </Icon>
        </Link>
        <Link href="/setting">
          <Icon current={router.pathname === '/setting'}>
            <RiSettings5Fill />
          </Icon>
        </Link>
      </TopIconBox>
      <Icon as="button" current={true} onClick={handleLogout}>
        <CgLogOut />
      </Icon>
    </Container>
  );
};

export default Sidebar;
