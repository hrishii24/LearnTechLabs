import React from 'react';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  DrawerBody,
  VStack,
  HStack,
} from '@chakra-ui/react';
import ColorModeSwitcher from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkBtn = ({ url = '/', title = 'Home' }) => (
  <Link to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };

  function logoutHandler() {
    console.log('logout');
  }

  return (
    <div>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height="12"
        rounded="full"
        position="fixed"
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="2px">Learn Tech Labs</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkBtn url="/" title="Home" />
              <LinkBtn url="/courses" title="Browse all courses" />
              <LinkBtn url="/request" title="Request a course" />
              <LinkBtn url="/contact" title="Contact us" />
              <LinkBtn url="/about" title="About us" />
              <HStack
                justifyContent="space-evenly"
                position="absolute"
                bottom="2rem"
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button colorScheme={'yellow'}>Profile</Button>
                        </Link>
                        <Button
                          variant={'ghost'}
                          colorScheme={'yellow'}
                          onClick={logoutHandler}
                        >
                          <RiLogoutBoxLine />
                          Log out
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button colorScheme="purple" variant={'ghost'}>
                            <RiDashboardFill style={{ margin: '5px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>

                    <p>or</p>

                    <Link to="/register">
                      <Button colorScheme={'yellow'}>Sign up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Header;
