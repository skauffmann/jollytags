import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { ITagConfiguration } from '../../types';

export const InputTag = () => {
  const { register } = useFormContext<ITagConfiguration>();
  return (
    <FormControl>
      <FormLabel htmlFor="name">Tag</FormLabel>

      <Textarea
        {...register('tagsContent.0', { required: 'This is required' })}
        placeholder="Enter your tag value here"
        w="md"
        rows={5}
      />
    </FormControl>
  );
};
