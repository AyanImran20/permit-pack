"use client";
import { useState } from "react";
import { CITY_PACKS } from "@/lib/cities";

export default function Dashboard() {
  const [cityIndex, setCityIndex] = useState(0);
  const city = CITY_PACKS[cityIndex];

  const [formData, setFormData] = useState({
    owner_name: "",
    property_address: "",
    contact_email: "",
    contact_phone: ""
  });

  async function downloadPdf(formId: string) {
    const res = await fetch(`/api/pdf/fill?city=${encodeURIComponent(city.city)}&form=${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formId}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-8">
      <h1 className="text-2xl font-semibold">Permit Pack Dashboard</h1>

      <section className="space-y-2">
        <label className="block text-sm">Select City</label>
        <select
          className="border rounded p-2"
          value={cityIndex}
          onChange={(e) => setCityIndex(parseInt(e.target.value))}
        >
          {CITY_PACKS.map((c, i) => (
            <option key={c.city} value={i}>{c.city}</option>
          ))}
        </select>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-medium mb-2">Your Details</h2>
          {Object.entries(formData).map(([k, v]) => (
            <div key={k} className="mb-2">
              <label className="block text-xs mb-1">{k.replaceAll("_"," ")}</label>
              <input
                className="w-full border rounded p-2"
                value={v}
                onChange={(e)=>setFormData({...formData,[k]:e.target.value})}
              />
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-medium mb-2">Compliance Checklist</h2>
          <ul className="list-disc ml-5 space-y-1">
            {city.requirements.map(r => (
              <li key={r.id}>{r.title}</li>
            ))}
          </ul>
          <h2 className="font-medium mt-6 mb-2">Permit Forms</h2>
          <div className="space-y-2">
            {city.forms.map(f => (
              <button key={f.id} className="rounded bg-black text-white px-3 py-2" onClick={()=>downloadPdf(f.id)}>
                Download Filled: {f.id}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
