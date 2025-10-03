import React from "react";
import Image from "next/image";
import Link from "next/link";

function FilterCol() {
  return (
    <div className="filter-sec">
      <div className="col flex flex-wrap items-center justify-between gap-5">
        <ul className="filter-col  grid grid-cols-2 md:grid-cols-5">
          <li>
            <Link href="" className="filter-link">
              <Image
                src="/images/icons/icon-filter.svg"
                alt="carelearning"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="" className="filter-link">
              <Image
                src="/images/icons/icon-navigation.svg"
                alt="carelearning"
                width={50}
                height={50}
              />  
            </Link>
            {/* <p>All</p> */}
          </li>
          <li>
            <Link href="" className="filter-link">
              <Image
                src="/images/icons/icon-check.svg"
                alt="carelearning"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="" className="filter-link">
              <Image
                src="/images/icons/icon-star.svg"
                alt="carelearning"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="" className="filter-link">
              <Image
                src="/images/icons/icon-book.svg"
                alt="carelearning"
                width={50}
                height={50}
              />
            </Link>
          </li>
        </ul>
        <div className="flex-grow-1 searchbar flex items-center justify-between">
            <input className="w-full" type="text" placeholder="Search for new courses..." />
            <button className="search-btn">
                <Image 
                    src='/images/icons/icon-search.svg'
                    alt="carelearning"
                    width={50}
                    height={50}
                />
            </button>
        </div>
      </div>
    </div>
  );
}

export default FilterCol;
