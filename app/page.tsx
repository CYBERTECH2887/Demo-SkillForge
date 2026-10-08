import Link from "next/link";
import { ArrowRight, Code, ShieldCheck, Wallet, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] p-8 text-center">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6 border border-orange-200">
          <Sparkles size={16} /> Welcome to the future of hiring
        </div>
        
        <h1 className="text-6xl font-black mb-6 tracking-tight leading-tight">
          Don't buy a certificate. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Earn your credentials.
          </span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
          SkillForge evaluates your actual coding logic, trains your weak points, and pays you to solve real, anonymized company micro-tasks.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
          {[
            { icon: Code, title: "1. Prove Your Skill", desc: "Take AI-adaptive assessments to verify your exact proficiency.", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: Wallet, title: "2. Solve & Earn", desc: "Access the anonymized marketplace and earn money instantly.", color: "text-green-500", bg: "bg-green-50" },
            { icon: ShieldCheck, title: "3. Get Verified", desc: "Build a cryptographic Skill Passport that top employers trust.", color: "text-orange-500", bg: "bg-orange-50" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
              <div className={`${item.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link 
          href="/assessment" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-orange-500/40 transition-all hover:scale-105"
        >
          Start Your Verification <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}