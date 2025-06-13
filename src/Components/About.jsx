import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-white via-blue-50 to-emerald-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 border-b-4 border-blue-500 inline-block">
          About Me
        </h2>

        {/* 👨‍🔬 Intro */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Hello! I'm <strong className="text-blue-600">N. M. Azizur Rahman</strong>, a passionate researcher with a strong academic background in{" "}
          <span className="text-emerald-600 font-semibold">Textile Engineering</span> from the{" "}
          <span className="text-indigo-600 font-semibold">Bangladesh University of Textiles (BUTEX)</span>. I’m particularly interested in sustainable materials, advanced fiber technologies, and functional smart textiles.
        </p>

        {/* 🎓 Education */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">🎓 Education</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-gray-800">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-3">Degree</th>
                  <th className="p-3">Institution</th>
                  <th className="p-3">Year</th>
                  <th className="p-3">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">B.Sc. in Textile Engineering</td>
                  <td className="p-3">Bangladesh University of Textiles</td>
                  <td className="p-3">2024</td>
                  <td className="p-3">CGPA 3.59 / 4.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">H.S.C.</td>
                  <td className="p-3">Dhaka City College</td>
                  <td className="p-3">2018</td>
                  <td className="p-3">GPA 5.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">S.S.C.</td>
                  <td className="p-3">Annada Government High School</td>
                  <td className="p-3">2016</td>
                  <td className="p-3">GPA 5.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">J.S.C.</td>
                  <td className="p-3">Annada Government High School</td>
                  <td className="p-3">2013</td>
                  <td className="p-3">GPA 5.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 🔬 Research Interests */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">🔬 Research Interests</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Sustainable polymer synthesis & stimuli-responsive polymers</li>
            <li>Energy-harvesting polymeric materials</li>
            <li>High-performance fiber synthesis, graphene & nanocomposites</li>
            <li>Sensor-integrated smart textiles & bio-composites</li>
            <li>Natural fiber-reinforced composites & process optimization</li>
            <li>Biometric recognition systems & human-computer interaction</li>
          </ul>
        </div>

        {/* 🎬 Favorites */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">🎬 Personal Favorites</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold">🎥 Films</h4>
              <ul className="list-disc list-inside">
                <li>Interstellar</li>
                <li>The Lord of the Rings</li>
                <li>The Maze Runner</li>
                <li>Forrest Gump</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">🎶 Music</h4>
              <p>National Anthem of Bangladesh</p>
            </div>
            <div>
              <h4 className="font-semibold">📚 Books</h4>
              <ul className="list-disc list-inside">
                <li>A Brief History of Time</li>
                <li>Atomic Habits</li>
                <li>Pather Panchali</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 📄 Download CV Placeholder */}
        <div className="text-center">
          <a
            href="/CV.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            📄 Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
