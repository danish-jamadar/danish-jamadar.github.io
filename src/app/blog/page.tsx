import { BlogCard } from "@/components/blog-card";
import { generatePageMetadata } from "../seo";
import Link from "next/link";
import { fetchArticles } from "@/utils";
import { BlogCardProps } from "@/types";
import { LINKS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Read my blogs on web development, design and more.",
});

export default async function Blog() {
  const mediumArticles: BlogCardProps[] = await fetchArticles();

  return (
    <section>
      <ul>
        {mediumArticles.map((blog, index: number) => (
          <li
            key={blog.link}
            className="divide-y divide-gray-200 py-1 dark:divide-gray-700"
          >
            <Link
              href={`${blog.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlogCard
                blog={blog}
                isLast={index === mediumArticles.length - 1}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="cursor-pointer items-center justify-between space-x-4 border-gray-200 p-4 text-blue-600 transition-all">
        <a
          href={LINKS.MEDIUM_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="align-center flex justify-center">View More...</span>
        </a>
      </div>
    </section>
  );
}

export const revalidate = 60;
