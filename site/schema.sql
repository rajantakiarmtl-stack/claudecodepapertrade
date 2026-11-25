-- Cloudflare D1 schema for showthetape.com (database "showthetape").
CREATE TABLE IF NOT EXISTS site_meta (id INTEGER PRIMARY KEY, last_updated TEXT, experiment_start TEXT, start_equity REAL, account_value REAL, total_return_pct REAL, spy_return_pct REAL, realized_pnl_net REAL, win_rate REAL, closed_trades INTEGER, max_drawdown_pct REAL, passed_on_count INTEGER);
CREATE TABLE IF NOT EXISTS daily_snapshots (date TEXT PRIMARY KEY, account_value REAL, spy_close_rebased REAL, realized_pnl_net REAL);
CREATE TABLE IF NOT EXISTS teams (id TEXT PRIMARY KEY, name TEXT, mission TEXT, agent_count INTEGER, roles TEXT, pnl_net REAL, trades INTEGER, win_rate REAL, activity_line TEXT, sort INTEGER);
CREATE TABLE IF NOT EXISTS open_positions (id TEXT PRIMARY KEY, ticker TEXT, team_id TEXT, structure_label TEXT, direction TEXT, opened_at TEXT, unrealized_pct REAL);
CREATE TABLE IF NOT EXISTS closed_trades (id TEXT PRIMARY KEY, ticker TEXT, team_id TEXT, structure_label TEXT, direction TEXT, opened_at TEXT, closed_at TEXT, pnl_net REAL, pnl_pct REAL, exit_reason_label TEXT, legs TEXT, entry_price REAL, exit_price REAL, why_text TEXT, outcome_text TEXT);
CREATE INDEX IF NOT EXISTS closed_trades_closed_at ON closed_trades(closed_at);
CREATE TABLE IF NOT EXISTS passed_on (id TEXT PRIMARY KEY, date TEXT, ticker TEXT, team_id TEXT, reason_label TEXT);
CREATE TABLE IF NOT EXISTS daily_recaps (date TEXT PRIMARY KEY, headline TEXT, body TEXT, mood TEXT);
CREATE TABLE IF NOT EXISTS articles (slug TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT, body_md TEXT NOT NULL, tags TEXT, published_at TEXT, updated_at TEXT, status TEXT NOT NULL DEFAULT 'published');
CREATE TABLE IF NOT EXISTS signups (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, consent_text TEXT, consented_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')), source TEXT, synced_to_beehiiv INTEGER NOT NULL DEFAULT 0);
