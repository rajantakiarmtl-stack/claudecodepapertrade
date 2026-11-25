import { Link, useNavigate } from "@tanstack/react-router";
import { useId, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { subscribe } from "@/lib/subscribe.functions";
import { CONSENT_TEXT, grantAccess } from "@/lib/access";

export function SignupForm({ source = "landing", recap = false }: { source?: string; recap?: boolean }) {
  const navigate = useNavigate();
  const submit = useServerFn(subscribe);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [returning, setReturning] = useState(false);
  const emailId = useId();
  const consentId = useId();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (returning) {
      grantAccess();
      navigate({ to: "/tape" });
      return;
    }
    if (!agreed) return;
    setBusy(true);
    try {
      const res = await submit({ data: { email, consent: true, consentText: CONSENT_TEXT, source } });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      grantAccess();
      navigate({ to: "/tape" });
    } catch {
      toast.error("Please enter a valid email address.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form id={recap ? undefined : "signup"} onSubmit={onSubmit} className="hairline-card p-5 sm:p-6" noValidate={false}>
      {recap && <h2 className="mb-5 font-display text-3xl">Get the daily recap</h2>}
      <label htmlFor={emailId} className="font-num text-xs tracking-[0.16em] text-muted-foreground">
        {returning ? "WELCOME BACK · YOUR EMAIL" : "YOUR EMAIL"}
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <Input
          id={emailId}
          type="email"
          required
          autoComplete="email"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-background font-num"
        />
        <Button type="submit" size="lg" disabled={busy || (!returning && !agreed)} className="h-12 px-6 font-medium">
          {busy ? "Saving…" : returning ? "Open the tape" : recap ? "Get the daily recap" : "Get access"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
      {!returning && (
        <>
          <p className="mt-3 text-sm text-muted-foreground">Free. Daily recap after the close. Unsubscribe anytime.</p>
          <div className="mt-4 flex items-start gap-3">
            <Checkbox id={consentId} checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} required className="mt-0.5" />
            <label htmlFor={consentId} className="text-sm leading-relaxed text-muted-foreground">
              I agree to receive emails from Show The Tape and accept the{" "}
              <Link to="/privacy" className="text-foreground underline underline-offset-4 hover:text-amber">Privacy Policy</Link>.
              This is <Link to="/disclaimer" className="text-foreground underline underline-offset-4 hover:text-amber">not financial advice</Link>.
            </label>
          </div>
        </>
      )}
      <Button
        variant="link"
        type="button"
        onClick={() => setReturning((r) => !r)}
        className="mt-5 h-auto px-0 text-sm text-amber underline-offset-4 hover:underline"
      >
        {returning ? "New here? Sign up instead" : "Already signed up? Enter your email"}
      </Button>
    </form>
  );
}
