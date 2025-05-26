import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/attached_assets/resume new (4).pdf";
    link.download = "Pulla_Sai_Kiran_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-blue-600 mb-2">Hello, I'm</h3>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Pulla Sai Kiran
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
                AI/ML Developer & Software Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              Passionate about creating intelligent solutions with cutting-edge machine learning 
              technologies and building scalable software applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadResume}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 text-gray-600"
            >
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-600 mr-2" />
                <span>Available for opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl font-bold gradient-text">SK</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🤖</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-8 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
            <h3 className="text-3xl font-bold gradient-text mb-2">8.02</h3>
            <p className="text-gray-600 font-medium">CGPA</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
            <h3 className="text-3xl font-bold gradient-text mb-2">3+</h3>
            <p className="text-gray-600 font-medium">Projects</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
            <h3 className="text-3xl font-bold gradient-text mb-2">6+</h3>
            <p className="text-gray-600 font-medium">Certifications</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
            <h3 className="text-3xl font-bold gradient-text mb-2">2+</h3>
            <p className="text-gray-600 font-medium">Years Learning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}