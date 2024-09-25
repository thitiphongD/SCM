import React from "react";
import Link from "next/link";
import {
  AnnouncementIcon,
  AssignmentIcon,
  AttendanceIcon,
  CalendarIcon,
  ClassIcon,
  ExamIcon,
  HomeIcon,
  LessonIcon,
  MessageIcon,
  ParentIcon,
  ProfileIcon,
  ResultIcon,
  SettingIcon,
  SignOutIcon,
  StudentIcon,
  SubjectIcon,
  TeacherIcon,
} from "../icon/MenuIcon";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <HomeIcon />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TeacherIcon />,
        label: "Teachers",
        href: "/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: <StudentIcon />,
        label: "Students",
        href: "/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: <ParentIcon />,
        label: "Parents",
        href: "/parent",
        visible: ["admin", "teacher"],
      },
      {
        icon: <SubjectIcon />,
        label: "Subjects",
        href: "/subject",
        visible: ["admin"],
      },
      {
        icon: <ClassIcon />,
        label: "Classes",
        href: "/class",
        visible: ["admin", "teacher"],
      },
      {
        icon: <LessonIcon />,
        label: "Lessons",
        href: "/lesson",
        visible: ["admin", "teacher"],
      },
      {
        icon: <ExamIcon />,
        label: "Exams",
        href: "/exam",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AssignmentIcon />,
        label: "Assignments",
        href: "/assignment",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <ResultIcon />,
        label: "Results",
        href: "/result",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AttendanceIcon />,
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <CalendarIcon />,
        label: "Events",
        href: "/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MessageIcon />,
        label: "Messages",
        href: "/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AnnouncementIcon />,
        label: "Announcements",
        href: "/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <ProfileIcon />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <SettingIcon />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <SignOutIcon />,
        label: "Sign Out",
        href: "/sign-out",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="menu-title">{i.title}</span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link href={item.href} key={item.label} className="menu-link">
                  <span>{item.icon}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
