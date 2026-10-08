import { learnerProfile } from "@/lib/mockData";
import { Award, CheckCircle, Wallet, QrCode, Calendar } from "lucide-react";

export default function SkillPassport() {
  return (
    <div className="min-h-[90vh] bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* The Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          
          {/* Passport Header */}
          <div className="bg-slate-900 p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-orange-400 font-mono text-sm font-bold tracking-widest mb-2">VERIFIED PASSPORT</p>
                <h1 className="text-4xl md:text-5xl font-black">{learnerProfile.name}</h1>
                <p className="text-slate-400 mt-2 text-lg flex items-center gap-2">
                  <Award className="text-orange-500" size={20}/> {learnerProfile.role}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-right">
                <p className="text-xs text-slate-300 uppercase tracking-widest mb-1">Passport ID</p>
                <p className="font-mono font-bold text-xl text-white tracking-widest">{learnerProfile.passportId}</p>
                <p className="text-xs text-slate-400 flex items-center justify-end gap-1 mt-2">
                  <Calendar size={12}/> Joined {learnerProfile.joinDate}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col md:flex-row gap-12">
            
            {/* Left Column: Stats & Skills */}
            <div className="flex-1 space-y-10">
              {/* Financial Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-2xl border border-green-200">
                  <Wallet className="text-green-600 mb-3" size={28} />
                  <p className="text-sm text-green-800 font-semibold mb-1">Total Earned</p>
                  <p className="text-4xl font-black text-green-700">₹{learnerProfile.earnings}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl border border-blue-200">
                  <CheckCircle className="text-blue-600 mb-3" size={28} />
                  <p className="text-sm text-blue-800 font-semibold mb-1">Tasks Solved</p>
                  <p className="text-4xl font-black text-blue-700">{learnerProfile.tasksCompleted}</p>
                </div>
              </div>

              {/* Verified Skills Bars */}
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                   Skill Proficiencies
                </h3>
                <div className="space-y-5">
                  {learnerProfile.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-bold text-slate-700">{skill.name}</span>
                        <span className="text-sm font-bold text-orange-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Verification */}
            <div className="w-full md:w-72 flex flex-col items-center justify-center border-t-2 md:border-t-0 md:border-l-2 border-dashed border-slate-200 pt-8 md:pt-0 md:pl-12">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center justify-center mb-6 relative group cursor-pointer hover:border-orange-500 transition-colors">
                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <QrCode size={140} className="text-slate-800" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Scan to Verify</h4>
              <p className="text-sm text-slate-500 text-center mb-6">Employers can scan this QR code to cryptographically verify your task history.</p>
              <button className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                Share Profile Link
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}