import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Code, Download, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Hero() {
  const handleDownloadResume = async () => {
    try {
      const response = await apiRequest("GET", "/api/resume");
      const data = await response.json();
      
      // In a real implementation, this would trigger an actual file download
      console.log("Resume download:", data);
      
      // Create a mock download for demonstration
      const link = document.createElement('a');
      link.href = '#';
      link.download = 'Pulla_Sai_Kiran_Resume.pdf';
      link.click();
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-800 to-indigo-800">
        <div className="absolute inset-0 hero-glow"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Professional Profile Picture */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">SK</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 text-shadow">
              <span className="gradient-text">Pulla Sai Kiran</span>
            </h1>
            
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-semibold text-gray-200">
                AI/ML Engineer & Software Developer
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Passionate about creating intelligent solutions with cutting-edge machine learning technologies
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 text-indigo-400 text-lg font-medium">
              <MapPin className="w-5 h-5" />
              <span className="text-white">Hyderabad, India</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Professional Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="stats-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">8.02</div>
            <div className="text-sm text-gray-300 font-medium">CGPA</div>
          </div>
          <div className="stats-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <div className="text-sm text-gray-300 font-medium">Major Projects</div>
          </div>
          <div className="stats-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <div className="text-sm text-gray-300 font-medium">Certifications</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-3" />
            Let's Connect
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Code className="w-5 h-5 mr-3" />
            View Projects
          </Button>
          <Button
            variant="secondary"
            onClick={handleDownloadResume}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-3" />
            Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/PullaSaiKiran"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white hover:bg-indigo-50 rounded-full flex items-center justify-center text-slate-700 hover:text-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kiran-72b423218"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white hover:bg-blue-50 rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:saikiranp816@gmail.com"
            className="w-14 h-14 bg-white hover:bg-green-50 rounded-full flex items-center justify-center text-slate-700 hover:text-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+919515703265"
            className="w-14 h-14 bg-white hover:bg-purple-50 rounded-full flex items-center justify-center text-slate-700 hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Phone className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
