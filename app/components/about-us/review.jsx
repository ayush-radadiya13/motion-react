import React from "react";
import { ThumbsUp } from "lucide-react";

const RatingsReviews = () => {
    const starRatings = [
        { stars: 5, percentage: 42 },
        { stars: 4, percentage: 17 },
        { stars: 3, percentage: 8 },
        { stars: 2, percentage: 8 },
        { stars: 1, percentage: 25 },
    ];

    const satisfactionMetrics = [
        { label: "Response", percentage: 100 },
        { label: "Quality", percentage: 100 },
        { label: "Delivery", percentage: 100 },
    ];

    const reviews = [
        {
            initial: "A",
            name: "Amol Salgaonkar",
            location: "Thane, Maharashtra",
            date: "15-January-24",
            rating: 5,
            productName: "CNC Controllers",
            review: "Good",
        },
        {
            initial: "S",
            name: "Santosh Raghuvir Lotlikar",
            location: "Vasco Da Gama, Goa",
            date: "12-October-23",
            rating: 5,
            productName: "AC Servo Motor",
            review: "Ur file does not open.",
        },
        {
            initial: "S",
            name: "SRIJIT JANA",
            location: "Kolkata, West Bengal",
            date: "03-May-22",
            rating: 5,
            productName: "Servo Gearbox",
            review: "",
            badges: ["Response", "Delivery"],
        },

    ];

    const StarRating = ({ rating, filled = true }) => {
        return (
            <div className="flex  bg-white gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-lg ${
                            star <= rating
                                ? filled
                                    ? "text-yellow-400"
                                    : "text-yellow-400"
                                : "text-gray-300"
                        }`}
                    >
            ★
          </span>
                ))}
            </div>
        );
    };

    return (
        <section className=" ">
            <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-400">
                    Ratings & Reviews
                </h1>

                {/* Rating Overview */}
                <div className="flex flex-col md:flex-row justify-center gap-12 mb-12">
                    {/* Left Section */}
                    <div className="flex-1 max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                            {/* Overall Rating */}
                            <div className="text-center">
                                <div className="flex items-baseline gap-1 mb-2 justify-center">
                                    <span className="text-5xl font-bold">4.0</span>
                                    <span className="text-2xl text-gray-500">/5</span>
                                </div>
                                <StarRating rating={4} />
                                <p className="text-sm text-gray-600 mt-2">
                                    Reviewed by 12 Users
                                </p>
                            </div>

                            {/* Star Distribution */}
                            <div className="flex-1 min-w-[180px]">
                                {starRatings.map((item) => (
                                    <div
                                        key={item.stars}
                                        className="flex items-center gap-3 mb-2"
                                    >
                    <span className="text-sm font-medium w-8">
                      {item.stars}★
                    </span>
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-green-600 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium w-12 text-right">
                      {item.percentage}%
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Satisfaction */}
                    <div className="flex-1 max-w-md mx-auto border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-8">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <ThumbsUp className="text-green-600" size={24} />
                            <h2 className="text-lg font-semibold text-gray-700">
                                User Satisfaction
                            </h2>
                        </div>
                        {satisfactionMetrics.map((metric) => (
                            <div key={metric.label} className="mb-4">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium">{metric.label}</span>
                                    <span className="text-sm font-medium">
                    {metric.percentage}%
                  </span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-green-600 rounded-full"
                                        style={{ width: `${metric.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Most Relevant Reviews */}
                <div>
                    <h2 className="text-xl  font-bold mb-6 text-center">
                        Most Relevant Reviews
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-5 bg-white hover:shadow-md transition-shadow text-left"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
                                        {review.initial}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <StarRating rating={review.rating} />
                                            <span className="text-xs text-gray-500">
                        {review.date}
                      </span>
                                        </div>
                                        <h3 className="font-semibold text-sm">{review.name}</h3>
                                        <p className="text-xs text-gray-600">{review.location}</p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p className="text-xs text-gray-600 mb-1">
                                        Product Name:{" "}
                                        <span className="text-gray-800">
                      {review.productName}
                    </span>
                                    </p>
                                </div>
                                {review.review && (
                                    <p className="text-sm text-gray-700">{review.review}</p>
                                )}
                                {review.badges && (
                                    <div className="flex gap-2 mt-3">
                                        {review.badges.map((badge) => (
                                            <span
                                                key={badge}
                                                className="flex items-center gap-1 text-xs text-gray-600"
                                            >
                        {badge}{" "}
                                                <ThumbsUp size={12} className="text-green-600" />
                      </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/*<div className="text-center">*/}
                    {/*    <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">*/}
                    {/*        View More Reviews*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default RatingsReviews;
