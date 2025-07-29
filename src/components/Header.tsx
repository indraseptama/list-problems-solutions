import { Github, Code2, Trophy, Users, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
              <Code2 className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Boyolali Dev
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Daily Coding Challenge Solutions & Community Rankings
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/Boyolali-Dev/list-problems-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">View Repository</span>
            </a>
            <div className="flex items-center space-x-2 text-purple-200">
              <Users className="w-4 h-4" />
              <span>Join our coding community</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Trophy className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-sm text-purple-200">Problems Solved</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-sm text-purple-200">Active Contributors</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Github className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-sm text-purple-200">Languages</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Daily</div>
                <div className="text-sm text-purple-200">New Challenges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}