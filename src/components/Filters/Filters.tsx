import { useEffect, useState } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@redux/store';
import Select, { components } from 'react-select';

import { setLanguageFilter, setLevelFilter, setPriceFilter } from '@redux/filters/filters-slice';
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
  onChange: (value: string) => void;
}> = ({ name, label, options, onChange }) => {
  const { control, setValue } = useForm<FieldValues>();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const selectedValue = useAppSelector((state) => {
    switch (name) {
      case 'language':
        return selectLanguageFilter(state);
      case 'level':
        return selectLevelFilter(state);
      case 'price':
        return selectPriceFilter(state);
      default:
        return '';
    }
  });

  useEffect(() => {
    if (selectedValue !== undefined && selectedValue !== '') {
      const option = options.find((opt) => opt.value === selectedValue) || null;
      setSelectedOption(option);
      setValue(name, selectedValue);
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
              field.onChange(selectedOption?.value || '');
              setSelectedOption(selectedOption);
              onChange(selectedOption?.value || '');
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
                backgroundColor: '#FFFFFF',
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

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reset } = useForm<FieldValues>({
    defaultValues: {
      language: '',
      level: '',
      price: null,
    },
  });

  useEffect(() => {
    const storedFilters = {
      language: localStorage.getItem('languageFilter') || '',
      level: localStorage.getItem('levelFilter') || '',
      price: localStorage.getItem('priceFilter') || '',
    };

    reset({
      language: storedFilters.language || '',
      level: storedFilters.level || '',
      price: storedFilters.price || '',
    });
  }, [reset]);

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguageFilter(value || ''));
    localStorage.setItem('languageFilter', value || '');
  };

  const handleLevelChange = (value: string) => {
    dispatch(setLevelFilter(value || ''));
    localStorage.setItem('levelFilter', value || '');
  };

  const handlePriceChange = (value: string) => {
    const range = value.split('-');
    const minValue = parseInt(range[0]);
    const maxValue = parseInt(range[1]);

    dispatch(setPriceFilter({ min: minValue, max: maxValue }));
    localStorage.setItem('priceFilter', value || '');
  };

  return (
    <form className="flex gap-5">
      <CustomSelect
        name="language"
        label="Languages"
        options={[
          { value: '', label: 'Show all' },
          { value: 'French', label: 'French' },
          { value: 'English', label: 'English' },
          { value: 'German', label: 'German' },
          { value: 'Ukrainian', label: 'Ukrainian' },
          { value: 'Polish', label: 'Polish' },
        ]}
        onChange={handleLanguageChange}
      />

      <CustomSelect
        name="level"
        label="Level of knowledge"
        options={[
          { value: '', label: 'Show all' },
          { value: 'A1 Beginner', label: 'A1 Beginner' },
          { value: 'A2 Elementary', label: 'A2 Elementary' },
          { value: 'B1 Intermediate', label: 'B1 Intermediate' },
          { value: 'B2 Upper-Intermediate', label: 'B2 Upper-Intermediate' },
        ]}
        onChange={handleLevelChange}
      />

      <CustomSelect
        name="price"
        label="Price"
        options={[
          { value: '', label: 'Show all' },
          { value: '10-19', label: '10$' },
          { value: '20-29', label: '20$' },
          { value: '30-39', label: '30$' },
          { value: '40-49', label: '40$' },
        ]}
        onChange={handlePriceChange}
      />
    </form>
  );
};

export default Filter;
