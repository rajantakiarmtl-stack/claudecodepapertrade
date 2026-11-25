CREATE TABLE public.site_meta (id int PRIMARY KEY DEFAULT 1, last_updated timestamptz, experiment_start date, start_equity numeric, account_value numeric, total_return_pct numeric, spy_return_pct numeric, realized_pnl_net numeric, win_rate numeric, closed_trades int, max_drawdown_pct numeric, passed_on_count int);
CREATE TABLE public.daily_snapshots (date date PRIMARY KEY, account_value numeric, spy_close_rebased numeric, realized_pnl_net numeric);
CREATE TABLE public.teams (id text PRIMARY KEY, name text, mission text, agent_count int, roles text[], pnl_net numeric, trades int, win_rate numeric, activity_line text, sort int);
CREATE TABLE public.open_positions (id text PRIMARY KEY, ticker text, team_id text, structure_label text, direction text, opened_at timestamptz, unrealized_pct numeric);
CREATE TABLE public.closed_trades (id text PRIMARY KEY, ticker text, team_id text, structure_label text, direction text, opened_at timestamptz, closed_at timestamptz, pnl_net numeric, pnl_pct numeric, exit_reason_label text, legs jsonb, entry_price numeric, exit_price numeric, why_text text, outcome_text text);
CREATE TABLE public.passed_on (id text PRIMARY KEY, date date, ticker text, team_id text, reason_label text);
CREATE TABLE public.daily_recaps (date date PRIMARY KEY, headline text, body text, mood text);
CREATE TABLE public.signups (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), email text UNIQUE NOT NULL, consent_text text, consented_at timestamptz DEFAULT now(), source text);

DO $$ DECLARE t text; BEGIN
FOREACH t IN ARRAY ARRAY['site_meta','daily_snapshots','teams','open_positions','closed_trades','passed_on','daily_recaps'] LOOP
  EXECUTE format('GRANT SELECT ON public.%I TO anon, authenticated', t);
  EXECUTE format('GRANT ALL ON public.%I TO service_role', t);
  EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
  EXECUTE format('CREATE POLICY "Public read" ON public.%I FOR SELECT TO anon, authenticated USING (true)', t);
END LOOP; END $$;

GRANT ALL ON public.signups TO service_role;
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;