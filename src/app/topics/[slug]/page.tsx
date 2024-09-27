"use client";
import { useParams, useRouter } from "next/navigation";

const SubheaderPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter() 

  return (
    <div className="p-10">
      <h1 className="text-3xl">{slug?.replace(/-/g, ' ')}</h1>
      <p>This is the content for the subheader: {slug?.replace(/-/g, ' ')}</p>
      <button
            onClick={() => (window.open(
                "https://drive.google.com/file/d/1Ob4cwrY3cjkIYlh7esCETWgY-wiPo_QN/view?usp=drive_link", '_blank'))}
            className=" text-left text-rose-500 py-2 px-4 rounded-lg bg-gray-50 hover:bg-teal-600"
          >
            View
          </button>
    </div>
    
  );
};

export default SubheaderPage;
