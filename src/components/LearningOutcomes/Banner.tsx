import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LearningOutcomesProps } from ".";

function Banner({ course }: LearningOutcomesProps) {
  return (
    <div className="banner-sec grid grid-cols-1 lg:grid-cols-2">
      <div className="banner-contents ">
        <p className="overview-txt">Overview</p>
        <h1>{course?.course_name}</h1>
        <p>{course?.short_desc}</p>
        <div className="overview-col">
          <div className="view-about">
            <Image
              src="/images/icons/icon-timer.svg"
              alt="care-learning"
              width={18}
              height={18}
            />
            <span>{course?.hours} Hours</span>
          </div>
          <div className="view-about">
            <Image
              src="/images/icons/icon-modules.svg"
              alt="care-learning"
              width={18}
              height={18}
            />
            <span>{course?.modules?.length} modules</span>
          </div>
          <div className="rating-col flex items-center gap-2">
            <p>4.5</p>
            <Image
              src="/images/img-rating.svg"
              alt="care-learning"
              width={80}
              height={16}
            />
          </div>
        </div>
        <div className="btn-row-head flex items-center gap-4 mt-5">
          <Link
            href="#"
            className="btn-care btn-free transition-all duration-300 ease-in hover:scale-105"
          >
            Free
          </Link>
          <Link
            href="#"
            className="btn-care btn-learn transition-all duration-300 ease-in hover:scale-105"
          >
            Start Learning
          </Link>
          <Link href="#" className="btn-save">
            <Image
              src="/images/icons/icon-save.svg"
              alt="care-learning"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div className="bannerimg">
        <Image
          src="/images/img-banner.png"
          alt="care-learning"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export default Banner;
