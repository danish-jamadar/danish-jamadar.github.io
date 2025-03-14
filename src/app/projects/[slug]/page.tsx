import { LINKS } from "@/lib/constants";
import { notFound } from "next/navigation";
import projectListV2 from "../../../../api/projectListV2.json";
import ProjectImage from "@/components/project-image";
import Link from "next/link";
import { BackArrow } from "@/components/icons";
import { Metadata } from "next";
import { Divider } from "@/components/divider";

interface Project {
  title: string;
  description: string;
  tags: string[];
  businessImpact?: string;
  additionalInfo?: string;
  companyName?: string;
  industry?: string;
  location?: string;
  year?: number;
  features?: string[];
  thumbnail?: string;
  slug: string;
  isPortraitImages?: boolean;
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const response = await fetch(LINKS.PROJECT);
  const projects = projectListV2;

  const project = projects.find((p) => p?.slug === slug);

  if (!project) {
    notFound();
  }

  const [firstImages, remainingImages] =
    project?.images && project.images.length > 0
      ? project?.isPortraitImages
        ? [project.images.slice(0, 8), project.images.slice(8)] // for portrait images, take 8 images
        : [project.images.slice(0, 4), project.images.slice(4)] // for non-portrait images, take 4 images
      : [[], []];

  return (
    <section className="space-y-6 p-6">
      {/* Header with Back Arrow and Title */}
      <div className="flex items-center space-x-3">
        <Link href={LINKS.PROJECTS_SECTION}>
          <>{BackArrow()}</>
        </Link>
        <h1 className="text-3xl font-bold">{project?.title}</h1>
      </div>

      {/* Thumbnail */}
      {project?.thumbnail && (
        <ProjectImage
          src={project?.thumbnail || ""}
          alt={project?.title || "Project Thumbnail"}
          className="mb-6 h-auto w-full rounded-lg border-black shadow-lg"
        />
      )}

      {/* Description */}
      {project?.description && (
        <>
          <p className="common-text">{project?.description}</p>
          <Divider />{" "}
        </>
      )}

      {/* First Feature Image */}
      {firstImages[0] && !project?.isPortraitImages && (
        <div
          className={`common-image-container ${project?.isPortraitImages && "flex gap-5"}`}
        >
          <ProjectImage
            src={firstImages[0]}
            alt={`First Feature Image`}
            className="common-image"
          />
        </div>
      )}

      {firstImages[0] && project?.isPortraitImages && (
        <div
          className={`common-image-container ${project?.isPortraitImages && "flex gap-5"}`}
        >
          <ProjectImage
            src={firstImages[0]}
            alt={`First Feature Image`}
            className="common-image"
          />
          {firstImages[1] && (
            <ProjectImage
              src={firstImages[1]}
              alt={`First Feature Image`}
              className="common-image"
            />
          )}
        </div>
      )}

      {/* Business Impact Section */}
      {project?.businessImpact && (
        <div>
          <h3 className="common-title">Business Impact:</h3>
          <p className="common-text">{project?.businessImpact}</p>
          <Divider />{" "}
        </div>
      )}

      {/* Second Feature Image */}
      {firstImages[1] && !project?.isPortraitImages && (
        <div className="common-image-container">
          <ProjectImage
            src={firstImages[1]}
            alt="Second Feature Image"
            className="common-image"
          />
        </div>
      )}

      {firstImages[2] && project?.isPortraitImages && (
        <div className="common-image-container flex gap-5">
          <ProjectImage
            src={firstImages[2]}
            alt="Second Feature Image"
            className="common-image"
          />
          {firstImages[3] && (
            <ProjectImage
              src={firstImages[3]}
              alt="Third Feature Image"
              className="common-image"
            />
          )}
        </div>
      )}
      {/* Additional Information Section */}
      {project?.additionalInfo && (
        <div>
          <h3 className="common-title">Additional Information:</h3>
          <p className="common-text">{project?.additionalInfo}</p>
          <Divider />{" "}
        </div>
      )}

      {/* Third Feature Image */}
      {firstImages[2] && !project?.isPortraitImages && (
        <div className="common-image-container">
          <ProjectImage
            src={firstImages[2]}
            alt="Third Feature Image"
            className="common-image"
          />
        </div>
      )}

      {firstImages[4] && project?.isPortraitImages && (
        <div className="common-image-container flex gap-5">
          <ProjectImage
            src={firstImages[4]}
            alt="Third Feature Image"
            className="common-image"
          />
          {firstImages[5] && (
            <ProjectImage
              src={firstImages[5]}
              alt="Fourth Feature Image"
              className="common-image"
            />
          )}
        </div>
      )}

      {/* Features */}

      {project?.features && (
        <div>
          <h3 className="common-title">Features:</h3>
          <ul className="mt-4 list-disc pl-5">
            {project?.features.map((feature) => (
              <li key={feature} className="common-text">
                {feature}
              </li>
            ))}
          </ul>
          <Divider />{" "}
        </div>
      )}

      {/* Tags */}
      {project?.tags && (
        <div>
          <h3 className="common-title">Tags:</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project?.tags.map((techStackItem) => (
              <p
                className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                key={techStackItem}
              >
                {techStackItem}
              </p>
            ))}
          </div>
          <Divider />{" "}
        </div>
      )}

      {/* Fourth Feature Image */}
      {firstImages[3] && !project?.isPortraitImages && (
        <div className="common-image-container">
          <ProjectImage
            src={firstImages[3]}
            alt="Fourth Feature Image"
            className="common-image"
          />
        </div>
      )}

      {firstImages[6] && project?.isPortraitImages && (
        <div className="common-image-container flex gap-5">
          <ProjectImage
            src={firstImages[6]}
            alt="Fourth Feature Image"
            className="common-image"
          />
          {firstImages[7] && (
            <ProjectImage
              src={firstImages[7]}
              alt="Fifth Feature Image"
              className="common-image"
            />
          )}
        </div>
      )}

      {/* Company Details Section */}
      <div className="mt-6">
        <div className="space-y-2">
          {project.companyName && (
            <p className="common-text">
              <strong className="common-sub-title">Company Name:</strong>{" "}
              {project.companyName}
            </p>
          )}
          {project.industry && (
            <p className="common-text">
              <strong className="common-sub-title">Industry:</strong>{" "}
              {project.industry}
            </p>
          )}
          {project.location && (
            <p className="common-text">
              <strong className="common-sub-title">Location:</strong>{" "}
              {project.location}
            </p>
          )}
          {project.year && (
            <p className="common-text">
              <strong className="common-sub-title">Year:</strong> {project.year}
            </p>
          )}
          {/* {project.liveLink && (
            <p className="common-text">
              <strong className="common-sub-title">Live Link:</strong>{" "}
              <a href={project.liveLink}>Live</a>
            </p>
          )} */}
          {project.liveLink && !project.liveLinkExpired && (
            <p className="text-sm  text-gray-500 dark:text-gray-400">
              <strong className="common-sub-title">Live Project:</strong>{" "}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800"
              >
                View Live Project
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Remaining Images */}
      {remainingImages.length > 0 && (
        <>
          <Divider /> <h3 className="common-title">More Images:</h3>
          <div className="mt-6 grid grid-cols-2 gap-6">
            {remainingImages.map((image, index) => (
              <div key={index} className="remaining-image-container">
                <ProjectImage
                  src={image}
                  alt={`Remaining Feature Image ${index + 1}`}
                  className="common-image"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectPage;

export async function generateStaticParams() {
  const response = await fetch(LINKS.PROJECT);
  //   const projects: Project[] = await response.json();
  const projects: Project[] = projectListV2;

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const projects = projectListV2;

  const project = projects.find((p) => p?.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.metaKeywords.join(", "),
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.thumbnail || "/default-thumbnail.jpg",
      type: "website",
      url: `${LINKS.PROJECT}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.thumbnail || "/default-thumbnail.jpg",
    },
  };
}
