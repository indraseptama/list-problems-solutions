import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Solution } from '../types';
import { problems } from '../data/problems';

interface SolutionModalProps {
  day: number;
  solutions: Solution[];
  onClose: () => void;
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-100 text-blue-800',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  Python: 'bg-green-100 text-green-800',
  PHP: 'bg-purple-100 text-purple-800',
  Kotlin: 'bg-orange-100 text-orange-800',
  Ruby: 'bg-red-100 text-red-800',
  Go: 'bg-cyan-100 text-cyan-800'
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Day {day}: {problem?.title}
            </h2>
            <p className="text-gray-600 mt-1">{solutions.length} solution{solutions.length !== 1 ? 's' : ''} available</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-gray-900">{solution.author}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${languageColors[solution.language] || 'bg-gray-100 text-gray-800'}`}>
                      {solution.language}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyToClipboard(solution.path)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    >
                      {copiedPath === solution.path ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy path</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://github.com/Boyolali-Dev/list-problems-solutions/blob/main/${solution.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100 rounded p-3">
                  <code className="text-sm text-gray-700 font-mono">{solution.filename}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}