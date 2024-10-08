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
