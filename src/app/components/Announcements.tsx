import React from "react";

const announcements = [
  {
    id: 1,
    title: "New Textbooks Available",
    date: "September 15, 2024",
    description:
      "The new edition of textbooks for the upcoming semester are now available in the school bookstore. Please collect them before the start of classes.",
  },
  {
    id: 2,
    title: "Lost and Found",
    date: "September 18, 2024",
    description:
      "Several items including water bottles, jackets, and notebooks have been found. Please check the Lost and Found section at the administration office if you are missing anything.",
  },
  {
    id: 3,
    title: "Uniform Sale",
    date: "September 20, 2024",
    description:
      "A sale on school uniforms will take place in the auditorium from 10:00 AM to 2:00 PM. Get your uniforms at discounted prices.",
  },
  {
    id: 4,
    title: "Cafeteria Menu Update",
    date: "September 22, 2024",
    description:
      "Starting next week, the cafeteria will introduce new healthy meal options. Check the weekly menu on the school website for more details.",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        {announcements.map((announcement) => (
          <div
            className="p-5 rounded-md border odd:bg-[#54a1a1] even:bg-[#9fc8c8]"
            key={announcement.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-[#122740] text-sm">
                {announcement.title}
              </h1>
              <span className="text-[#122740] text-xs">
                {announcement.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-[#122740]">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
