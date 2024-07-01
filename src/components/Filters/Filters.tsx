import { useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useAppDispatch } from '@redux/store';
import { setLanguageFilter, setLevelFilter, setPriceFilter } from '@redux/filters/filters-slice';
import CustomSelect from './CustomSelect';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reset } = useForm<FieldValues>({
    defaultValues: {
      language: '',
      level: '',
      price: '',
    },
  });

  useEffect(() => {
    const storedFilters = {
      language: localStorage.getItem('languageFilter') || '',
      level: localStorage.getItem('levelFilter') || '',
      price: localStorage.getItem('priceFilter') || '',
    };

    reset({
      language: storedFilters.language,
      level: storedFilters.level,
      price: storedFilters.price,
    });
  }, [reset]);

  const handleLanguageChange = (value: string | null) => {
    dispatch(setLanguageFilter(value || null));
    localStorage.setItem('languageFilter', value || '');
  };

  const handleLevelChange = (value: string | null) => {
    dispatch(setLevelFilter(value || null));
    localStorage.setItem('levelFilter', value || '');
  };

  const handlePriceChange = (value: string | null) => {
    if (value === null) {
      dispatch(setPriceFilter({ min: null, max: null }));
      localStorage.removeItem('priceFilter');
    } else {
      const range = value.split('-');
      const minValue = parseInt(range[0]);
      const maxValue = parseInt(range[1]);
      dispatch(setPriceFilter({ min: minValue, max: maxValue }));
      localStorage.setItem('priceFilter', value);
    }
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
