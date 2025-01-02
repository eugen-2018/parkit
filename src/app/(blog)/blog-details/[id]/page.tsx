import { Metadata } from "next";
import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";

export const metadata: Metadata = {
  title: "Liko - Blog Details page",
};

export default async function BlogDetailsPage(props:{params: Promise<{id:string}>}) {
  const params = await props.params;
  const blog = [...blog_data].find((blog) => blog.id === Number(params.id));
  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
