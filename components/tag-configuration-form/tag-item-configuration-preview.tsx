import { GridItem, Text, VStack } from '@chakra-ui/react';

interface TagItemConfigurationPreviewProps {
  offset: number;
  tagCount: number;
  tagIndex: number;
  onClick: (offset: number) => void;
}

const TagItemStyles = {
  filled: {
    bg: 'gray.300',
    color: 'gray.900',
  },
  disabled: {
    background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='black' stroke-width='1'/><path d='M0 0 L100 100 ' stroke='black' stroke-width='1'/></svg>")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%, auto',
  },
};

export const TagItemConfigurationPreview = ({
  tagIndex,
  offset,
  tagCount,
  onClick,
}: TagItemConfigurationPreviewProps) => {
  const isDisabled = tagIndex < offset;
  const isFilled = tagIndex >= offset && tagIndex < offset + tagCount;
  return (
    <GridItem
      w="100%"
      h="10"
      border="1px var(--chakra-colors-gray-400) solid"
      {...(isDisabled ? TagItemStyles.disabled : {})}
      {...(isFilled ? TagItemStyles.filled : {})}
      _hover={{ bg: 'gray.100' }}
      cursor="pointer"
      onClick={() => onClick(tagIndex)}
    >
      <VStack justifyContent="center" alignItems="center" h="full">
        <Text>{tagIndex + 1}</Text>
      </VStack>
    </GridItem>
  );
};
