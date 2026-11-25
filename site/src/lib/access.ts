export const ACCESS_KEY = "stt_access";
export const hasAccess = () => typeof window !== "undefined" && window.localStorage.getItem(ACCESS_KEY) === "1";
export const grantAccess = () => window.localStorage.setItem(ACCESS_KEY, "1");
export const CONSENT_TEXT =
  "I agree to receive emails from Show The Tape and accept the Privacy Policy. This is not financial advice.";
