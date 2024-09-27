
"use client"; 
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Header {
  title: string;
  subHeaders: string[];
}

const headers: Header[] = [
  { title: "Header 1", subHeaders: ["Subheader 1.1", "Subheader 1.2"] },
  { title: "Header 2", subHeaders: ["Subheader 2.1", "Subheader 2.2", "Subheader 2.3"] },
  { title: "Header 3", subHeaders: ["Subheader 3.1", "Subheader 3.2"] },
];

const Sidebar = () => {
  const [openHeaderIndex, setOpenHeaderIndex] = useState<number | null>(null);
const router = useRouter()
  const toggleHeader = (index: number) => {
    setOpenHeaderIndex(openHeaderIndex === index ? null : index);
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <button
            onClick={() => (router.push("/"))}
            className="w-full text-left py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600"
          >
            Home
          </button>
      {headers.map((header, index) => (
        <div key={index}>
          <button
            onClick={() => toggleHeader(index)}
            className="w-full text-left py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600"
          >
            {header.title}
          </button>
          {openHeaderIndex === index && (
            <div className="flex flex-col pl-4 mt-2">
              {header.subHeaders.map((subHeader, subIndex) => (
                <Link
                  key={subIndex}
                  href={`/topics/${subHeader.replace(/\s+/g, '-').toLowerCase()}`}
                  className="py-1 cursor-pointer hover:text-gray-400"
                >
                  {subHeader}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
