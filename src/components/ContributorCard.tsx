import { ExternalLink, Code, Star, Trophy, Medal, Award } from 'lucide-react';
import { Contributor } from '../types';

interface ContributorCardProps {
  contributor: Contributor;
  rank: number;
}

const contributionIcons: Record<string, string> = {
  code: '💻',
  review: '👀',
  ideas: '💡',
  doc: '📚',
  maintenance: '🔧',
  test: '🧪'
};

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Trophy className="w-5 h-5 text-yellow-500" />;
    case 2: return <Medal className="w-5 h-5 text-gray-400" />;
    case 3: return <Award className="w-5 h-5 text-amber-600" />;
    default: return <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-bold text-indigo-600">#{rank}</div>;
  }
};

const getRankBadgeColor = (rank: number) => {
  switch (rank) {
    case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white';
    case 2: return 'bg-gradient-to-r from-gray-300 to-gray-400 text-white';
    case 3: return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white';
    default: return 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white';
  }
};

export default function ContributorCard({ contributor, rank }: ContributorCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 overflow-hidden">
      {/* Header with Rank */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 relative">
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${getRankBadgeColor(rank)} shadow-lg`}>
            #{rank}
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={contributor.avatar_url}
              alt={contributor.name}
              className="w-16 h-16 rounded-2xl border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
              {getRankIcon(rank)}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-indigo-600 transition-colors">
                {contributor.name}
              </h3>
              <a
                href={contributor.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600 transition-colors p-1 hover:bg-white/50 rounded-lg"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">@{contributor.login}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-indigo-50 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center space-x-1 text-indigo-600 mb-1">
              <Code className="w-4 h-4" />
              <span className="text-lg font-bold">{contributor.solutionCount}</span>
            </div>
            <div className="text-xs text-indigo-600 font-medium">Solutions</div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center space-x-1 text-purple-600 mb-1">
              <Star className="w-4 h-4" />
              <span className="text-lg font-bold">{contributor.contributions.length}</span>
            </div>
            <div className="text-xs text-purple-600 font-medium">Contributions</div>
          </div>
        </div>
        
        {/* Contribution Types */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contribution Types</div>
          <div className="flex flex-wrap gap-2">
            {contributor.contributions.map((contribution) => (
              <span
                key={contribution}
                className="inline-flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium transition-colors cursor-default"
                title={contribution}
              >
                <span>{contributionIcons[contribution] || '🔧'}</span>
                <span className="capitalize">{contribution}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}