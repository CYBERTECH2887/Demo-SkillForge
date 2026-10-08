import { availableTasks } from "@/lib/mockData";
import { Clock, ShieldCheck, Target, Zap } from "lucide-react";

export default function TaskMarketplace() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900">Task Marketplace</h1>
            <p className="text-slate-500 mt-2 text-lg">Solve verified industry challenges to earn rewards.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">Recommended</button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-100">All Tasks</button>
          </div>
        </div>

        <div className="grid gap-6">
          {availableTasks.map((task) => (
            <div key={task.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col md:flex-row gap-6 group">
              
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full font-mono tracking-widest">
                    {task.id}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${task.difficulty === 'Intermediate' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                    {task.difficulty}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{task.category}</h2>
                <p className="text-slate-600 mb-6 line-clamp-2">{task.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {task.skills.map(skill => (
                    <span key={skill} className="bg-slate-50 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Right Content / Action */}
              <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm text-slate-500">Reward</p>
                    <p className="text-3xl font-black text-green-600">₹{task.reward}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Clock size={16} className="text-orange-500" /> Est: {task.timeEstimate}
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-orange-700 flex items-center gap-1"><Target size={14}/> AI Match</span>
                    <span className="text-sm font-black text-orange-600">{task.matchScore}%</span>
                  </div>
                </div>
                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
                  <Zap size={18} fill="currentColor"/> Accept Task
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}