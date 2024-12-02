import React from 'react';

const Features = () => (
  <section id="features" className="py-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-4 border rounded text-center">
        <h3 className="text-xl font-semibold mb-2">1. Web Development</h3>
        <p className="text-gray-600">Building, programming, and maintaining websites and 
          web applications. Website developers use various programming languages, like HTML, CSS, 
          and JavaScript, to develop websites and web applications.</p>
      </div>
      <div className="p-4 border rounded text-center">
        <h3 className="text-xl font-semibold mb-2">2. Cyber Security </h3>
        <p className="text-gray-600"> The practice of protecting systems, networks, and programs from digital attacks</p>
      </div>
      <div className="p-4 border rounded text-center">
        <h3 className="text-xl font-semibold mb-2">3. Data Science</h3>
        <p className="text-gray-600">Data science combines math and statistics, specialized programming, advanced analytics, 
          artificial intelligence (AI) and machine learning with specific subject matter expertise to uncover 
          actionable insights hidden in an organization's data</p>
        
      </div>
      <div className="p-4 border rounded text-center">
        <h3 className="text-xl font-semibold mb-2">4. Computer Programming</h3>
        <p className="text-gray-600">the composition of sequences of instructions, called programs. Languages: Python, Java, SQL,NoSQL,C,C++ C#.</p>
        
      </div>
    </div>
  </section>
);

export default Features;
