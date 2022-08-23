import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { PageConfigurations } from '../../constants/page-configurations';
import { ITagConfiguration } from '../../types';

export const SelectPageConfiguration = () => {
  const { register } = useFormContext<ITagConfiguration>();
  return (
    <FormControl>
      <FormLabel>Page configuration</FormLabel>
      <Select
        {...register('pageConfigurationId', { required: 'This is required' })}
      >
        {Object.entries(PageConfigurations).map(
          ([pageConfigurationId, { name }]) => (
            <option key={pageConfigurationId} value={pageConfigurationId}>
              {name}
            </option>
          )
        )}
      </Select>
    </FormControl>
  );
};
