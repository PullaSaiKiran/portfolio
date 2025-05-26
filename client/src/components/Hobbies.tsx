import { motion } from "framer-motion";
import { Camera, Book, MapPin } from "lucide-react";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Photography",
      description: "Capturing moments and perspectives through the lens, developing an eye for detail and composition.",
      icon: Camera
    },
    {
      title: "Reading Books",
      description: "Continuous learning through literature, expanding knowledge and staying updated with technology trends.",
      icon: Book
    },
    {
      title: "Traveling",
      description: "Exploring new places and cultures, gaining diverse perspectives and inspiration for creative solutions.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">Beyond Code</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Exploring life outside the digital world</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <hobby.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-3">{hobby.title}</h3>
              <p className="text-slate-600 leading-relaxed">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
