
import React, { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Link}  from 'gatsby';

function Newsletter() {
  const [email, setEmail] = useState('');
  console.log('data',process.env.GATSBY_MAILCHIMP_U)
  // Replace with your own Mailchimp URL
  const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=${process.env.GATSBY_MAILCHIMP_U}&id=${process.env.GATSBY_MAILCHIMP_ID}`;

  return (
    <div className="bg-gray-100 rounded-xl font-roboto text-black md:p-12 p-5 my-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="lg:text-4xl text-3xl font-bold mb-4 font-inter">
            Sign up for our newsletter
          </h2>
          <p className="text-black text-lg">
            Fuel your love for coffee by joining 1000+ more users like you.
          </p>
        </div>
        <div className="lg:w-1/2">
          {/* MailchimpSubscribe Component */}
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  subscribe({ EMAIL: email });
                }}
                className="flex flex-col sm:flex-row"
              >
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded lg:rounded-l-lg bg-white text-gray-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-secondary mt-6 mb-2 sm:mt-0 text-white px-6 py-3 rounded lg:rounded-r-lg font-semibold hover:bg-black transition-colors"
                >
                  Subscribe
                </button>

                {/* Message Handling */}
                {status === "sending" && (
                  <p className="text-blue-500 mt-4 text-sm">Sending...</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 mt-4 text-sm" dangerouslySetInnerHTML={{ __html: message }} />
                )}
                {status === "success" && (
                  <p className="text-green-500 mt-4 text-sm" dangerouslySetInnerHTML={{ __html: message }} />
                )}
              </form>
            )}
          />
          <p className="mt-4 text-sm text-[#94a3b8]">
            We care about the protection of your data.{' '}
            <Link to="/PrivacyPolicy" className="text-black underline">
            Read our Privacy Policy
          </Link>
          
            .
          </p>
        </div>
      </div>
     
    </div>
  );
}

export default Newsletter;
