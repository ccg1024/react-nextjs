import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbImarkdown from '../public/images/window-light-editor.png'
import thumbNeovim from '../public/images/alacritty-nvim.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Work
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id={'imarkdown'}
              title="IMARKDOW"
              thumbnail={thumbImarkdown}
            >
              A markdown note-taking app based on election & react & codemirror
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id={'neovim'} title="NEOVIM" thumbnail={thumbNeovim}>
              A modern open source terminal editor
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
