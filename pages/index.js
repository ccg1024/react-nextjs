import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/boi'

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a font end developer based in China.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Crazyboy
          </Heading>
          <p>Digital Craftzboy (Artist / Developer /Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor={'whiteAlpha.800'}
            borderWidth={2}
            borderStyle="solid"
            maxWidth={'100px'}
            display={'inline-block'}
            borderRadius="full"
            src="/images/crazyboy.png"
            alt="profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as={'h3'} variant="section-title">
          Work
        </Heading>
        <Paragraph>
          This is a styled paragraph, This is a styled paragraph, This is a
          styled paragraph, This is a styled paragraph, This is a styled
          paragraph. And some link <Link href="#">address</Link>
        </Paragraph>
        <Box textAlign={'center'} my={4}>
          <NextLink href={'#'}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as={'h3'} variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in China
        </BioSection>
      </Section>
    </Container>
  )
}
