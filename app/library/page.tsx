"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { DOMAINS, WORLDS, NOTES, R, TYPES, REFDESK, Book } from './data';
import { CheckCircle2, Circle } from 'lucide-react';

export default function LibraryPage() {
  const [domain, setDomain] = useState<string>('ALL');
  const [world, setWorld] = useState<string | null>(null);
  const [type, setType] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [core, setCore] = useState<boolean>(false);
  const [readBooks, setReadBooks] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('library_read_books');
    if (saved) {
      try {
        setReadBooks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse read books", e);
      }
    }
  }, []);

  const toggleReadStatus = (id: string) => {
    const newStatus = { ...readBooks, [id]: !readBooks[id] };
    setReadBooks(newStatus);
    localStorage.setItem('library_read_books', JSON.stringify(newStatus));
  };

  const getDomainMeta = (code: string) => DOMAINS.find((d) => d.code === code);

  const handleDomainSelect = (code: string) => {
    if (domain === code && !world) {
      setDomain('ALL');
    } else {
      setDomain(code);
    }
    setWorld(null);
  };

  const handleWorldSelect = (key: string) => {
    if (world === key) {
      setWorld(null);
    } else {
      setWorld(key);
    }
    setDomain('ALL');
  };

  const filteredBooks = useMemo(() => {
    const q = search.trim().toLowerCase();
    return R.filter((r) => {
      if (core && !r.core) return false;
      if (world) {
        const codes = WORLDS[world].codes;
        if (!r.d.some((c) => codes.includes(c))) return false;
      } else if (domain !== 'ALL' && !r.d.includes(domain)) {
        return false;
      }
      if (type !== 'ALL' && r.ty !== type) return false;
      if (q) {
        const titleMatch = r.t.toLowerCase().includes(q);
        const authorMatch = r.a.toLowerCase().includes(q);
        const domainMatch = r.d.some((c) =>
          getDomainMeta(c)?.name.toLowerCase().includes(q)
        );
        if (!titleMatch && !authorMatch && !domainMatch) return false;
      }
      return true;
    });
  }, [domain, world, type, search, core]);

  let noteContent = null;
  if (world) {
    const w = WORLDS[world];
    noteContent = (
      <>
        <strong className="text-[var(--text-primary)]">{w.label}.</strong> {w.note}
      </>
    );
  } else if (domain !== 'ALL') {
    const meta = getDomainMeta(domain);
    if (meta) {
      noteContent = (
        <>
          <strong className="text-[var(--text-primary)]">{meta.name}.</strong> {NOTES[domain]}
        </>
      );
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 min-h-screen">
      {/* HERO */}
      <div className="pb-8 border-b border-[var(--border)] mb-8">
        <div className="font-mono text-xs tracking-widest text-[var(--color-brand)] mb-4">
          A PERSONAL LIBRARY &middot; {DOMAINS.length} FIELDS &middot; CURATED FOR DEPTH
        </div>
        <h1 className="h1 mb-4">The Athenaeum</h1>
        <p className="body-base text-[var(--text-secondary)] max-w-2xl mb-6">
          Not a reading list &mdash; a shelf. Scan it, pull what&apos;s marked{" "}
          <strong className="font-medium text-[var(--text-primary)]">start here</strong> first, 
          or browse by the worlds these fields actually belong to.
        </p>
        <div className="font-mono text-xs tracking-wide text-[var(--text-muted)]">
          {R.length} resources across {DOMAINS.length} fields, plus a reference desk
        </div>
      </div>

      {/* SHELF */}
      <div className="mb-6">
        <div className="font-mono text-xs tracking-widest text-[var(--text-secondary)] mb-3">
          SCAN THE SHELF
        </div>
        <div className="flex gap-2 overflow-x-auto pb-4 pt-2 snap-x border-b border-[var(--border)] scrollbar-thin">
          <button
            onClick={() => handleDomainSelect('ALL')}
            className={`flex-shrink-0 snap-start w-14 h-32 rounded-t-sm flex items-center justify-center relative transition-all duration-200 border-x border-t border-[var(--border)] shadow-sm hover:-translate-y-1 ${
              domain === 'ALL' && !world ? '-translate-y-2 bg-[var(--foreground)] text-[var(--background)] border-transparent' : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)]'
            }`}
          >
            <span
              className="writing-vertical font-mono text-xs font-semibold tracking-wider"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              ALL
            </span>
          </button>
          {DOMAINS.map((d) => (
            <button
              key={d.code}
              onClick={() => handleDomainSelect(d.code)}
              className={`flex-shrink-0 snap-start w-10 h-32 rounded-t-sm flex items-center justify-center relative transition-all duration-200 hover:-translate-y-1 ${
                domain === d.code && !world ? '-translate-y-2 shadow-md brightness-110' : 'shadow-sm brightness-90 hover:brightness-100'
              }`}
              style={{ backgroundColor: d.color }}
              title={d.name}
            >
              <span
                className="writing-vertical font-mono text-[10px] tracking-wider text-white whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                {d.code} &middot; {d.name.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* WORLDS ROW */}
      <div className="mt-6 mb-2">
        <div className="font-mono text-xs tracking-widest text-[var(--text-secondary)] mb-3">
          OR BROWSE BY WORLD
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(WORLDS).map(([key, w]) => (
            <button
              key={key}
              onClick={() => handleWorldSelect(key)}
              className={`font-mono text-xs tracking-wide px-4 py-2 rounded-full border transition-all duration-200 ${
                world === key
                  ? 'bg-[var(--color-brand)] border-[var(--color-brand)] text-white font-semibold'
                  : 'bg-[var(--surface-secondary)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--color-brand)] hover:text-[var(--text-primary)]'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap items-center gap-4 mt-8 mb-6 justify-between">
        <input
          type="search"
          placeholder="Search a title, author, or field..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow md:flex-grow-0 md:w-64 bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text-primary)] px-4 py-2 rounded-sm outline-none focus:border-[var(--color-brand)] transition-colors"
        />
        <div className="flex flex-wrap gap-2 items-center">
          {['ALL', ...TYPES].map((ty) => (
            <button
              key={ty}
              onClick={() => setType(ty)}
              className={`font-mono text-xs tracking-wide px-3 py-1.5 rounded-full border transition-all duration-200 ${
                type === ty
                  ? 'bg-[var(--foreground)] border-[var(--foreground)] text-[var(--background)] font-semibold'
                  : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--foreground)] hover:text-[var(--text-primary)]'
              }`}
            >
              {ty === 'ALL' ? 'All formats' : ty}
            </button>
          ))}
          <button
            onClick={() => setCore(!core)}
            className={`font-mono text-xs tracking-wide px-3 py-1.5 rounded-full border transition-all duration-200 ml-2 ${
              core
                ? 'bg-[var(--color-brand)] border-[var(--color-brand)] text-white font-semibold'
                : 'bg-transparent border-[var(--color-brand)] text-[var(--color-brand)]'
            }`}
          >
            ⭐ The Core Ten
          </button>
        </div>
      </div>

      {/* FIELD NOTE */}
      {noteContent && (
        <div className="bg-[var(--surface-secondary)] border-l-4 border-[var(--color-brand)] p-5 rounded-r-sm my-6 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
          {noteContent}
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {filteredBooks.length === 0 ? (
          <div className="col-span-full text-center text-[var(--text-muted)] font-mono text-sm py-12">
            Nothing on the shelf matches that. Try a different field, world, or format.
          </div>
        ) : (
          filteredBooks.map((r) => {
            const primary = getDomainMeta(r.d[0]);
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(r.t + ' ' + r.a + ' free download pdf epub')}`;
            const isRead = readBooks[r.id];

            return (
              <div
                key={r.id}
                className="bg-[var(--surface)] text-[var(--text-primary)] rounded-sm p-4 border border-[var(--border)] border-l-4 shadow-sm flex flex-col gap-2 relative transition-all duration-200 hover:-translate-y-1 hover:shadow-md group"
                style={{ borderLeftColor: primary?.color || 'var(--border)' }}
              >
                {r.core && (
                  <div className="absolute -top-[1px] left-3 bg-[var(--color-brand)] text-white font-mono text-[9px] tracking-wider px-2 py-1 rounded-b-sm">
                    CORE TEN
                  </div>
                )}
                {r.start && (
                  <div className="absolute -top-[1px] right-3 bg-[var(--foreground)] text-[var(--background)] font-mono text-[9px] tracking-wider px-2 py-1 rounded-b-sm">
                    START HERE
                  </div>
                )}
                
                <div className="flex justify-between items-start font-mono text-[10px] text-[var(--text-muted)] tracking-wider mt-2">
                  <span>{r.d.join(' / ')}</span>
                  <span>{r.ty.toUpperCase()}</span>
                </div>
                
                <h3 className="font-display font-semibold text-lg leading-tight mt-1">
                  {r.t}
                </h3>
                <p className="italic text-sm text-[var(--text-secondary)] -mt-1 mb-1">
                  {r.a}
                </p>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed mb-2 opacity-90">
                  {r.desc}
                </p>
                
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-dashed border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] tracking-wider px-2 py-1 rounded-full bg-[var(--surface-secondary)] text-[var(--text-secondary)]">
                      {r.tier}
                    </span>
                    {mounted && (
                      <button 
                        onClick={() => toggleReadStatus(r.id)}
                        className={`transition-colors duration-200 flex items-center ${isRead ? 'text-[var(--color-brand)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
                        title={isRead ? "Mark as unread" : "Mark as read"}
                      >
                        {isRead ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                      </button>
                    )}
                  </div>
                  <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-[var(--text-muted)] border-b border-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
                  >
                    download ↗
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* REFERENCE DESK */}
      <div className="mt-16 pt-8 border-t border-[var(--border)]">
        <h2 className="h3 mb-2">The Reference Desk</h2>
        <p className="body-small text-[var(--text-secondary)] max-w-2xl mb-6">
          General tools that cut across every field &mdash; free archives, encyclopedias, museum collections, and course catalogs. 
          Keep these open in a tab regardless of what you&apos;re reading.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {REFDESK.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[var(--surface-secondary)] border border-[var(--border)] rounded-sm p-4 transition-colors hover:border-[var(--color-brand)] group"
            >
              <div className="font-display font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-brand)] transition-colors">
                {item.name}
              </div>
              <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* HOW TO USE */}
      <div className="mt-12 pt-8 border-t border-[var(--border)]">
        <h2 className="h4 mb-4">How to actually use this</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[var(--text-secondary)]">
          <div>
            <strong className="block font-mono text-[10px] tracking-wider text-[var(--color-brand)] mb-1 uppercase">15 Minutes</strong>
            Read one entry on a single ruler, battle, or figure. Don&apos;t start a book.
          </div>
          <div>
            <strong className="block font-mono text-[10px] tracking-wider text-[var(--color-brand)] mb-1 uppercase">30-45 Minutes</strong>
            Start a &quot;start here&quot; pick, or read one Reference Desk entry closely.
          </div>
          <div>
            <strong className="block font-mono text-[10px] tracking-wider text-[var(--color-brand)] mb-1 uppercase">An Evening</strong>
            Follow one thread across fields &mdash; Ibn Battuta&apos;s route pulls in geography, Islamic history, and trade economics at once.
          </div>
          <div>
            <strong className="block font-mono text-[10px] tracking-wider text-[var(--color-brand)] mb-1 uppercase">A Lazy Weekend</strong>
            Go deep on one Advanced-tier title, uninterrupted.
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-12 pt-6 border-t border-[var(--border)] text-xs text-[var(--text-muted)] leading-relaxed text-center">
        Descriptions here are orientation, not review &mdash; enough to know why a title is on the shelf. 
        Titles and authors are as accurate as I could make them; verify editions and translators before buying, especially for classical and religious texts. 
        &quot;download&quot; opens a plain web search, not a direct purchase link.
      </footer>
    </div>
  );
}
