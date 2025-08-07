'use client';
import { useState, useMemo } from 'react';
import projects from '../../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const [category, setCategory] = useState('all');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catOK = category === 'all' || p.category === category;
      const qOK = p.title.toLowerCase().includes(q.toLowerCase());
      return catOK && qOK;
    });
  }, [category, q]);

  return (
    <>
      <h1 className="h4 mb-3">نمونه‌کارها</h1>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {['all', 'residential', 'commercial', 'urban'].map((c) => (
            <button
                key={c}
                onClick={() => setCategory(c)}
                className={`btn btn-sm ${category === c ? 'btn-accent text-white' : 'btn-outline-secondary'}`}
            >
            {c === 'all'
              ? 'همه'
              : c === 'residential'
              ? 'مسکونی'
              : c === 'commercial'
              ? 'زیبایی'
              : 'آسمان خراش'}
          </button>
        ))}

        <input
          type="search"
          className="form-control form-control-sm ms-auto"
          style={{ maxWidth: 180 }}
          placeholder="جست‌وجو..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="meshkatFlex">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
        {filtered.length === 0 && <p>نتیجه‌ای یافت نشد!</p>}
      </div>
    </>
  );
}
