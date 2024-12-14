import Link from 'next/link';
import React from 'react';

const Question = () => {
    return (
        <div className='flex justify-center items-center py-20'>
            <div className='max-w-[480px]'>
                <p className='text-3xl font-semibold text-slate-700 pb-5'>Got Questions ? <br/>
                    We&apos;ve Got Answers</p>
                <p className='text-slate-800'>
                    We are always happy to hear from you. If you have any questions, suggestions or opinions, please do not hesitate to reach out to us.
                </p>
                <Link href = "/Contact">
                <button className='btn mt-5 bg-white text-black border-2 border-black'>Contact us</button>
                </Link>
            </div>
            <div className='max-w-[550px]'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Is there any time frame to buy a ticket?</div>
                    <div className="collapse-content">
                        <p>There is no time limit to buy tickets from our website or app. But if a customer wants to purchase a ticket through our helpline number, then the customer should call our helpline number 16374 (Operation Time- 7:00 AM to 11:59 PM).</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What is the process of Migrate or Cancelling a ticket?</div>
                    <div className="collapse-content">
                        <p>For cancellation and migration, customers must have 12/24 hours before trip departure time depending on the operator. For migration, customers must call our helpline number 16374. Also, the customer must call from his ticket booking number. Also, a customer can cancel a ticket from our website if he has enough time from the trip departure time (12/24 hours excluding 12 AM to 7 AM).</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How can I check TransportEase&apos;s offers?</div>
                    <div className="collapse-content">
                        <p>Customers can check our offers on our website. Firstly, go to our website then Click &apos;BUS&apos; option, and then go to the &apos;Deals and offers&apos; option. Customers also can call our helpline number 16374 for more queries and offers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;