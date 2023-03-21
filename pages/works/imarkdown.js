import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Imarkdown">
      <Container>
        <Title>
          Imarkdown <Badge>2022</Badge>
        </Title>
        <P>
          Imarkdown is a cross-platform markdown editor, based on electron,
          react and codemirror. It's now developing.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/ccg1024/IMarkdown">
              https://github.com/ccg1024/IMarkdown <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux/maxOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Electron, React, Codemirror, NodeJS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/window-light-editor.png" alt="Imarkdown" />
      </Container>
    </Layout>
  )
}

export default Work
