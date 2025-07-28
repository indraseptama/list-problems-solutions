import { Github, Code2, Trophy } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <Code2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Boyolali Dev</h1>
              <p className="text-blue-100 mt-1">Daily Coding Challenge Solutions</p>
            </div>
          </div>
          <a
            href="https://github.com/Boyolali-Dev/list-problems-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-yellow-300" />
              <div>
                <div className="text-2xl font-bold">14</div>
                <div className="text-sm text-blue-100">Problems Solved</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Code2 className="w-6 h-6 text-green-300" />
              <div>
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-blue-100">Active Contributors</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Github className="w-6 h-6 text-purple-300" />
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm text-blue-100">Programming Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}