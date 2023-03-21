import Link from 'next/link'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign={'center'}>
      <Link cursor={'pointer'} href={href}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <Text mt={2}>{title}</Text>
        <Text fontSize={14}>{children}</Text>
      </Link>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box textAlign={'center'}>
      <Link cursor={'pointer'} href={`/works/${id}`}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </Link>
    </Box>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={{
        '.grid-item-thumbnail': {
          borderRadius: 5
        }
      }}
    />
  )
}
