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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-slate-300 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-600">SK</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-4">
            <span className="gradient-text">Pulla Sai Kiran</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-2">AI/ML Developer & Software Engineer</p>
          <p className="text-lg text-slate-500 mb-8 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary mr-2" />
            Hyderabad, India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold"
          >
            <Code className="w-4 h-4 mr-2" />
            View Projects
          </Button>
          <Button
            variant="secondary"
            onClick={handleDownloadResume}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-8 py-3 rounded-full font-semibold"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/PullaSaiKiran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-primary text-2xl transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kiran-72b423218"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-primary text-2xl transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:saikiranp816@gmail.com"
            className="text-slate-600 hover:text-primary text-2xl transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+919515703265"
            className="text-slate-600 hover:text-primary text-2xl transition-colors"
          >
            <Phone className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
