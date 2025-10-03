"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Outcome {
  id: number;
  title?: string;
  translations?: {
    id: number;
    outcome: string;
    locale: string;
  }[];
}

interface TabOutcomesProps {
  outcomes: Outcome[];
}

function TabOutcomes({ outcomes }: TabOutcomesProps) {
  if (!outcomes || outcomes.length === 0) {
    return <div>No learning outcomes available.</div>;
  }

  return (
    <div className="outcomes-row">
      {outcomes.map((item, index) => {
        const description =
          item.translations?.[0]?.outcome || item.title || "No description";

        return (
          <div
            className="outcome-contents bg-box-inner items-center"
            key={item.id}
          >
            <div className="outcome-box flex items-center gap-4">
              <div className="out-num flex items-center justify-center">
                <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
              </div>

              <p className="">{description}</p>

              <div className="out-redirect flex-grow ml-auto text-right">
                <Link href="#" className="w-fit redirect-img">
                  <Image
                    src="/images/icons/icon-redirect.svg"
                    alt="care-learning"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TabOutcomes;
