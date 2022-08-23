import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { ITagConfiguration } from '../../types';

export const InputOffset = () => {
  const { register, watch, setValue } = useFormContext<ITagConfiguration>();
  const offset = watch('offset');
  const increment = () => setValue('offset', offset + 1);
  const decrement = () => setValue('offset', offset - 1);
  return (
    <FormControl>
      <FormLabel>Offset</FormLabel>
      <HStack spacing={0}>
        <Button
          roundedRight="none"
          onClick={decrement}
          isDisabled={offset <= 0}
        >
          -
        </Button>
        <Input
          type="number"
          {...register('offset', {
            valueAsNumber: true,
            min: 0,
            max: 10000,
            required: 'This is required',
          })}
          w="14"
          rounded="none"
        />
        <Button roundedLeft="none" onClick={increment}>
          +
        </Button>
      </HStack>
    </FormControl>
  );
};
