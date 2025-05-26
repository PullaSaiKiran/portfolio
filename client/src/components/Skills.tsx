import { motion } from "framer-motion";
import { Code, Settings, Wrench, Users, Lightbulb, Brain, Handshake } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 }
      ]
    },
    {
      title: "Technical Skills",
      icon: Settings,
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "DBMS", level: 80 },
        { name: "Debugging", level: 85 }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: [
        { name: "Git", level: 85 },
        { name: "Visual Studio Code", level: 90 }
      ]
    }
  ];

  const softSkills = [
    {
      title: "Problem-solving",
      description: "Analytical approach to complex challenges",
      icon: Lightbulb
    },
    {
      title: "Analytical Thinking",
      description: "Data-driven decision making",
      icon: Brain
    },
    {
      title: "Team Collaboration",
      description: "Effective communication and teamwork",
      icon: Handshake
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <category.icon className="text-primary text-2xl mr-4" />
                <h3 className="text-xl font-semibold text-slate-700">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 rounded-xl"
        >
          <div className="flex items-center mb-8">
            <Users className="text-primary text-2xl mr-4" />
            <h3 className="text-xl font-semibold text-slate-700">Soft Skills</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-slate-700 mb-2">{skill.title}</h4>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
