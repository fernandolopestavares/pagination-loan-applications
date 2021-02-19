import React, { useCallback, useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Container } from './styles';

interface PaginationProps {
  perPage: number;
  totalItems: number;
  onChangeCurrentPage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  perPage,
  totalItems,
  onChangeCurrentPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / perPage));

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / perPage));
    setCurrentPage(1);
  }, [perPage, totalItems]);

  useEffect(() => {
    onChangeCurrentPage(currentPage);
  }, [onChangeCurrentPage, currentPage]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(page => page + 1);
    }
  }, [currentPage, totalPages]);

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(page => page - 1);
    }
  }, [currentPage]);

  const goToPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  return (
    <Container>
      <button type="button" onClick={handlePrevious}>
        <BsChevronLeft />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={() => goToPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button type="button" onClick={handleNext}>
        <BsChevronRight />
      </button>
    </Container>
  );
};

export default Pagination;
