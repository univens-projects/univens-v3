import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, ChevronRight, ChevronLeft, Download, ExternalLink, Mail, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-17'); // Next Monday default
  const [selectedTime, setSelectedTime] = useState<string>('15:00');
  const [duration, setDuration] = useState<'15 min' | '30 min' | '45 min' | '60 min'>('30 min');
  const [note, setNote] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  // Next 7 available business days
  const availableDates = [
    { label: 'Mon, Aug 17', value: '2026-08-17' },
    { label: 'Tue, Aug 18', value: '2026-08-18' },
    { label: 'Wed, Aug 19', value: '2026-08-19' },
    { label: 'Thu, Aug 20', value: '2026-08-20' },
    { label: 'Fri, Aug 21', value: '2026-08-21' },
    { label: 'Mon, Aug 24', value: '2026-08-24' },
    { label: 'Tue, Aug 25', value: '2026-08-25' },
  ];

  const timeSlots = [
    '10:00 IST', '11:30 IST', '14:00 IST', '15:00 IST', '16:30 IST', '18:00 IST', '19:30 IST'
  ];

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          duration,
          note,
          name,
          email,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setConfirmed(true);
  };

  const handleDownloadIcs = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Univens Strategic Execution//EN
BEGIN:VEVENT
SUMMARY:Univens Strategic Execution Call (${duration})
DESCRIPTION:Meeting with Gaurav / Univens team to discuss business objectives. Context: ${note || 'None provided'}
DTSTART:${selectedDate.replace(/-/g, '')}T150000Z
DTEND:${selectedDate.replace(/-/g, '')}T153000Z
LOCATION:Google Meet / Online
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'univens_strategy_call.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Univens+Strategy+Consultation&details=Strategy+Call+with+Univens+Team.+Context:+${encodeURIComponent(note)}&location=Google+Meet`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Book a Strategy Call</h3>
              <p className="text-xs text-slate-500 font-mono">1-on-1 Execution Alignment with Univens</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Steps */}
        {!confirmed && (
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-around text-xs font-mono">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px]">1</span>
              <span>Date</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px]">2</span>
              <span>Time</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <div className={`flex items-center gap-2 ${step === 3 ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px]">3</span>
              <span>Confirm</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {confirmed ? (
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Call Reserved Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-normal">
                  We look forward to speaking with you on <strong className="text-emerald-700">{selectedDate}</strong> at <strong className="text-emerald-700">{selectedTime}</strong> ({duration}).
                </p>
              </div>

              {/* Export Calendar Buttons */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3">
                <span className="text-xs font-mono uppercase text-slate-500 block">Export to Calendar</span>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={googleCalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Google Calendar</span>
                  </a>
                  <button
                    onClick={handleDownloadIcs}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Download .ics</span>
                  </button>
                </div>
              </div>

              {/* Social connect */}
              <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-500 space-y-2">
                <p>Let's connect in the meantime:</p>
                <div className="flex items-center justify-center gap-4 text-emerald-700 font-semibold">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                  <span>·</span>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a>
                  <span>·</span>
                  <a href="mailto:hello@univens.in" className="hover:underline">Email</a>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* STEP 1: Date */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Pick a date</h4>
                    <p className="text-xs text-slate-500">Choose a day that works for you.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availableDates.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setSelectedDate(d.value)}
                        className={`p-4 rounded-2xl border text-left font-mono transition-all cursor-pointer ${
                          selectedDate === d.value
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-xs font-bold block">{d.label}</span>
                        <span className="text-[10px] text-slate-500">Available</span>
                      </button>
                    ))}
                  </div>

                  {/* Duration picker */}
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <span className="text-xs font-mono text-slate-700 font-medium block">Duration Options</span>
                    <div className="grid grid-cols-4 gap-2">
                      {(['15 min', '30 min', '45 min', '60 min'] as const).map((dur) => (
                        <button
                          key={dur}
                          type="button"
                          onClick={() => setDuration(dur)}
                          className={`py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                            duration === dur
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold'
                              : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Next: Select Time</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Select a time</h4>
                    <p className="text-xs text-slate-500">Available slots for {selectedDate}.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`p-3.5 rounded-2xl border text-center font-mono text-xs transition-all cursor-pointer ${
                          selectedTime === slot
                            ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-md'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Next: Confirm</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Confirm Details & Form */}
              {step === 3 && (
                <form onSubmit={handleConfirm} className="space-y-5">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Confirm your booking</h4>
                    <p className="text-xs text-slate-500">Review details and choose how to add to your calendar.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs font-mono text-emerald-900">
                    <div>
                      <strong className="block text-slate-900 text-sm font-bold">{selectedDate} at {selectedTime}</strong>
                      <span>Duration: {duration}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-emerald-700 font-bold underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-700 font-medium block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Gaurav Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-700 font-medium block mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="cxo@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-700 font-medium block mb-1">Add a note (optional)</label>
                    <textarea
                      rows={3}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Any context or special requests for the meeting (e.g. LMS development, AI automation roadmap)..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase shadow-md cursor-pointer"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
