const EMAIL_PATTERN =
  /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

/** Buzones de sistema o listas, no de una persona. */
const AUTOMATED_LOCAL_PARTS = new Set([
  "noreply",
  "no-reply",
  "no.reply",
  "donotreply",
  "do-not-reply",
  "do.not.reply",
  "mailer-daemon",
  "mailerdaemon",
  "postmaster",
  "bounce",
  "bounces",
  "daemon",
  "nobody",
  "null",
  "abuse",
  "newsletter",
  "newsletters",
  "notifications",
  "notification",
  "alerts",
  "alert",
  "robot",
  "bot",
]);

/** Dominios de correo temporal. No es una lista exhaustiva. */
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamail.org",
  "guerrillamail.net",
  "sharklasers.com",
  "grr.la",
  "yopmail.com",
  "yopmail.fr",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "10minutemail.com",
  "10minutemail.net",
  "trashmail.com",
  "trashmail.org",
  "getnada.com",
  "dispostable.com",
  "maildrop.cc",
  "fakeinbox.com",
  "throwawaymail.com",
  "mintemail.com",
  "mailnesia.com",
  "moakt.com",
  "emailondeck.com",
  "tempr.email",
  "discard.email",
  "inboxkitten.com",
]);

export type HumanEmailResult = "ok" | "invalid" | "not-human";

export function classifyHumanEmail(value: string): HumanEmailResult {
  const email = value.trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) return "invalid";

  const at = email.lastIndexOf("@");
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);

  if (!local || local.includes("..") || domain.includes("..")) return "invalid";
  if (!/[a-z]/i.test(local)) return "not-human";
  if (AUTOMATED_LOCAL_PARTS.has(local)) return "not-human";
  if (DISPOSABLE_DOMAINS.has(domain)) return "not-human";
  if (domain === "example.com" || domain === "example.org" || domain === "test.com" || domain.endsWith(".test")) {
    return "not-human";
  }

  return "ok";
}
