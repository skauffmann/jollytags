import { Box, Grid } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { PageConfiguration } from '../../constants/page-configurations';
import { TagItemConfigurationPreview } from './tag-item-configuration-preview';

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
  const { setValue } = useFormContext();
  const setOffset = (newOffset: number) => setValue('offset', newOffset);

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
            onClick={setOffset}
          />
        ))}
      </Grid>
    </Box>
  );
};
