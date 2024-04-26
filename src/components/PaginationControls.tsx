"use client";

import { FC } from "react";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hashNextPage: boolean;
  hashPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hashNextPage,
  hashPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <div className="flex gap-2">
      <button
        disabled={!hashPrevPage}
        className="bg-blue-500 text-white p-1"
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}  &per_page=${per_page} `);
        }}
      >
        Prev page
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        disabled={!hashNextPage}
        className="bg-blue-500 text-white p-1"
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}  &per_page=${per_page} `);
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default PaginationControls;
