import SectionTitleHeader from "./SectionTitleHeader";
import img from "@/public/images/image_1.jpg";
import BlogCard from "./Card/BlogCard";

const BlogListSection = () => {
  return (
    <div className="bg-section-bg2 py-8">
      <div className="lg:container">
        <SectionTitleHeader title1="Our Blog" title2="Recent From Blog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0">
          <BlogCard
            img={img}
            date="JAN. 20, 2021"
            comment="3"
            title="How to keep your teeth always in the best condition"
            desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
          <BlogCard
            img={img}
            date="JAN. 20, 2021"
            comment="3"
            title="How to keep your teeth always in the best condition"
            desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
          <BlogCard
            img={img}
            date="JAN. 20, 2021"
            comment="3"
            title="How to keep your teeth always in the best condition"
            desc="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
        </div>
      </div>
    </div>
  );
};

export default BlogListSection;
