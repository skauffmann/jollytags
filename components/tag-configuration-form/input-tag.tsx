import {
  FormControl,
  FormErrorMessage,
  HStack,
  IconButton,
  Textarea,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa';
import { ITagConfiguration } from '../../types';

export const InputTag = ({
  index,
  onRemove,
}: {
  index: number;
  onRemove: () => void;
}) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<ITagConfiguration>();
  const isError = errors.tagsContent?.[index] !== undefined;

  return (
    <FormControl isInvalid={isError}>
      <HStack spacing={2} alignItems="start">
        <Textarea
          {...register(`tagsContent.${index}`, {
            required: 'This is required',
          })}
          placeholder="Enter your tag value here"
          w={['xs', 'md']}
          rows={5}
        />
        <IconButton
          icon={<FaTrash />}
          aria-label="Remove tag"
          onClick={onRemove}
          variant="ghost"
          color="gray.500"
          size="xs"
        />
      </HStack>
      {isError && (
        <FormErrorMessage>
          {errors.tagsContent?.[index]?.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
