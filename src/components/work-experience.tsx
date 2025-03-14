import Image from "next/image";
import Link from "next/link";
import { WorkExperience } from "@/types";

interface WorkExperienceProps {
  workExperiences: WorkExperience[];
}

const WorkExperienceList: React.FC<WorkExperienceProps> = ({
  workExperiences,
}) => {
  return (
    <section className="my-8">
      <h2 className="mb-6 text-2xl font-bold">Professional Milestones</h2>
      <ul className="mt-4 space-y-4">
        {workExperiences.map((experience) => {
          return (
            <a
            key={experience.url}
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-between space-x-4 rounded-2xl border border-gray-200 p-4 text-blue-600 transition-all hover:bg-gray-100 dark:border-gray-800  dark:text-blue-400 dark:hover:bg-gray-800"
            >
              <li key={experience.url}>
                <div className="flex items-center space-x-3">
                  {experience.logoUrl && (
                    <Image
                      width={30}
                      height={30}
                      src={experience.logoUrl}
                      alt={`Logo of ${experience.companyName}`}
                      className="rounded-full"
                      unoptimized
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {experience.companyName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {experience.posistion}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {experience.startingYear} -{" "}
                      {experience.endingYear || "Present"}
                    </p>
                  </div>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </section>
  );
};

export default WorkExperienceList;
