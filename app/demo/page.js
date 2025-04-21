'use client';

import React, { useState } from 'react';
import { Filter, Star, ArrowLeft, Search, Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Demo() {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    interests: [],
    schools: [],
    experience: 3
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);

  const interests = ['Engineering', 'Business', 'Arts', 'Sciences', 'Pre-Med'];
  const schools = ['Ivy League', 'State Universities', 'Liberal Arts', 'Technical Institutes'];

  const toggleInterest = (interest) => {
    if (filters.interests.includes(interest)) {
      setFilters({
        ...filters,
        interests: filters.interests.filter(i => i !== interest)
      });
    } else {
      setFilters({
        ...filters,
        interests: [...filters.interests, interest]
      });
    }
  };

  const toggleSchool = (school) => {
    if (filters.schools.includes(school)) {
      setFilters({
        ...filters,
        schools: filters.schools.filter(s => s !== school)
      });
    } else {
      setFilters({
        ...filters,
        schools: [...filters.schools, school]
      });
    }
  };

  const handleExperienceChange = (e) => {
    setFilters({
      ...filters,
      experience: parseInt(e.target.value)
    });
  };

  const mentors = [
    {
      id: 1,
      name: 'Emily Chen',
      school: 'Harvard University',
      major: 'Computer Science',
      bio: "Senior at Harvard studying CS with a minor in Entrepreneurship. I've gone through the whole application process and can help with essays, interviews, and test prep.",
      rating: 4.9,
      reviews: 24,
      interests: ['Engineering', 'Sciences'],
      schools: ['Ivy League'],
      experience: 4,
      price: '$45/hour',
      availability: ['Monday', 'Wednesday', 'Friday']
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      school: 'UC Berkeley',
      major: 'Business Administration',
      bio: 'Recent Berkeley grad with experience in helping students get into their dream schools. I specialize in business school applications and personal statements.',
      rating: 4.8,
      reviews: 18,
      interests: ['Business'],
      schools: ['State Universities'],
      experience: 3,
      price: '$35/hour',
      availability: ['Tuesday', 'Thursday', 'Saturday']
    },
    {
      id: 3,
      name: 'Sofia Rodriguez',
      school: 'Williams College',
      major: 'Psychology',
      bio: 'First-generation college student with experience navigating financial aid, scholarships, and the liberal arts application process.',
      rating: 5.0,
      reviews: 15,
      interests: ['Sciences', 'Arts'],
      schools: ['Liberal Arts'],
      experience: 4,
      price: '$40/hour',
      availability: ['Monday', 'Thursday', 'Sunday']
    },
    {
      id: 4,
      name: 'James Park',
      school: 'MIT',
      major: 'Mechanical Engineering',
      bio: 'MIT grad student passionate about helping STEM-oriented students with their college applications. I can help with essays and preparing for technical interviews.',
      rating: 4.7,
      reviews: 31,
      interests: ['Engineering', 'Sciences'],
      schools: ['Technical Institutes'],
      experience: 5,
      price: '$50/hour',
      availability: ['Wednesday', 'Saturday', 'Sunday']
    },
    {
      id: 5,
      name: 'Amara Washington',
      school: 'Johns Hopkins University',
      major: 'Biology (Pre-Med)',
      bio: "Pre-med student who's helped dozens of high school students get into top medical programs. I specialize in science-oriented applications and interview prep.",
      rating: 4.9,
      reviews: 27,
      interests: ['Sciences', 'Pre-Med'],
      schools: ['Ivy League', 'State Universities'],
      experience: 4,
      price: '$45/hour',
      availability: ['Tuesday', 'Friday', 'Sunday']
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    // Filter by search query
    if (searchQuery && !mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !mentor.school.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !mentor.major.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by interests
    if (filters.interests.length > 0 && !filters.interests.some(interest => mentor.interests.includes(interest))) {
      return false;
    }
    
    // Filter by schools
    if (filters.schools.length > 0 && !filters.schools.some(school => mentor.schools.includes(school))) {
      return false;
    }
    
    // Filter by experience level
    if (mentor.experience < filters.experience) {
      return false;
    }
    
    return true;
  });

  const findMatches = () => {
    setStep(2);
  };

  const viewMentorProfile = (mentor) => {
    setSelectedMentor(mentor);
    setStep(3);
  };

  const goBack = () => {
    if (step === 3) {
      setStep(2);
      setSelectedMentor(null);
    } else {
      setStep(1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl flex items-center">
            <ArrowLeft className="mr-2" size={20} />
            Mender Demo
          </Link>
          <div className="flex space-x-2">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b bg-indigo-50">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Find Your Perfect Mentor</h1>
                <p className="text-gray-600">
                  Tell us what you're looking for in a mentor, and we'll match you with the best fit.
                </p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">I'm interested in:</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <button
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          filters.interests.includes(interest)
                            ? 'bg-indigo-500 text-white'
                            : 'bg-indigo-100 text-indigo-600'
                        }`}
                        onClick={() => toggleInterest(interest)}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">Target Schools:</label>
                  <div className="flex flex-wrap gap-2">
                    {schools.map((school, index) => (
                      <button
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          filters.schools.includes(school)
                            ? 'bg-indigo-500 text-white'
                            : 'bg-indigo-100 text-indigo-600'
                        }`}
                        onClick={() => toggleSchool(school)}
                      >
                        {school}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">Minimum Experience Level:</label>
                  <input 
                    type="range" 
                    className="w-full accent-indigo-500" 
                    min="1" 
                    max="5" 
                    value={filters.experience}
                    onChange={handleExperienceChange}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
                <button 
                  className="w-full bg-indigo-500 text-white px-4 py-3 rounded-md font-medium hover:bg-indigo-400 transition flex items-center justify-center"
                  onClick={findMatches}
                >
                  <Filter size={18} className="mr-2" /> Find My Mentor Matches
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="flex justify-between mb-6 items-center">
              <button 
                className="flex items-center text-indigo-600 hover:text-indigo-800" 
                onClick={goBack}
              >
                <ArrowLeft size={18} className="mr-1" /> Back to Filters
              </button>
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search mentors..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-6">
              {filteredMentors.length} {filteredMentors.length === 1 ? 'Mentor' : 'Mentors'} Found
            </h1>

            <div className="space-y-6">
              {filteredMentors.length > 0 ? (
                filteredMentors.map(mentor => (
                  <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xl font-bold flex-shrink-0">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-xl font-semibold">{mentor.name}</h2>
                              <p className="text-gray-600">{mentor.school} • {mentor.major}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-semibold text-indigo-600">{mentor.price}</div>
                              <div className="flex items-center justify-end text-yellow-500">
                                <Star size={16} fill="currentColor" />
                                <span className="ml-1 text-gray-700">{mentor.rating} ({mentor.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                          <p className="mt-2 text-gray-700">{mentor.bio}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {mentor.interests.map((interest, index) => (
                              <span key={index} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                                {interest}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <div className="flex items-center text-gray-600">
                              <Calendar size={16} className="mr-1" />
                              <span className="text-sm">Available: {mentor.availability.join(', ')}</span>
                            </div>
                            <button 
                              className="bg-indigo-500 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-400 transition"
                              onClick={() => viewMentorProfile(mentor)}
                            >
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h2 className="text-xl font-semibold mb-2">No mentors match your criteria</h2>
                  <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                  <button 
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-400 transition"
                    onClick={goBack}
                  >
                    Adjust Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 3 && selectedMentor && (
          <div>
            <button 
              className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6" 
              onClick={goBack}
            >
              <ArrowLeft size={18} className="mr-1" /> Back to Search Results
            </button>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-indigo-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold">
                    {selectedMentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-6">
                    <h1 className="text-3xl font-bold">{selectedMentor.name}</h1>
                    <p className="text-xl">{selectedMentor.school} • {selectedMentor.major}</p>
                    <div className="flex items-center mt-2">
                      <Star size={20} fill="currentColor" className="text-yellow-400" />
                      <span className="ml-1 text-white">{selectedMentor.rating} ({selectedMentor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-3">About Me</h2>
                    <p className="text-gray-700 mb-6">{selectedMentor.bio}</p>

                    <h2 className="text-xl font-semibold mb-3">My Expertise</h2>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {selectedMentor.interests.map((interest, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                          {interest}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl font-semibold mb-3">Schools I Can Help With</h2>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {selectedMentor.schools.map((school, index) => (
                        <span key={index} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                          {school}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl font-semibold mb-3">What I Can Help You With</h2>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>College selection strategy</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Personal statement review</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Supplemental essays</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Application timeline planning</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Interview preparation</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Financial aid advice</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h2 className="text-xl font-semibold mb-4">Book a Session</h2>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-indigo-600">{selectedMentor.price}</div>
                        <p className="text-gray-600">50-minute session</p>
                      </div>

                      <h3 className="font-medium mb-2">Available Days</h3>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {selectedMentor.availability.map((day, index) => (
                          <div key={index} className="bg-white border border-indigo-200 rounded-md p-2 text-center text-indigo-600">
                            {day}
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-indigo-500 text-white px-4 py-3 rounded-md font-medium hover:bg-indigo-400 transition mb-3">
                        Schedule a Session
                      </button>
                      <button className="w-full border border-indigo-500 text-indigo-500 px-4 py-3 rounded-md font-medium hover:bg-indigo-50 transition flex items-center justify-center">
                        <MessageCircle size={18} className="mr-2" /> Message {selectedMentor.name.split(' ')[0]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            This is a demo of the Mender platform. In a real implementation, you would be able to book sessions and message mentors.
          </p>
          <Link href="/" className="text-indigo-300 hover:text-indigo-200 mt-2 inline-block">
            Return to Homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}