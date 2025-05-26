import { motion } from "framer-motion";
import { Shield, GraduationCap, Code } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      organization: "Cisco",
      category: "Network Technology",
      title: "Introduction to Cybersecurity",
      description: "Fundamental concepts of cybersecurity, network security, and threat assessment",
      icon: Shield,
      color: "border-primary"
    },
    {
      organization: "Infosys Springboard",
      category: "Learning Platform",
      title: "Multiple Certifications:",
      description: "Python for Beginners, Java for Beginners, Introduction to AI, Introduction to Machine Learning",
      icon: GraduationCap,
      color: "border-accent"
    },
    {
      organization: "Board Infinity",
      category: "Programming Education",
      title: "Data Structures and Algorithms",
      description: "Comprehensive understanding of DSA concepts and problem-solving techniques",
      icon: Code,
      color: "border-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">Certifications & Learning</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-slate-50 p-6 rounded-xl border-l-4 ${cert.color}`}
            >
              <div className="flex items-center mb-4">
                <cert.icon className="text-primary text-2xl mr-4" />
                <div>
                  <h3 className="font-semibold text-slate-700">{cert.organization}</h3>
                  <p className="text-sm text-slate-600">{cert.category}</p>
                </div>
              </div>
              <h4 className="font-medium text-slate-700 mb-2">{cert.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
