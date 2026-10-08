"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertTriangle } from "lucide-react";

export default function Assessment() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAnswer = (correct: boolean) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (correct) {
        if (step === 0) setStep(1); 
        else router.push("/tasks"); 
      } else {
        setStep(2); 
      }
    }, 800); // Simulated AI check delay
  };

  return (
    <div className="min-h-[90vh] bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
        
        {/* Progress Bar */}
        {step < 2 && (
          <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
            <div className={`h-full bg-orange-500 transition-all duration-500 ${step === 0 ? 'w-1/2' : 'w-full'}`}></div>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="animate-spin text-orange-500 mb-4" size={48} />
            <p className="text-slate-500 font-medium animate-pulse">AI is analyzing your logic...</p>
          </div>
        ) : (
          <>
            {step === 0 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-full uppercase tracking-wider mb-4">Python Module</span>
                <h2 className="text-3xl font-black text-slate-900 mb-6">How do you remove duplicates from a Pandas DataFrame?</h2>
                <div className="space-y-4">
                  <button onClick={() => handleAnswer(false)} className="w-full text-left p-5 border-2 border-slate-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all font-medium text-slate-700">df.delete_duplicates()</button>
                  <button onClick={() => handleAnswer(true)} className="w-full text-left p-5 border-2 border-slate-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all font-medium text-slate-700">df.drop_duplicates()</button>
                  <button onClick={() => handleAnswer(false)} className="w-full text-left p-5 border-2 border-slate-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all font-medium text-slate-700">df.unique()</button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 font-bold text-xs rounded-full uppercase tracking-wider mb-4">SQL Module</span>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Which JOIN returns all records from both tables?</h2>
                <div className="space-y-4">
                  <button onClick={() => handleAnswer(false)} className="w-full text-left p-5 border-2 border-slate-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all font-medium text-slate-700">INNER JOIN</button>
                  <button onClick={() => handleAnswer(true)} className="w-full text-left p-5 border-2 border-slate-100 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all font-medium text-slate-700">FULL OUTER JOIN</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="text-center py-8 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle size={40} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-3">Skill Gap Identified</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">Our adaptive AI detected a weakness in your core logic. Before accepting paid company tasks, please complete the targeted learning module.</p>
                <button onClick={() => setStep(0)} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-all">Start Free Practice</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}