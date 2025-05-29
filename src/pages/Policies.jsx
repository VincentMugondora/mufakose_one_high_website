import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const policies = [
  {
    id: 1,
    title: 'Code of Conduct',
    icon: '📜',
    summary: 'Outlines the expected behaviour for students, staff, and visitors to foster a safe, respectful, and positive learning environment at Mufakose 1 High.',
    link: '/policies/code-of-conduct.pdf', // Placeholder link
    category: 'Student & Staff Welfare',
  },
  {
    id: 2,
    title: 'Academic Integrity Policy',
    icon: '🎓',
    summary: 'Defines academic honesty, plagiarism, and the consequences of academic misconduct. Promotes a culture of integrity and original work.',
    link: '/policies/academic-integrity.pdf',
    category: 'Academics',
  },
  {
    id: 3,
    title: 'Attendance Policy',
    icon: '⏰',
    summary: 'Details requirements for student attendance, procedures for reporting absences, and the importance of regular school attendance for academic success.',
    link: '/policies/attendance.pdf',
    category: 'Student Welfare',
  },
  {
    id: 4,
    title: 'Uniform Policy',
    icon: '👔',
    summary: 'Specifies the school uniform requirements, promoting a sense of identity, equality, and a neat appearance among students at Mufakose 1 High.',
    link: '/policies/uniform.pdf',
    category: 'School Operations',
  },
  {
    id: 5,
    title: 'Anti-Bullying Policy',
    icon: '🛡️',
    summary: 'Commits to providing a safe and supportive environment free from bullying and harassment, with clear reporting and resolution procedures.',
    link: '/policies/anti-bullying.pdf',
    category: 'Student & Staff Welfare',
  },
  {
    id: 6,
    title: 'ICT Usage Policy',
    icon: '💻',
    summary: 'Governs the responsible use of school ICT resources, including internet safety, digital citizenship, and data privacy for all learners and staff.',
    link: '/policies/ict-usage.pdf',
    category: 'Technology & Safety',
  },
  {
    id: 7,
    title: 'Health and Safety Policy',
    icon: '➕',
    summary: 'Ensures the health, safety, and welfare of all members of the Mufakose 1 High community, covering emergency procedures and risk management.',
    link: '/policies/health-safety.pdf',
    category: 'School Operations & Safety',
  },
  {
    id: 8,
    title: 'Complaints Procedure',
    icon: '🗣️',
    summary: 'Provides a clear and fair process for students, parents, and staff to raise concerns or make complaints, ensuring every voice is heard.',
    link: '/policies/complaints-procedure.pdf',
    category: 'Communication & Governance',
  },
];

export default function PoliciesPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100">
      <AboutHero
        title="School Policies"
        breadcrumb={["Home", "Policies"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-lime-800 drop-shadow-lg">
            📜 Mufakose 1 High School Policies
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            At Mufakose 1 High School, we are dedicated to upholding high standards, ensuring safety, and nurturing a positive learning environment for all. Our policies reflect our commitment to excellence, discipline, and community values.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out transform bg-white border shadow-lg group rounded-xl border-emerald-200 hover:shadow-emerald-400/50 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="mr-3 text-3xl">{policy.icon}</span>
                  <h2 className="text-2xl font-semibold text-emerald-800 group-hover:text-green-700">{policy.title}</h2>
                </div>
                <p className="mb-1 text-xs font-medium text-lime-600">Category: {policy.category}</p>
                <p className="mb-5 text-green-800">{policy.summary}</p>
              </div>
              <div className="p-6 mt-auto bg-gradient-to-r from-emerald-50 to-lime-100">
                <a
                  href={policy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 font-medium text-center text-white transition-colors duration-300 bg-green-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
                >
                  Read Full Policy (PDF)
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="py-12 mt-20 text-center border-t border-b rounded-lg bg-gradient-to-r from-emerald-100 via-lime-100 to-green-100 border-emerald-200">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl font-semibold text-emerald-800">Policy Review & Updates</h2>
            <p className="max-w-2xl mx-auto mt-3 text-lg text-green-700">
              Our policies are reviewed regularly by the school administration and School Development Committee (SDC) to ensure they remain relevant and effective for our community. For more information or questions, please contact the school office.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
