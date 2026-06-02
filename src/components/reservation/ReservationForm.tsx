"use client";

import { useMemo, useState } from "react";
import {
  User,
  Phone,
  CalendarDays,
  Clock,
  Users,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { whatsappLink, SITE } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const TODAY = new Date().toISOString().slice(0, 10);

function timeSlots() {
  const slots: string[] = [];
  for (let h = 9; h <= 22; h++) {
    for (const m of [0, 30]) {
      if (h === 22 && m === 30) continue;
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
}

const GUEST_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "More than 10"];

function labelClass() {
  return "mb-1.5 flex items-center gap-2 text-sm font-medium text-forest-800";
}
function inputClass(hasError?: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-coffee-700 outline-none transition-colors placeholder:text-coffee-300 focus:border-gold-400 ${
    hasError ? "border-maroon" : "border-coffee-100"
  }`;
}

export function ReservationForm() {
  const slots = useMemo(timeSlots, []);
  const [fields, setFields] = useState<Fields>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!fields.name.trim()) e.name = "Mohon isi nama kamu.";
    if (!fields.phone.trim()) e.phone = "Mohon isi nomor WhatsApp kamu.";
    else if (!/^[0-9+\-\s]{8,}$/.test(fields.phone.trim()))
      e.phone = "Masukkan nomor telepon yang valid.";
    if (!fields.date) e.date = "Mohon pilih tanggal.";
    else if (fields.date < TODAY) e.date = "Mohon pilih tanggal yang akan datang.";
    if (!fields.time) e.time = "Mohon pilih jam.";
    if (!fields.guests) e.guests = "Pilih jumlah tamu.";
    return e;
  };

  const buildMessage = () => {
    const dateLabel = fields.date
      ? new Date(`${fields.date}T00:00:00`).toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : fields.date;
    const guestsLabel =
      fields.guests === "More than 10" ? "Lebih dari 10 orang" : `${fields.guests} orang`;
    return (
      `Halo ${SITE.name}! 👋\n\n` +
      `Saya ingin melakukan reservasi meja:\n` +
      `• Nama: ${fields.name}\n` +
      `• No. WhatsApp: ${fields.phone}\n` +
      `• Tanggal: ${dateLabel}\n` +
      `• Jam: ${fields.time.replace(":", ".")}\n` +
      `• Jumlah tamu: ${guestsLabel}\n` +
      (fields.notes.trim() ? `• Catatan: ${fields.notes.trim()}\n` : "") +
      `\nMohon konfirmasi ketersediaannya. Terima kasih! 🙏`
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.focus();
      return;
    }
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-forest-100 bg-white p-8 text-center shadow-soft sm:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-forest-600" aria-hidden />
        <h2 className="mt-5 font-serif text-2xl font-semibold text-forest-800">
          Permintaanmu sedang dikirim
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-coffee-500">
          Kami sudah membuka WhatsApp berisi detail reservasimu. Tinggal kirim
          pesannya dan tim kami akan segera mengonfirmasi mejamu. Kalau WhatsApp
          tidak terbuka, cek dulu pengaturan pop-up di browser kamu.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 rounded-full bg-forest-800 px-6 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-forest-900"
        >
          Buat reservasi lagi
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-coffee-100/70 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass()}>
            <User className="h-4 w-4 text-gold-600" aria-hidden /> Nama lengkap
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="mis. Dinda Maharani"
            className={inputClass(!!errors.name)}
            data-error={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name && (
            <p id="err-name" className="mt-1.5 text-xs text-maroon">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="sm:col-span-2">
          <label htmlFor="phone" className={labelClass()}>
            <Phone className="h-4 w-4 text-gold-600" aria-hidden /> Nomor WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="mis. 0812 3456 7890"
            className={inputClass(!!errors.phone)}
            data-error={!!errors.phone}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
          />
          {errors.phone && (
            <p id="err-phone" className="mt-1.5 text-xs text-maroon">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClass()}>
            <CalendarDays className="h-4 w-4 text-gold-600" aria-hidden /> Tanggal
          </label>
          <input
            id="date"
            type="date"
            min={TODAY}
            value={fields.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputClass(!!errors.date)}
            data-error={!!errors.date}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "err-date" : undefined}
          />
          {errors.date && (
            <p id="err-date" className="mt-1.5 text-xs text-maroon">
              {errors.date}
            </p>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className={labelClass()}>
            <Clock className="h-4 w-4 text-gold-600" aria-hidden /> Jam
          </label>
          <select
            id="time"
            value={fields.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputClass(!!errors.time)}
            data-error={!!errors.time}
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? "err-time" : undefined}
          >
            <option value="" disabled>
              Pilih jam
            </option>
            {slots.map((s) => (
              <option key={s} value={s}>
                {s.replace(":", ".")}
              </option>
            ))}
          </select>
          {errors.time && (
            <p id="err-time" className="mt-1.5 text-xs text-maroon">
              {errors.time}
            </p>
          )}
        </div>

        {/* Guests */}
        <div className="sm:col-span-2">
          <label htmlFor="guests" className={labelClass()}>
            <Users className="h-4 w-4 text-gold-600" aria-hidden /> Jumlah tamu
          </label>
          <select
            id="guests"
            value={fields.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={inputClass(!!errors.guests)}
          >
            {GUEST_OPTIONS.map((g) => (
              <option key={g} value={g}>
                {g === "More than 10" ? "Lebih dari 10 orang" : `${g} orang`}
              </option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass()}>
            <MessageSquare className="h-4 w-4 text-gold-600" aria-hidden /> Catatan
            khusus <span className="font-normal text-coffee-300">(opsional)</span>
          </label>
          <textarea
            id="notes"
            rows={3}
            value={fields.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Kejutan ulang tahun, preferensi tempat duduk, alergi, dll."
            className={`${inputClass()} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-forest-900 shadow-soft transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-gold-300"
      >
        <Send className="h-5 w-5" aria-hidden />
        Kirim Reservasi via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-coffee-400">
        Tanpa perlu akun — kami konfirmasi bookingmu langsung lewat WhatsApp.
      </p>
    </form>
  );
}
