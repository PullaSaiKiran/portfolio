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
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Here are some of my recent projects showcasing my skills in AI/ML and web development</p>
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
              <Card className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="project-overlay absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Navigate to GitHub repository for ${project.title}`);
                        }}
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.demo}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Navigate to live demo for ${project.title}`);
                        }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
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
