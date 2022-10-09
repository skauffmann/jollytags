import { Button, IconButton, Stack, VStack } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { FormProvider, useForm } from 'react-hook-form';
import { PageConfigurations } from '../../constants/page-configurations';
import { ITagConfiguration } from '../../types';
import { InputOffset } from './input-offset';
import { InputTag } from './input-tag';
import { SelectPageConfiguration } from './select-page-configuration';
import { TagConfigurationPreview } from './tag-configuration-preview';

interface TagConfigurationFormProps {
  onSubmit: (data: ITagConfiguration) => void;
}

export function TagConfigurationForm({ onSubmit }: TagConfigurationFormProps) {
  const methods = useForm<ITagConfiguration>({
    defaultValues: {
      offset: 0,
      pageConfigurationId: Object.keys(PageConfigurations)[0],
      tagsContent: [''],
    },
  });

  const [pageConfigurationId, offset, tagsContent] = methods.watch([
    'pageConfigurationId',
    'offset',
    'tagsContent',
  ]);
  const pageConfiguration = PageConfigurations[pageConfigurationId];

  const handleAddTag = () => {
    methods.setValue('tagsContent', [...tagsContent, '']);
  };
  const handleRemoveTag = (index: number) => {
    methods.setValue(
      'tagsContent',
      tagsContent.filter((_, i) => i !== index)
    );
  };

  return (
    <FormProvider {...methods}>
      <VStack as="form" onSubmit={methods.handleSubmit(onSubmit)} spacing={6}>
        <Stack
          direction={['column', 'row']}
          spacing={[6, 12]}
          alignItems="center"
        >
          <VStack spacing={6}>
            <SelectPageConfiguration />
            <InputOffset />
            {tagsContent.map((_, index) => (
              <InputTag
                key={index}
                index={index}
                onRemove={() => handleRemoveTag(index)}
              />
            ))}
            <IconButton
              icon={<FaPlus />}
              onClick={handleAddTag}
              aria-label="Add tag"
            />
          </VStack>
          <TagConfigurationPreview
            pageConfiguration={pageConfiguration}
            offset={offset}
            tagCount={1}
          />
        </Stack>
        <Button type="submit">Generate</Button>
      </VStack>
    </FormProvider>
  );
}
