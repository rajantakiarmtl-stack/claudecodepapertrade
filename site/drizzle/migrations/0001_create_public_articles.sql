CREATE TABLE public.articles (
 slug text PRIMARY KEY,
 title text NOT NULL,
 description text NOT NULL,
 body_md text NOT NULL,
 tags text[] NOT NULL DEFAULT '{}',
 published_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 status text NOT NULL DEFAULT 'published'
);
GRANT SELECT ON public.articles TO anon, authenticated;
GRANT ALL ON public.articles TO service_role;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published articles" ON public.articles FOR SELECT TO anon, authenticated USING (status = 'published');