import { Button, HStack, VStack } from '@chakra-ui/react';
import { parse } from 'path';
import { FormProvider, useForm } from 'react-hook-form';
import { PageConfigurations } from '../../constants/page-configurations';
import { InputOffset } from './input-offset';
import { InputTag } from './input-tag';
import { SelectPageConfiguration } from './select-page-configuration';
import { TagConfigurationPreview } from './tag-configuration-preview';
import { ITagConfiguration } from '../../types';

interface TagConfigurationFormProps {
  onSubmit: (data: ITagConfiguration) => void;
}

export function TagConfigurationForm({ onSubmit }: TagConfigurationFormProps) {
  const methods = useForm<ITagConfiguration>({
    defaultValues: {
      offset: 0,
      pageConfigurationId: Object.keys(PageConfigurations)[0],
    },
  });

  const [pageConfigurationId, offset] = methods.watch([
    'pageConfigurationId',
    'offset',
  ]);
  const pageConfiguration = PageConfigurations[pageConfigurationId];

  return (
    <FormProvider {...methods}>
      <VStack as="form" onSubmit={methods.handleSubmit(onSubmit)} spacing={6}>
        <HStack spacing={12}>
          <VStack spacing={6}>
            <SelectPageConfiguration />
            <InputOffset />
            <InputTag />
          </VStack>
          <TagConfigurationPreview
            pageConfiguration={pageConfiguration}
            offset={offset}
            tagCount={1}
          />
        </HStack>
        <Button type="submit">Generate</Button>
      </VStack>
    </FormProvider>
  );
}
