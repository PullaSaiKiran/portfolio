import { motion } from "framer-motion";
import { GraduationCap, Code, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-indigo-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-100 to-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-divider w-32 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming ideas into intelligent solutions through innovative AI/ML technologies
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="professional-card p-2 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AI and Machine Learning workspace"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white text-2xl font-bold">AI</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Passionate About <span className="gradient-text">AI & Machine Learning</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Motivated and detail-oriented computer science student with a strong foundation in programming and software development. 
                Passionate about leveraging cutting-edge AI/ML technologies to create innovative solutions that solve real-world problems 
                and drive technological advancement.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="professional-card p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Academic Excellence</h4>
                    <p className="text-gray-200 font-semibold">B.Tech in AI & Machine Learning</p>
                    <p className="text-gray-300">Anurag University, Hyderabad (2021-Present)</p>
                    <div className="inline-flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">
                      CGPA: 8.02/10.0
                    </div>
                  </div>
                </div>
              </div>

              <div className="professional-card p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Code className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Technical Expertise</h4>
                    <p className="text-gray-300">Python • Machine Learning • Deep Learning • TensorFlow • Flask • Data Structures & Algorithms</p>
                  </div>
                </div>
              </div>

              <div className="professional-card p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Lightbulb className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Core Strengths</h4>
                    <p className="text-gray-300">Problem-solving • Analytical Thinking • Team Collaboration • Debugging • Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
