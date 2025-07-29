import { useState } from 'react';
import Header from './components/Header';
import ProblemCard from './components/ProblemCard';
import ContributorCard from './components/ContributorCard';
import SolutionModal from './components/SolutionModal';
import StatsSection from './components/StatsSection';
import { problems } from './data/problems';
import { contributors } from './data/contributors';
import { solutions } from './data/solutions';
import { Code, Users, Trophy, Github } from 'lucide-react';

function App() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'problems' | 'contributors'>('problems');

  const sortedContributors = [...contributors].sort((a, b) => b.solutionCount - a.solutionCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StatsSection />

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-xl p-1 my-6">
              <button
                onClick={() => setActiveTab('problems')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'problems'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Code className="w-5 h-5" />
                <span>Problems & Solutions</span>
              </button>
              <button
                onClick={() => setActiveTab('contributors')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'contributors'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Contributors Ranking</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {activeTab === 'problems' && (
          <section className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Trophy className="w-4 h-4" />
                <span>Daily Challenges</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Coding Problems</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our collection of LeetCode problems solved by the Boyolali Dev community.
                Each problem includes multiple solutions in different programming languages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map((problem) => (
                <ProblemCard
                  key={problem.day}
                  problem={problem}
                  onViewSolutions={setSelectedDay}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === 'contributors' && (
          <section className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Users className="w-4 h-4" />
                <span>Community Leaders</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Contributors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the amazing developers who make this community thrive with their solutions and contributions.
                Ranked by the number of problems they've solved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedContributors.map((contributor, index) => (
                <ContributorCard
                  key={contributor.login}
                  contributor={contributor}
                  rank={index + 1}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Solution Modal */}
      {selectedDay && (
        <SolutionModal
          day={selectedDay}
          solutions={solutions[selectedDay] || []}
          onClose={() => setSelectedDay(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <Code className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Boyolali Dev Community</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join our growing community of developers solving coding challenges together.
              Every solution shared helps others learn and grow.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Boyolali-Dev/list-problems-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Github className="w-5 h-5" />
                <span>Contribute on GitHub</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
              <p>Made with ❤️ by the Boyolali Dev Community • Join us in our daily coding journey!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;