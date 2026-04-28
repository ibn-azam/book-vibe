import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router";

const ReadBooksCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    <div className="flex gap-4 border border-gray-100 rounded-xl p-5 shadow-lg">
      <div className="p-10 bg-gray-100 rounded-lg">
        <img className="w-[130px] h-[170px]" src={image} alt={bookName} />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h2>{bookName}</h2>
          <p>By :{author}</p>
        </div>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <div
              className="badge bg-[#22be0a31] text-[#23BE0A] 
      text-[16px] font-medium px-4 py-3 "
            >
              {tag}
            </div>
          ))}
          <p>Year of Publishing :{yearOfPublishing}</p>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><IoPeopleOutline /></span><p>Publisher :{publisher}</p>
          <span className="flex items-center gap-2"><FaBookOpen /><p>Pages :{totalPages}</p></span>
        </div>
        <div className="border-t border-gray-200 pt-4 flex  items-center gap-3">
          <div
            className="badge bg-[#328eff15] text-[#328EFF] 
      text-[16px] rounded-full font-medium px-5 py-4 "
          >
            Category :{category}
          </div>
          <div
            className="badge bg-[#ffad3315] text-[#FFAC33] 
      text-[16px] rounded-full font-medium px-5 py-4 "
          >
            Rating :{rating}
          </div>
          <Link
            to={`/bookdetails/${bookId}`}
            className="btn rounded-full text-white bg-[#23BE0A]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooksCard;
