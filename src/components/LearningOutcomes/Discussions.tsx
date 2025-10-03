import React from "react";
import Image from "next/image";

const DiscussionsList = [
  {
    id: 1,
    name: "Sarah",
    designation: "Carer",
    rate: 4,
    rating: 4.8,
    review:
      "We offer a wide range of courses covering various aspects of healthcare, including patient care, medical ethics, advanced nursing practices, and more",
    img: "/images/img-squircle.png",
  },
  {
    id: 2,
    name: "John",
    designation: "Nurse",
    rate: 2,
    rating: 4.5,
    review:
      "The courses are designed to be engaging and informative, with a mix of video lectures, interactive quizzes, and practical assignments.",
    img: "/images/img-squircle.png",
  },
  {
    id: 3,
    name: "Emily",
    designation: "Doctor",
    rating: 4.9,
    rate: 3,
    review:
      "The instructors are experienced professionals in the healthcare field, bringing real-world insights to the learning experience.",
    img: "/images/img-squircle.png",
  },
];

function Discussions() {
  return (
    <div className="discussion-sec">
      {DiscussionsList.map((discussion) => (
        <div
          className="bg-box-inner flex items-start discussion-box gap-8 mb-6"
          key={discussion.id}
        >
          <Image
            className="profile-img"
            src={discussion.img}
            alt="care-learning"
            width={200}
            height={200}
          />
          <div className="profile-contents">
            <div className="profile-inner">
              <div className="profile-info">
                <h4>{discussion.name}</h4>
                <p className="designation">{discussion.designation}</p>
              </div>
              <div className="flex items-center rating-col">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 me-1 ${
                      i < Math.round(discussion.rate)
                        ? "rate-active"
                        : "rate-inactive"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}

                <span className="rate-txt ms-2">{discussion.rating}</span>
              </div>
            </div>
            <p className="mt-2">{discussion.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Discussions;
