import { useState } from 'react';
import Header from './components/Header';
import ProblemCard from './components/ProblemCard';
import ContributorCard from './components/ContributorCard';
import SolutionModal from './components/SolutionModal';
import StatsSection from './components/StatsSection';
import { problems } from './data/problems';
import { contributors } from './data/contributors';
import { solutions } from './data/solutions';

function App() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'problems' | 'contributors'>('problems');

  const sortedContributors = [...contributors].sort((a, b) => b.solutionCount - a.solutionCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StatsSection />

      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'problems'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Problems & Solutions
            </button>
            <button
              onClick={() => setActiveTab('contributors')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'contributors'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contributors Ranking
            </button>
          </div>
        </div>

        {activeTab === 'problems' && (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Coding Challenges</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our collection of LeetCode problems solved by the Boyolali Dev community.
                Each problem includes multiple solutions in different programming languages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Contributors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the amazing developers who make this community thrive with their solutions and contributions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {selectedDay && (
        <SolutionModal
          day={selectedDay}
          solutions={solutions[selectedDay] || []}
          onClose={() => setSelectedDay(null)}
        />
      )}

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Made with ❤️ by the Boyolali Dev Community
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Join us in our daily coding journey!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;