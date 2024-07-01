import { Teacher } from '@redux/data/data-types';

export interface TeachersHookResult {
  teachers: Teacher[];
  loading: boolean;
  error: string | null;
  total: number;
  itemsToShow: number;
  handleLoadMore: () => Promise<void>;
  resetItemsToShow: () => void;
  allTeachers: Teacher[];
  setItemsToShow: React.Dispatch<React.SetStateAction<number>>;
}
