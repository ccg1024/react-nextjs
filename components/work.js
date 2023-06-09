import Link from 'next/link'
import { Heading, Box, Image, Text, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  return (
    <Box>
      <Link href={'/works'}>
        <Text display="inline-block">Works</Text>
      </Link>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display={'inline-block'} as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ src, alt }) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export const Meta = ({ children }) => {
  return (
    <Badge colorScheme={'green'} mr={2}>
      {children}
    </Badge>
  )
}
