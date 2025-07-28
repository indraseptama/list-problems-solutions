import { BarChart3, TrendingUp, Award, Users } from 'lucide-react';
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenge Statistics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track our progress through various coding challenges and see how our community is growing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Total Problems</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600">{problems.length}</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Total Solutions</h3>
            </div>
            <div className="text-3xl font-bold text-green-600">{totalSolutions}</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Contributors</h3>
            </div>
            <div className="text-3xl font-bold text-purple-600">{contributors.length}</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Languages</h3>
            </div>
            <div className="text-3xl font-bold text-yellow-600">7</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Difficulty Distribution</h3>
            <div className="space-y-3">
              {Object.entries(difficultyStats).map(([difficulty, count]) => (
                <div key={difficulty} className="flex items-center justify-between">
                  <span className="text-gray-700">{difficulty}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          difficulty === 'Easy' ? 'bg-green-500' :
                          difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${(count / problems.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Problem Types</h3>
            <div className="space-y-3">
              {Object.entries(typeStats).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-gray-700">{type}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${(count / problems.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}