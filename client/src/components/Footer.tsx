import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="gradient-text">Pulla Sai Kiran</span>
          </h3>
          <p className="text-slate-300 mb-6">AI/ML Developer passionate about creating intelligent solutions</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/PullaSaiKiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white text-xl transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-kiran-72b423218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white text-xl transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:saikiranp816@gmail.com"
              className="text-slate-300 hover:text-white text-xl transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">&copy; 2024 Pulla Sai Kiran. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
