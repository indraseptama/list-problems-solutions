import { BarChart3, TrendingUp, Award, Users, Code, Trophy, Target, Zap } from 'lucide-react';
import { problems } from '../data/problems';
import { contributors } from '../data/contributors';

export default function StatsSection() {
  const difficultyStats = problems.reduce((acc, problem) => {
    if (problem.difficulty) {
      acc[problem.difficulty] = (acc[problem.difficulty] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const typeStats = problems.reduce((acc, problem) => {
    if (problem.type) {
      acc[problem.type] = (acc[problem.type] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const totalSolutions = contributors.reduce((sum, contributor) => sum + contributor.solutionCount, 0);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BarChart3 className="w-4 h-4" />
            <span>Community Statistics</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Challenge Progress</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our community's journey through coding challenges and celebrate our collective achievements.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-xl transition-colors">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">{problems.length}</div>
                <div className="text-gray-600 font-medium">Total Problems</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">LeetCode challenges solved</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-100 group-hover:bg-green-200 p-3 rounded-xl transition-colors">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{totalSolutions}</div>
                <div className="text-gray-600 font-medium">Total Solutions</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">Across all languages</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-100 group-hover:bg-purple-200 p-3 rounded-xl transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">{contributors.length}</div>
                <div className="text-gray-600 font-medium">Contributors</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">Active community members</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-yellow-100 group-hover:bg-yellow-200 p-3 rounded-xl transition-colors">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">7</div>
                <div className="text-gray-600 font-medium">Languages</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">Programming languages used</div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Difficulty Distribution */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Trophy className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Difficulty Distribution</h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(difficultyStats).map(([difficulty, count]) => {
                const percentage = (count / problems.length) * 100;
                const colors = {
                  Easy: 'bg-emerald-500',
                  Medium: 'bg-amber-500',
                  Hard: 'bg-rose-500'
                };
                
                return (
                  <div key={difficulty} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${colors[difficulty as keyof typeof colors]}`}></div>
                        <span className="font-medium text-gray-700">{difficulty}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-600">{count} problems</span>
                        <span className="text-xs text-gray-500">({percentage.toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${colors[difficulty as keyof typeof colors]} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Problem Types */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Problem Categories</h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(typeStats).map(([type, count]) => {
                const percentage = (count / problems.length) * 100;
                
                return (
                  <div key={type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <span className="font-medium text-gray-700">{type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-600">{count} problems</span>
                        <span className="text-xs text-gray-500">({percentage.toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-indigo-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}