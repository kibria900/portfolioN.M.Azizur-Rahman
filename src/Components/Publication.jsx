import React from "react";

const Publication = () => {
  return (
    <section id="publication" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          Publication(s)
        </h2>

        <div className="space-y-8 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Magazine Publications</h3>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                A. Roni, M. Nasrullah, N. M. A. Rahman, F. Ahmed,{" "}
                <span className="italic">
                  “Some Causes and Countermeasures of Crease Mark in Knit Fabric Dyeing,”
                </span>{" "}
                <strong>Textile Today</strong>, ISSN 1999-2076, reg. 8/2012, vol. 17, p. 40, April 2024.{" "}
                <a
                  href="https://www.textiletoday.com.bd/textile-today-april%202024-issue"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Online
                </a>
              </li>

              <li>
                N. M. A. Rahman, A. Roni, M. Nasrullah,{" "}
                <span className="italic">
                  “Optimization of yarn, knitting & dyeing parameters to minimize crease mark in 100% cotton single jersey knitted fabrics,”
                </span>{" "}
                <strong>Textile Today</strong>, ISSN 1999-2076, reg. 8/2012, vol. 18, p. 44, May 2025.{" "}
                <a
                  href="https://www.textiletoday.com.bd/textile-today-may-2025-issue"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;
