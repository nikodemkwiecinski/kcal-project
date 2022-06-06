import React, { memo } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-end bg-dark-blue text-white min-h-1/10">
      <p className="self-center mx-4 xl:text-lg font-bold">
        &copy; Nikodem Kwieciński
      </p>
    </footer>
  );
};

export default memo(Footer);
