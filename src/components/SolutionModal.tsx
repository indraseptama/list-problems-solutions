import { X, ExternalLink, Copy, Check, Code, User, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Solution } from '../types';
import { problems } from '../data/problems';

interface SolutionModalProps {
  day: number;
  solutions: Solution[];
  onClose: () => void;
}

const languageColors: Record<string, { bg: string; text: string; icon: string }> = {
  TypeScript: { bg: 'bg-blue-50', text: 'text-blue-700', icon: '🔷' },
  JavaScript: { bg: 'bg-yellow-50', text: 'text-yellow-700', icon: '🟨' },
  Python: { bg: 'bg-green-50', text: 'text-green-700', icon: '🐍' },
  PHP: { bg: 'bg-purple-50', text: 'text-purple-700', icon: '🐘' },
  Kotlin: { bg: 'bg-orange-50', text: 'text-orange-700', icon: '🟠' },
  Ruby: { bg: 'bg-red-50', text: 'text-red-700', icon: '💎' },
  Go: { bg: 'bg-cyan-50', text: 'text-cyan-700', icon: '🐹' }
};

export default function SolutionModal({ day, solutions, onClose }: SolutionModalProps) {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const problem = problems.find(p => p.day === day);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPath(text);
      setTimeout(() => setCopiedPath(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Code className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">
                  Day {day}: {problem?.title}
                </h2>
                <div className="flex items-center space-x-4 mt-2 text-indigo-100">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{solutions.length} solution{solutions.length !== 1 ? 's' : ''}</span>
                  </div>
                  {problem?.date && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{problem.date}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid gap-6">
            {solutions.map((solution, index) => {
              const langConfig = languageColors[solution.language] || { bg: 'bg-gray-50', text: 'text-gray-700', icon: '📄' };
              
              return (
                <div key={index} className="group bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 border border-gray-200 hover:border-indigo-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {solution.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {solution.author}
                          </h3>
                          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-lg text-sm font-medium ${langConfig.bg} ${langConfig.text}`}>
                            <span>{langConfig.icon}</span>
                            <span>{solution.language}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => copyToClipboard(solution.path)}
                        className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-xl transition-all duration-200 font-medium border border-gray-200 hover:border-gray-300"
                      >
                        {copiedPath === solution.path ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Path</span>
                          </>
                        )}
                      </button>
                      
                      <a
                        href={`https://github.com/Boyolali-Dev/list-problems-solutions/blob/main/${solution.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 hover:text-indigo-700 px-4 py-2 rounded-xl transition-all duration-200 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Code className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-600">File:</span>
                    </div>
                    <code className="text-sm text-gray-800 font-mono bg-gray-50 px-3 py-2 rounded-lg block">
                      {solution.filename}
                    </code>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}