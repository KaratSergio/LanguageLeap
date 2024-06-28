import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@redux/store';

import { setLanguageFilter, setLevelFilter, setPriceFilter } from '@redux/filters/filters-slice';
import { selectLanguageFilter, selectLevelFilter, selectPriceFilter } from '@redux/filters/filters-selectors';

import { FilterFormValues } from './types';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const languageFilter = useAppSelector(selectLanguageFilter);
  const levelFilter = useAppSelector(selectLevelFilter);
  const priceFilter = useAppSelector(selectPriceFilter);

  const { control, reset } = useForm<FilterFormValues>({
    defaultValues: {
      language: '',
      level: '',
      price: undefined,
    },
  });

  useEffect(() => {
    reset({
      language: languageFilter || '',
      level: levelFilter || '',
      price: priceFilter || undefined,
    });
  }, [languageFilter, levelFilter, priceFilter, reset]);

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguageFilter(value || null));
  };

  const handleLevelChange = (value: string | undefined) => {
    dispatch(setLevelFilter(value || null));
  };

  const handlePriceChange = (value: string) => {
    dispatch(setPriceFilter(value ? parseInt(value) : null));
  };

  return (
    <form className="flex gap-4 p-4 rounded-lg">
      <div className="flex flex-col">
        <label htmlFor="language-filter" className="text-sm font-semibold mb-2">
          Languages
        </label>
        <Controller
          name="language"
          control={control}
          render={({ field }) => (
            <select {...field} className="p-2 border rounded-md" onChange={(e) => handleLanguageChange(e.target.value)}>
              <option value="">Show all</option>
              <option value="French">French</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Polish">Polish</option>
            </select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="level-filter" className="text-sm font-semibold mb-2">
          Level of knowledge
        </label>
        <Controller
          name="level"
          control={control}
          render={({ field }) => (
            <select {...field} className="p-2 border rounded-md" onChange={(e) => handleLevelChange(e.target.value)}>
              <option value="">Show all</option>
              <option value="A1 Beginner">A1 Beginner</option>
              <option value="A2 Elementary">A2 Elementary</option>
              <option value="B1 Intermediate">B1 Intermediate</option>
              <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
            </select>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="price-filter" className="text-sm font-semibold mb-2">
          Price
        </label>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <select {...field} className="p-2 border rounded-md" onChange={(e) => handlePriceChange(e.target.value)}>
              <option value="">Show all</option>
              <option value="10">10$</option>
              <option value="20">20$</option>
              <option value="30">30$</option>
              <option value="40">40$</option>
            </select>
          )}
        />
      </div>
    </form>
  );
};

export default Filter;
