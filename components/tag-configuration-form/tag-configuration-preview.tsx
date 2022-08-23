import { Box, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';
import { PageConfiguration } from '../../constants/page-configurations';

interface TagItemConfigurationPreviewProps {
  offset: number;
  tagCount: number;
  tagIndex: number;
}

const TagItemConfigurationPreview = ({
  tagIndex,
  offset,
  tagCount,
}: TagItemConfigurationPreviewProps) => {
  const isFilled = tagIndex >= offset && tagIndex < offset + tagCount;
  return (
    <GridItem
      w="100%"
      h="10"
      border="1px var(--chakra-colors-gray-400) solid"
      bg={isFilled ? 'gray.300' : undefined}
      color={isFilled ? 'gray.900' : undefined}
    >
      <VStack justifyContent="center" alignItems="center" h="full">
        <Text>{tagIndex + 1}</Text>
      </VStack>
    </GridItem>
  );
};

interface TagConfigurationPreviewProps {
  pageConfiguration: PageConfiguration;
  offset: number;
  tagCount: number;
}

export const TagConfigurationPreview = ({
  pageConfiguration,
  tagCount,
  offset,
}: TagConfigurationPreviewProps) => {
  const numberOfTags = pageConfiguration.rows * pageConfiguration.columns;
  return (
    <Box>
      <Grid
        templateColumns={`repeat(${pageConfiguration.columns}, 75px)`}
        gap={2}
      >
        {Array.from({ length: numberOfTags }, (_, tagIndex) => (
          <TagItemConfigurationPreview
            key={tagIndex}
            tagIndex={tagIndex}
            offset={offset}
            tagCount={tagCount}
          />
        ))}
      </Grid>
    </Box>
  );
};
