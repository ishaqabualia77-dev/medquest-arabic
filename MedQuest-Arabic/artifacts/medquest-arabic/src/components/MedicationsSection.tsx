import React, { useState, useMemo } from "react";
import medsData from "../data/medications.json";

type TabType = "adults" | "pediatrics";

interface MedEntry {
  category?: string;
  source?: string;
  tradeName?: string;
  scientificName?: string;
  genericName?: string;
  dose?: string;
  strength?: string;
  route?: string;
  form?: string;
  frequency?: string;
  pediatricDose?: string;
  notes?: string;
}

export const MedicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("adults");
  const [search, setSearch] = useState("");

  const items = useMemo(() => {
    const raw = (activeTab === "adults" ? medsData.adults : medsData.pediatrics) as MedEntry[];
    const q = search.trim().toLowerCase();
    if (!q) return raw;
    return raw.filter((item) =>
      Object.values(item).some((val) => String(val ?? "").toLowerCase().includes(q))
    );
  }, [activeTab, search]);

  return (
    <section dir="ltr" className="panel" style={{ textAlign: "left", marginTop: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 12 }}>
        <h2 className="panel-title" style={{ margin: 0 }}>Medications</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            className={activeTab === "adults" ? "btn-primary" : "btn-secondary"}
            onClick={() => setActiveTab("adults")}
          >
            Adults
          </button>
          <button
            type="button"
            className={activeTab === "pediatrics" ? "btn-primary" : "btn-secondary"}
            onClick={() => setActiveTab("pediatrics")}
          >
            Pediatrics
          </button>
        </div>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search trade name, generic/scientific name, dose, or notes..."
        style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #d9e2dc", marginBottom: 14 }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
        {items.map((med, i) => {
          const name = med.scientificName || med.genericName || "";
          const doseVal = med.dose || med.strength || "";
          const routeVal = med.route || med.form || "";
          const freqVal = med.frequency || med.pediatricDose || "";
          return (
            <div key={i} style={{ border: "1px solid #e2e8e4", borderRadius: 10, padding: 12, background: "#fff" }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>
                {med.tradeName} {name ? `(${name})` : ""}
              </div>
              {med.category && <div style={{ fontSize: 12, color: "#6b7770", marginTop: 2 }}>{med.category}</div>}
              {doseVal && <div style={{ fontSize: 13, marginTop: 6 }}><strong>Dose / Strength:</strong> {doseVal}</div>}
              {routeVal && <div style={{ fontSize: 13, marginTop: 2 }}><strong>Route / Form:</strong> {routeVal}</div>}
              {freqVal && <div style={{ fontSize: 13, marginTop: 2 }}><strong>Frequency / Dose:</strong> {freqVal}</div>}
              {med.notes && <div style={{ fontSize: 12.5, color: "#8a5a00", marginTop: 4 }}><strong>Notes:</strong> {med.notes}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};
