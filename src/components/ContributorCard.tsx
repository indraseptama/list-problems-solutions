import { ExternalLink, Code, Star } from 'lucide-react';
import { Contributor } from '../types';

interface ContributorCardProps {
  contributor: Contributor;
  rank: number;
}

const contributionIcons: Record<string, string> = {
  code: '💻',
  review: '👀',
  ideas: '🤔',
  doc: '📖',
  maintenance: '🚧',
  test: '⚠️'
};

export default function ContributorCard({ contributor, rank }: ContributorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={contributor.avatar_url}
              alt={contributor.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              #{rank}
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{contributor.name}</h3>
              <a
                href={contributor.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">@{contributor.login}</p>
            
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-1 text-blue-600">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">{contributor.solutionCount} solutions</span>
              </div>
              <div className="flex items-center space-x-1 text-yellow-600">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">{contributor.contributions.length} contributions</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {contributor.contributions.map((contribution) => (
                <span
                  key={contribution}
                  className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  title={contribution}
                >
                  <span>{contributionIcons[contribution] || '🔧'}</span>
                  <span>{contribution}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}