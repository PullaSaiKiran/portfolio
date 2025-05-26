import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Smart Farming Management Using Deep Learning",
      description: "Built a comprehensive model for crop selection and fertilizer recommendations using advanced deep learning techniques with TensorFlow and Flask backend.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tech: ["TensorFlow", "Flask", "Deep Learning", "Python"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Plan Generator",
      description: "Developed a responsive web application to create personalized fitness plans based on user inputs such as weight, age, and fitness goals using modern web technologies.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tech: ["AngularJS", "Flask", "Python", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Loan Prediction Using Machine Learning",
      description: "Created an intelligent machine learning model to predict loan approval likelihood based on comprehensive applicant data analysis and feature engineering.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tech: ["Machine Learning", "Python", "Scikit-learn", "Pandas"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Showcasing my experience in AI/ML and web development</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="professional-card bg-white overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Navigate to GitHub repository for ${project.title}`);
                      }}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Navigate to live demo for ${project.title}`);
                      }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="tech-badge px-3 py-1 text-sm font-semibold"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">View Project</span>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-slate-400 hover:text-indigo-600 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Navigate to GitHub repository for ${project.title}`);
                        }}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        className="text-slate-400 hover:text-indigo-600 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Navigate to live demo for ${project.title}`);
                        }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
