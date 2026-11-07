import { motion } from "framer-motion";
import { useState } from "react";
import { Underline } from "./NavLinks";

// Clave pública de Web3Forms: los mensajes llegan al email con el que se creó.
// Sin clave, el formulario solo aparece al desarrollar, para no publicar uno que no envía nada
const ACCESS_KEY = "00f65853-9d17-437c-ab89-80d8e57274a1";
const ENDPOINT = "https://api.web3forms.com/submit";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "message", label: "Message", multiline: true },
];

const LINE_TRANSITION = { duration: 1.2, ease: [0.76, 0, 0.24, 1] };

const TEXT_CLASS = "text-black dark:text-white font-plus font-light";
const LABEL_CLASS = "block text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/60";

// La línea de base se dibuja al abrir el panel; al escribir, otra más marcada la recorre de izquierda a derecha
function Field({ name, label, type, autoComplete, multiline, index, open }) {
  const Input = multiline ? "textarea" : "input";

  return (
    <label className="group block">
      <span className={LABEL_CLASS}>{label}</span>
      <Input
        name={name}
        required
        {...(multiline ? { rows: 4 } : { type, autoComplete })}
        className={`${TEXT_CLASS} block w-full resize-none bg-transparent py-2 outline-none focus-visible:outline-none autofill:shadow-[inset_0_0_0_1000px_white] dark:autofill:shadow-[inset_0_0_0_1000px_#151515]`}
      />
      <span aria-hidden="true" className="relative block h-px">
        <motion.span
          className="absolute inset-0 origin-left bg-black/30 dark:bg-white/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: open ? 1 : 0 }}
          transition={{ ...LINE_TRANSITION, delay: open ? 0.3 + index * 0.15 : 0 }}
        />
        <span className="absolute inset-0 origin-left scale-x-0 bg-black dark:bg-white transition-transform duration-500 ease-out group-focus-within:scale-x-100" />
      </span>
    </label>
  );
}

function ContactForm({ open, email }) {
  const [status, setStatus] = useState("idle");

  if (!ACCESS_KEY && !import.meta.env.DEV) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New message from your portfolio");
    data.append("from_name", "Portfolio");

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="space-y-4">
        <p className={`${TEXT_CLASS} leading-relaxed`}>Thank you, your message is on its way. I will get back to you soon.</p>
        <button type="button" onClick={() => setStatus("idle")} className={`relative group ${LABEL_CLASS}`}>
          Send another
          <Underline />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {FIELDS.map((field, i) => (
        <Field key={field.name} {...field} index={i} open={open} />
      ))}

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`relative group ${TEXT_CLASS} text-sm uppercase tracking-[0.2em] disabled:opacity-50`}
        >
          {status === "sending" ? "Sending" : "Send"}
          <Underline />
        </button>
      </div>

      <p role="status" aria-live="polite" className={`${TEXT_CLASS} text-sm leading-relaxed`}>
        {status === "error" && `Something went wrong. You can also write to ${email}.`}
      </p>
    </form>
  );
}

export default ContactForm;
