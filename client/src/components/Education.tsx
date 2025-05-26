import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Anurag University, Hyderabad",
      period: "2021-2025",
      cgpa: "8.02",
      color: "bg-primary"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Nizampet",
      period: "2019-2021",
      cgpa: "8.8",
      color: "bg-accent"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Serenity Model High School, Keesara",
      period: "2019",
      cgpa: "9.2",
      color: "bg-slate-700"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                <div className={`absolute left-6 w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                <div className="ml-20 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-700">{item.degree}</h3>
                    <span className="text-sm text-slate-500">{item.period}</span>
                  </div>
                  <p className="text-slate-600 mb-2">{item.institution}</p>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-green-600">{item.cgpa}</span>
                    <span className="text-slate-600 ml-2">CGPA</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
