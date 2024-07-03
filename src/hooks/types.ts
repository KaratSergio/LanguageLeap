import { Teacher } from '@redux/data/data-types';

// useTeachers types
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
// useTheme types
export interface Theme {
  bg: string;
  hover: string;
  image: string;
}
