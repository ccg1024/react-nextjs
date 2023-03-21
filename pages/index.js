import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/boi'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbOtherInfo from '../public/images/alacritty-nvim.png'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a front end developer based in China.
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
            <NextLink href={'/works'}>
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

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ccg1024" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @crazybody
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="#" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @other site
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="#" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @other site
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <GridItem
              href={'#'}
              title="Some other title"
              thumbnail={thumbOtherInfo}
            >
              Some other information
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
