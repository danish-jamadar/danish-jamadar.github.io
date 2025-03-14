import { formatDate } from "@/lib/utils";
import { BlogCardProps } from "@/types";
import { getDescriptionFromHtml } from "@/utils";

export function BlogCard({
  blog,
  isLast,
}: {
  blog: BlogCardProps;
  isLast: boolean;
}) {
  return (
    <article className="cursor-pointer space-y-2 rounded-lg p-4 transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={blog.pubDate}>{formatDate(blog.pubDate)}</time>
        </dd>
      </dl>
      <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
        {blog.title}
      </h3>
      <p className="prose max-w-none text-gray-500 dark:text-gray-400">
        {getDescriptionFromHtml(blog.content, 60)}
      </p>
      {!isLast && (
        <hr className="my-4 border-gray-300 dark:border-gray-700" />
      )}
    </article>
  );
}
