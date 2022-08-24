import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { PageConfigurations } from '../../constants/page-configurations';
import { ITagConfiguration } from '../../types';

export const InputOffset = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ITagConfiguration>();
  const isError = errors.offset !== undefined;
  const [pageConfigurationId, offset] = watch([
    'pageConfigurationId',
    'offset',
  ]);
  const pageConfiguration = PageConfigurations[pageConfigurationId];
  const offsetMaxValue = pageConfiguration.rows * pageConfiguration.columns - 1;
  const increment = () => setValue('offset', offset + 1);
  const decrement = () => setValue('offset', offset - 1);

  return (
    <FormControl isInvalid={isError}>
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
            max: offsetMaxValue,
            required: 'This is required',
          })}
          w="14"
          rounded="none"
        />
        <Button
          roundedLeft="none"
          onClick={increment}
          isDisabled={offset >= offsetMaxValue}
        >
          +
        </Button>
      </HStack>
      {isError && (
        <FormErrorMessage>
          The offset value must be between 0 and {offsetMaxValue}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
