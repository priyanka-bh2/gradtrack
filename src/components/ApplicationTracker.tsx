import React, { useState, useEffect } from 'react';
import { JobApplication } from '../types';

const ApplicationTracker = () => {
    const [applications, setApplications] = useState<JobApplication[]>(() => {
        const saved = localStorage.getItem('gradtrack-apps');
        return saved ? JSON.parse(saved) : [];
    });

    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState<'Applied' | 'Interviewing' | 'Offer' | 'Rejected'>('Applied');

    useEffect(() => {
        localStorage.setItem('gradtrack-apps', JSON.stringify(applications));
    }, [applications]);

    const addApplication = () => {
        if (!company || !role) return;

        const newApp: JobApplication = {
            id: Date.now().toString(),
            company,
            role,
            status,
            dateApplied: new Date().toISOString().split('T')[0]
        };

        setApplications([...applications, newApp]);
        setCompany('');
        setRole('');
        setStatus('Applied');
    };

    return (
        <div className="mb-10">
            <div className="mb-4 space-y-2">
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border p-2 rounded"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Role Title"
                    className="w-full border p-2 rounded"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <select
                    className="w-full border p-2 rounded"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as JobApplication['status'])}
                >
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <button
                    onClick={addApplication}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    ➕ Add Application
                </button>
            </div>

            <ul>
                {applications.map(app => (
                    <li key={app.id} className="border p-3 mb-2 rounded">
                        <strong>{app.company}</strong> – {app.role} ({app.status}) on {app.dateApplied}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationTracker;
