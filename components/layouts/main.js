import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>China William - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={16}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
