import { ExternalLink, Users, Calendar } from 'lucide-react';
import { Problem } from '../types';
import { solutions } from '../data/solutions';

interface ProblemCardProps {
  problem: Problem;
  onViewSolutions: (day: number) => void;
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800 border-green-200',
  Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Hard: 'bg-red-100 text-red-800 border-red-200'
};

export default function ProblemCard({ problem, onViewSolutions }: ProblemCardProps) {
  const solutionCount = solutions[problem.day]?.length || 0;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Day {problem.day}
            </div>
            {problem.difficulty && (
              <div className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[problem.difficulty]}`}>
                {problem.difficulty}
              </div>
            )}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {problem.date}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
        
        {problem.type && (
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Type:</span> {problem.type}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href={problem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Problem</span>
            </a>
            
            {solutionCount > 0 && (
              <button
                onClick={() => onViewSolutions(problem.day)}
                className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>{solutionCount} Solution{solutionCount !== 1 ? 's' : ''}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}