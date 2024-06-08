import React from 'react';
import TeachersList from '../components/TeachersList';

const Teachers = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Teachers</h1>
      <TeachersList />
    </div>
  );
};

export default Teachers;
