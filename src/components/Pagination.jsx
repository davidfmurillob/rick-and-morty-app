import React from "react";

const Pagination = ({prev, next, onPrevious, onNext}) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="pt-20 text-center">
      <ul className="flex justify-center gap-5 mt-3">
        {prev ? (
          <li>
            <button
              className="bg-green2-600 rounded hover:bg-green1-600 py-2 px-5"
              onClick={handlePrevious}
            >
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li>
            <button
              className="bg-green2-600 rounded hover:bg-green1-600 py-2 px-8"
              onClick={handleNext}
            >
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
