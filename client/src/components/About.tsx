import { motion } from "framer-motion";
import { GraduationCap, Code, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Programming workspace with code on screen"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-700 mb-6">
              Passionate About AI & Machine Learning
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Motivated and detail-oriented fresher with a strong foundation in programming and software development. 
              Seeking to leverage academic knowledge and project experience in contributing to efficient and scalable 
              software solutions while growing within a dynamic team environment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="text-primary mr-4 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-700">B.Tech in AI & Machine Learning</h4>
                  <p className="text-slate-600">Anurag University, Hyderabad (2021-Present)</p>
                  <p className="text-sm text-green-600 font-semibold">CGPA: 7.85</p>
                </div>
              </div>

              <div className="flex items-start">
                <Code className="text-primary mr-4 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-700">Core Expertise</h4>
                  <p className="text-slate-600">Python, Machine Learning, Deep Learning, Web Development</p>
                </div>
              </div>

              <div className="flex items-start">
                <Lightbulb className="text-primary mr-4 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-700">Problem Solver</h4>
                  <p className="text-slate-600">Analytical thinking, Team collaboration, Debugging</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
