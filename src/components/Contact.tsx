import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          date: form.date,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", date: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

        {/* LEFT SIDE */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
            Get in Touch
          </span>

          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-8">
            Let's create <i className="text-accent/90">something beautiful.</i>
          </h2>

          <p className="text-muted-foreground mb-10">
            Drop us a message — we will reply via email.
          </p>

          {/* FORM */}
          <form onSubmit={submit} className="space-y-5">

            <input
              required
              type="text"
              placeholder="FULL NAME"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-border py-4 text-xs uppercase tracking-widest focus:outline-none focus:border-accent"
            />

            <input
              required
              type="tel"
              placeholder="PHONE NUMBER"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-transparent border-b border-border py-4 text-xs uppercase tracking-widest focus:outline-none focus:border-accent"
            />

            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full bg-transparent border-b border-border py-4 text-xs uppercase tracking-widest focus:outline-none focus:border-accent [color-scheme:dark]"
            />

            <textarea
              rows={4}
              placeholder="TELL US ABOUT YOUR EVENT"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-border py-4 text-xs uppercase tracking-widest focus:outline-none focus:border-accent resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-accent-foreground px-12 py-4 text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

            {success && (
              <p className="text-green-500 text-sm">
                ✔ Message sent successfully
              </p>
            )}
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* MAP WITH ADDRESS OVERLAY */}
          <div className="relative aspect-square w-full overflow-hidden">

            <iframe
              title="Neopics Studio Location"
              src="https://www.google.com/maps?q=13.123067,80.193093&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />

            {/* ADDRESS OVERLAY (INSIDE MAP) */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-md backdrop-blur-md max-w-[85%]">

              <div className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
                Studio Address
              </div>

              <div className="text-xs leading-relaxed">
                130, 4th Street, F Block,<br />
                Thanikachalam Nagar,<br />
                Ponniammam Medu,<br />
                Chennai, Tamil Nadu 600110
              </div>

            </div>

          </div>

          {/* CONTACT INFO */}
          <div className="space-y-5 text-sm">

            <div className="flex items-start gap-4">
              <MapPin className="text-accent" size={18} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Studio
                </div>
                130, 4th Street, F Block,<br />
                Thanikachalam Nagar,<br />
                Ponniammam Medu,<br />
                Chennai, Tamil Nadu 600110
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-accent" size={18} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Call
                </div>
                <a href="tel:+918754542121" className="hover:text-accent">
                  +91 87545 42121
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-accent" size={18} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Email
                </div>
                <a
                  href="mailto:Jayarajs2006@gmail.com"
                  className="hover:text-accent"
                >
                  Jayarajs2006@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}