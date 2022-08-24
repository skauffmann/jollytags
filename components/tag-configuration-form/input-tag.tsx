import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { isErrored } from 'stream';
import { ITagConfiguration } from '../../types';

export const InputTag = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ITagConfiguration>();
  const isError = errors.tagsContent?.[0] !== undefined;

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor="name">Tag</FormLabel>

      <Textarea
        {...register('tagsContent.0', { required: 'This is required' })}
        placeholder="Enter your tag value here"
        w={['xs', 'md']}
        rows={5}
      />
      {isError && (
        <FormErrorMessage>{errors.tagsContent?.[0]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};
