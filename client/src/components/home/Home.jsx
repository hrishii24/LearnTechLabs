import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.css';
import vg from '../../assets/images/vg.svg';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/introVideo.mp4';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LEARN FROM THE EXPERTS" />
            <Text
              textAlign={['center', 'left']}
              children="Elevate Your Skills, Empower Your Web Journey!"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          ></Image>
        </Stack>
      </div>
      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="Our partners"
        />
        <HStack className="brandsBanner" justifyContent="space-evenly">
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
}

export default Home;
