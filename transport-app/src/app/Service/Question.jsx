import Link from "next/link";
import React from "react";

const Question = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-100 px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
                {/* Left Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-4xl font-bold text-gray-900 mb-4">
                        Got Questions? <br /> We&apos;ve Got Answers
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        We are always happy to hear from you. If you have any questions, suggestions, or opinions, please do not hesitate to reach out to us.
                    </p>
                    <Link href="/Contact">
                        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-700">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Right Section (FAQ Accordion) */}
                <div className="lg:w-1/2">
                    {[
                        {
                            question: "Is there any time frame to buy a ticket?",
                            answer: "There is no time limit to buy tickets from our website or app. But if a customer wants to purchase a ticket through our helpline number, then the customer should call our helpline number 16374 (Operation Time- 7:00 AM to 11:59 PM).",
                        },
                        {
                            question: "What is the process of migrating or canceling a ticket?",
                            answer: "For cancellation and migration, customers must have 12/24 hours before trip departure time depending on the operator. For migration, customers must call our helpline number 16374. Also, the customer must call from their ticket booking number. Customers can also cancel a ticket from our website if they have enough time before the trip departure time (12/24 hours excluding 12 AM to 7 AM).",
                        },
                        {
                            question: "How can I check TransportEase offers?",
                            answer: "Customers can check our offers on our website. Firstly, go to our website, click the 'BUS' option, and then navigate to the Deals and Offers section. Customers can also call our helpline number 16374 for more queries and offers.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="mb-4">
                            <input
                                type="checkbox"
                                id={`faq-${index}`}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={`faq-${index}`}
                                className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer transition-all duration-300 border border-gray-200 hover:shadow-lg"
                            >
                                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                                <span className="text-green-600 text-xl transition-transform peer-checked:rotate-180">
                                    ▼
                                </span>
                            </label>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2 hidden peer-checked:block">
                                <p className="text-gray-700">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;
