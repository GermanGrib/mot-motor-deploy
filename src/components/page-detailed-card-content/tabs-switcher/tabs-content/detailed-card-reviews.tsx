"use client";
import { useState } from "react";

import customerReviews from "../../../../data/mock-product-cards-data/reviews-list.json";
import Review from "../../../review";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../ui/pagination";

const DetailedCardReviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const totalPages = Math.ceil(customerReviews.length / reviewsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPaginatedReviews = () => {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    return customerReviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  return (
    <section>
      <div className="container">
        <h3 className="text-lg md:text-xl font-bold mb-7 md:mb-11">
          Отзывы{" "}
          <span className="font-medium">Лодка ПВХ Altair HD 320 НДНД</span>
        </h3>
        <ul className="flex flex-col gap-6 mb-9">
          {getPaginatedReviews().map(review => {
            const { id, rating, name, lastName, text, publicationDate } =
              review;
            return (
              <li
                key={id}
                className="pb-6 border-b border-solid border-[#eaebec]"
              >
                <Review
                  rating={rating}
                  authorName={name}
                  authorLastName={lastName}
                  text={text}
                  publicationDate={publicationDate}
                />
              </li>
            );
          })}
        </ul>
        <Pagination className="flex justify-center lg:justify-start">
          <PaginationContent>
            <PaginationItem>
              {currentPage !== 1 && (
                <PaginationPrevious onClick={handlePrevious} />
              )}
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handleClick(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={handleNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default DetailedCardReviews;
