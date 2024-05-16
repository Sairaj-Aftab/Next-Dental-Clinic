import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ img, date, comment, title, desc }) => {
  return (
    <div className="bg-white rounded-t-md hover:shadow-md">
      <Link href="/" className="w-full h-60 sm:h-80">
        <Image
          className="w-full h-60 sm:h-80 object-cover object-center rounded-t-md"
          src={img}
          alt="Blog"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
      <div className="px-5 pt-5 pb-4 sm:pb-8">
        <ul className="flex gap-4 items-center">
          <li className="flex gap-1 items-center">
            <i className="fi fi-ss-admin-alt text-sm sm:text-lg text-primary-color"></i>
            <p className="text-xs font-medium sm:text-sm sm:font-semibold text-secondary-text-color uppercase">
              Admin
            </p>
          </li>
          <li className="flex gap-1 items-center">
            <i className="fi fi-tr-calendar-days text-sm sm:text-lg text-primary-color"></i>
            <p className="text-xs font-medium sm:text-sm sm:font-semibold text-secondary-text-color uppercase">
              {date}
            </p>
          </li>
          <li className="flex gap-1 items-center">
            <i className="fi fi-ss-comments text-sm sm:text-lg text-primary-color"></i>
            <p className="text-xs font-medium sm:text-sm sm:font-semibold text-primary-color uppercase">
              {comment} comments
            </p>
          </li>
        </ul>
        <Link
          href="/"
          className="text-xl sm:text-2xl font-semibold text-text-color-black hover:text-primary-color my-1 sm:my-3"
        >
          {title}
        </Link>
        <p className="text-base font-medium text-secondary-text-color sm:leading-8">
          {desc.slice(0, 120)}...
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
