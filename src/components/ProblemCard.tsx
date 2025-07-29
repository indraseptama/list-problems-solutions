import { ExternalLink, Users, Calendar, Code, Trophy } from 'lucide-react';
import { Problem } from '../types';
import { solutions } from '../data/solutions';

interface ProblemCardProps {
  problem: Problem;
  onViewSolutions: (day: number) => void;
}

const difficultyColors = {
  Easy: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  Hard: 'bg-rose-50 text-rose-700 border-rose-200'
};

const difficultyIcons = {
  Easy: '🟢',
  Medium: '🟡', 
  Hard: '🔴'
};

export default function ProblemCard({ problem, onViewSolutions }: ProblemCardProps) {
  const solutionCount = solutions[problem.day]?.length || 0;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
              <Trophy className="w-3 h-3" />
              <span>Day {problem.day}</span>
            </div>
            {problem.difficulty && (
              <div className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center space-x-1 ${difficultyColors[problem.difficulty]}`}>
                <span>{difficultyIcons[problem.difficulty]}</span>
                <span>{problem.difficulty}</span>
              </div>
            )}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {problem.date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {problem.title}
        </h3>
        
        {problem.type && (
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 text-sm font-medium">{problem.type}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href={problem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 hover:text-indigo-700 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Problem</span>
            </a>
            
            {solutionCount > 0 && (
              <button
                onClick={() => onViewSolutions(problem.day)}
                className="flex items-center space-x-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 hover:text-emerald-700 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
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