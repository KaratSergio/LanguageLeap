import { useEffect, useState } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { useAppSelector } from '@redux/store';
import Select, { components } from 'react-select';

import { selectLanguageFilter, selectLevelFilter, selectPriceFilter } from '@redux/filters/filters-selectors';

import Icon from '../Icon/Icon';
import { Option } from './types';

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon
          id="icon-chevron-down"
          width="w-4"
          height="h-4"
          strokeColor="stroke-black"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </components.DropdownIndicator>
    )
  );
};

const CustomSelect: React.FC<{
  name: 'language' | 'level' | 'price';
  label: string;
  options: Option[];
  onChange: (value: string | null) => void;
}> = ({ name, label, options, onChange }) => {
  const { control, setValue } = useForm<FieldValues>();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const selectedValue = useAppSelector((state) => {
    switch (name) {
      case 'language':
        return selectLanguageFilter(state);
      case 'level':
        return selectLevelFilter(state);
      case 'price': {
        const priceFilter = selectPriceFilter(state);
        return priceFilter ? `${priceFilter.min}-${priceFilter.max}` : '';
      }
      default:
        return '';
    }
  });

  useEffect(() => {
    if (selectedValue !== undefined && selectedValue !== '') {
      const option = options.find((opt) => opt.value === selectedValue) || null;
      setSelectedOption(option);
      setValue(name, selectedValue);
    } else {
      setSelectedOption(null);
      setValue(name, '');
    }
  }, [name, selectedValue, setValue, options]);

  return (
    <div
      className={`flex flex-col relative ${
        name === 'language' ? 'w-[221px]' : name === 'level' ? 'w-[198px]' : 'w-[124px]'
      }`}
    >
      <label htmlFor={`${name}-filter`} className="text-sm font-medium text-borderGrey mb-2">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            value={selectedOption}
            options={options}
            onChange={(selectedOption: Option | null) => {
              const value = selectedOption ? selectedOption.value : '';
              field.onChange(value);
              setSelectedOption(selectedOption);
              onChange(value);
            }}
            placeholder="Show all"
            className="custom-select"
            classNamePrefix="custom-select"
            components={{ DropdownIndicator }}
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: '14px',
                minHeight: '48px',
                border: 'none',
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: 'rgba(18, 20, 23, 0.2)',
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#FFFFFF' : 'transparent',
                color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.2)',
                fontWeight: '500',
                fontSize: '18px',
                borderRadius: '12px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '92%',
                '&:hover': {
                  backgroundColor: '#FDE68A',
                  color: '#121417',
                },
              }),
              singleValue: (provided) => ({
                ...provided,
                color: '#121417',
                fontWeight: '500',
                fontSize: '18px',
              }),
              placeholder: (provided) => ({
                ...provided,
                color: 'rgba(18, 20, 23, 0.2)',
                fontWeight: '500',
                fontSize: '18px',
              }),
            }}
          />
        )}
      />
    </div>
  );
};

export default CustomSelect;
