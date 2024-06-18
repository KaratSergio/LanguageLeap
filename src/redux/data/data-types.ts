import { PayloadAction } from '@reduxjs/toolkit';

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Teacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

export interface TeachersState {
  teachers: Teacher[];
  loading: boolean;
  total: number;
  error: string | null;
}

export interface FetchTeachersPayload {
  teachers: Teacher[];
  total: number;
}

export interface FulfilledAction extends PayloadAction<FetchTeachersPayload> {
  meta: {
    arg: {
      startAfter: number;
      limit: number;
    };
  };
}
