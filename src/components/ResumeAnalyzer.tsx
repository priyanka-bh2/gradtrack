import React, { useState } from 'react';

const ResumeAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [missingKeywords, setMissingKeywords] = useState<string[]>([]);

  const analyzeMatch = () => {
    const jdWords = new Set(jobDescription.toLowerCase().split(/\W+/));
    const resumeWords = new Set(resumeText.toLowerCase().split(/\W+/));
    const jdKeywordList = Array.from(jdWords).filter(w => w.length > 4);
    const matched = jdKeywordList.filter(word => resumeWords.has(word));
    const missing = jdKeywordList.filter(word => !resumeWords.has(word));
    const score = Math.round((matched.length / jdKeywordList.length) * 100);
    setMatchScore(score);
    setMissingKeywords(missing);
  };

  return (
    <div className="mt-10 p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-2">📄 Resume Analyzer</h2>
      <textarea className="w-full border p-2 mb-3" rows={5}
        placeholder="Paste Job Description here..." value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)} />
      <textarea className="w-full border p-2 mb-3" rows={5}
        placeholder="Paste Resume Text here..." value={resumeText}
        onChange={(e) => setResumeText(e.target.value)} />
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={analyzeMatch}>Analyze</button>
      {matchScore !== null && (
        <div className="mt-4">
          <p className="font-medium">Match Score: {matchScore}%</p>
          {missingKeywords.length > 0 && (
            <div>
              <p className="text-sm mt-1 text-gray-600">Missing Keywords:</p>
              <ul className="list-disc list-inside text-sm text-red-700">
                {missingKeywords.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
