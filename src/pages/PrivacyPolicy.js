import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">
          We are committed to protecting your privacy. This Privacy Policy
          outlines how we collect and use your personal information, specifically your
          email address, when you subscribe to our newsletter.
        </p>
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          When you subscribe to our newsletter, we collect your email address. 
          We use this information solely for the purpose of sending you 
          updates and news related to our content.
        </p>
        <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          Your email address will only be used to deliver our newsletter. We do 
          not share your information with third parties, and you can unsubscribe at 
          any time by following the link provided in each newsletter.
        </p>
        <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to request access to or deletion of the information we hold about you. If you wish to do so, 
          please contact us directly, and we will process your request promptly.
        </p>
        <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>
        <p className="mb-4">Last updated: 2024</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default PrivacyPolicy
