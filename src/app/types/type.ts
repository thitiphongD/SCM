export type TeacherType = {
  id: number;
  name: string;
  email?: string;
  teacherId: string;
  subjects: string[];
  classes: string[];
  phone: string;
  address: string;
  photo: string;
};

export type StudentType = {
  id: number;
  name: string;
  email?: string;
  studentId: string;
  grade: number;
  class: string;
  phone: string;
  address: string;
  photo: string;
};

export type ParentType = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

export type SubjectType = {
  id: number;
  name: string;
  teachers: string[];
};

export type ClassType = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

export type LessonType = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};
