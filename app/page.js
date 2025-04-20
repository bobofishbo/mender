'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Users, Star, User, Activity, Filter } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl">Mender</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-indigo-200 transition">Home</a>
            <a href="#problem" className="hover:text-indigo-200 transition">Problem</a>
            <a href="#solution" className="hover:text-indigo-200 transition">Solution</a>
            <a href="#how-it-works" className="hover:text-indigo-200 transition">How It Works</a>
            <a href="#team" className="hover:text-indigo-200 transition">Team</a>
            <a href="#resources" className="hover:text-indigo-200 transition">Resources</a>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition">
              Sign In
            </button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-400 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect College Mentor</h1>
            <p className="text-xl mb-8">Connect with current students and alumni for personalized guidance on college applications and first-year advice.</p>
            <div className="flex space-x-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-100 transition flex items-center">
                Find a Mentor <ArrowRight className="ml-2" size={18} />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
                Become a Mentor
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
              <div className="p-6 bg-indigo-50">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    M
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Matching in Progress</h3>
                    <p className="text-gray-600">Finding your perfect mentor match...</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-md shadow flex items-center">
                      <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-800">Mentor Match {index + 1}</h4>
                        <div className="flex items-center text-yellow-500">
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <span className="ml-1 text-gray-600 text-sm">5.0</span>
                        </div>
                      </div>
                      <button className="ml-auto bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-400 transition">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The College Application Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigating the college application process is overwhelming for many students, especially those without proper guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-4">
                <User size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lack of Personalized Support</h3>
              <p className="text-gray-600">
                High school counselors are overworked, with an average ratio of 424 students per counselor, making personalized guidance nearly impossible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mb-4">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complex, Stressful Process</h3>
              <p className="text-gray-600">
                With essays, deadlines, financial aid forms, and program requirements, students need reliable guidance to navigate the complexity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unequal Access to Resources</h3>
              <p className="text-gray-600">
                Private college consultants can cost thousands of dollars, creating a significant advantage for students from wealthier backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Solution: Personalized Mentor Matching</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mender connects high school students with current college students and alumni who have recently navigated the process themselves.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-indigo-50 p-8 rounded-lg">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold text-lg">Find Your Mentor</h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2 font-medium">I'm interested in:</label>
                      <div className="flex flex-wrap gap-2">
                        {['Engineering', 'Business', 'Arts', 'Sciences', 'Pre-Med'].map((item, index) => (
                          <div key={index} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2 font-medium">Target Schools:</label>
                      <div className="flex flex-wrap gap-2">
                        {['Ivy League', 'State Universities', 'Liberal Arts', 'Technical Institutes'].map((item, index) => (
                          <div key={index} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2 font-medium">Experience Level:</label>
                      <input 
                        type="range" 
                        className="w-full accent-indigo-500" 
                        min="1" 
                        max="5" 
                        defaultValue="3"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                    <button className="w-full bg-indigo-500 text-white px-4 py-3 rounded-md font-medium hover:bg-indigo-400 transition flex items-center justify-center">
                      <Filter size={18} className="mr-2" /> Match Me with Mentors
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">How Mender Works</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Personalized Matching</h4>
                    <p className="text-gray-600">
                      Using Tinder-like algorithms, students can filter mentors based on college, major, region, experience, and availability.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Verified Mentors</h4>
                    <p className="text-gray-600">
                      All mentors are verified using school emails and LinkedIn profiles to ensure safety and authenticity.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Secure Communication</h4>
                    <p className="text-gray-600">
                      In-app messaging system protects personal information while facilitating meaningful mentoring relationships.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Feedback System</h4>
                    <p className="text-gray-600">
                      Rating system and Experience Scores ensure quality mentorship and help mentors build their reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Mender Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple process that creates meaningful mentoring relationships.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1">
              <div className="h-3 bg-indigo-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-2">
                    1
                  </div>
                  For Students
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Create a profile with your academic interests and college aspirations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Filter mentors based on your specific needs and preferences</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Connect with mentors who have attended your dream schools</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Get personalized guidance on applications, essays, and interviews</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Pay only for the mentorship you need with flexible pricing options</p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-400 transition w-full">
                    Find My Mentor
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1">
              <div className="h-3 bg-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-2">
                    2
                  </div>
                  For Mentors
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Create a verified profile highlighting your experiences and expertise</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Set your own availability and rates based on your Experience Score</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Connect with motivated students seeking guidance in your areas of expertise</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Build your mentoring reputation through positive ratings and feedback</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Earn income while making a positive impact on students' futures</p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-purple-500 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-400 transition w-full">
                    Become a Mentor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students and mentors who have experienced the Mender difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                role: "Student",
                text: "My mentor helped me craft a standout application essay that got me into my dream school. The personalized advice was exactly what I needed!",
                rating: 5
              },
              {
                name: "Mike T.",
                role: "Mentor",
                text: "Being a mentor on Mender has been incredibly rewarding. I'm able to help students avoid the mistakes I made during my application process.",
                rating: 5
              },
              {
                name: "Aisha K.",
                role: "Student",
                text: "As a first-generation college student, I had no idea where to start. My mentor walked me through every step of the application process.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by college students who recently navigated the admissions process themselves.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Cindy Wang",
                role: "Co-Founder & CEO",
                contribution: "Business Strategy, Product Development"
              },
              {
                name: "Bo Xie",
                role: "Co-Founder & CTO",
                contribution: "Platform Architecture, Matching Algorithm"
              },
              {
                name: "Zoey Ling",
                role: "Head of Mentor Relations",
                contribution: "Mentor Recruitment, Quality Assurance"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-indigo-600 text-2xl font-bold mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-indigo-500 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Contributions:</span> {member.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Mentor Match?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join Mender today and get the personalized college guidance you deserve. Whether you're applying to college or want to help others as a mentor, we've got you covered.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-md font-medium hover:bg-indigo-100 transition">
              Sign Up as a Student
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>

      {/* Resources & Footer */}
      <section id="resources" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/businessplan.pdf" className="text-indigo-600 hover:text-indigo-800 transition">
                    Business Plan (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                    College Application Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                    Mentor Handbook
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Caïs, C. (2024). Striking the right balance: Creating an Equitable Sales Commission system.</li>
                <li>IBISWorld. (2023). Education consultants in the US: Market size 2005–2030.</li>
                <li>Lane, P., Falkenstern, C., & Bransberger, P. (2024). Knocking at the college door: Projections of high school graduates (11th ed.).</li>
                <li>Moradpour, J., Zhang, W., Grootendorst, P., Anis, A. H., & Hollis, A. (2022). Modeling tiered pricing frameworks: A simulation approach.</li>
                <li>Sharma, S., Sarkar, D., & Gupta, D. (2012). Agile processes and methodologies: A conceptual study.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-2xl mb-2">Mender</div>
              <p className="text-gray-400">
                Connecting students with the right mentors for college success.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-300 transition">
                Terms
              </a>
              <a href="#" className="hover:text-indigo-300 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-indigo-300 transition">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Mender. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}