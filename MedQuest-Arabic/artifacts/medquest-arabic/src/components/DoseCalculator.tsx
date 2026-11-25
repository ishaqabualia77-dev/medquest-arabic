import React, { useState } from "react";

export function DoseCalculator() {
  const [drugName, setDrugName] = useState("");
  const [strengthAmount, setStrengthAmount] = useState("250");
  const [perVolumeOrUnit, setPerVolumeOrUnit] = useState("5");
  const [unitType, setUnitType] = useState<"ml" | "tab">("ml");
  const [weightKg, setWeightKg] = useState("");
  const [mgPerKg, setMgPerKg] = useState("15");
  const [maxSingleMg, setMaxSingleMg] = useState("");

  const weight = parseFloat(weightKg);
  const doseFactor = parseFloat(mgPerKg);
  const strength = parseFloat(strengthAmount);
  const perUnit = parseFloat(perVolumeOrUnit);
  const maxSingle = parseFloat(maxSingleMg);

  const canCalculate =
    weight > 0 && doseFactor > 0 && strength > 0 && perUnit > 0;

  let targetMg = canCalculate ? weight * doseFactor : 0;
  let capped = false;
  if (canCalculate && !isNaN(maxSingle) && maxSingle > 0 && targetMg > maxSingle) {
    targetMg = maxSingle;
    capped = true;
  }

  const mgPerSingleUnit = strength / perUnit;
  const resultUnits = canCalculate ? targetMg / mgPerSingleUnit : 0;

  return (
    <div dir="rtl" className="max-w-xl mx-auto p-4 rounded-2xl border bg-white shadow-sm space-y-4">
      <h2 className="text-lg font-bold text-emerald-900">حاسبة الجرعات (إدخال مباشر)</h2>

      <div>
        <label className="block text-sm font-medium mb-1">اسم الدواء</label>
        <input
          type="text"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
          placeholder="اكتب اسم الدواء (مثال: Paracetamol / Augmentin)"
          className="w-full rounded-xl border px-3 py-2 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">التركيز (mg)</label>
          <input
            type="number"
            step="any"
            value={strengthAmount}
            onChange={(e) => setStrengthAmount(e.target.value)}
            placeholder="250"
            className="w-full rounded-xl border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">لكل (مل / حبة)</label>
          <input
            type="number"
            step="any"
            value={perVolumeOrUnit}
            onChange={(e) => setPerVolumeOrUnit(e.target.value)}
            placeholder="5"
            className="w-full rounded-xl border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">النوع</label>
          <select
            value={unitType}
            onChange={(e) => setUnitType(e.target.value as "ml" | "tab")}
            className="w-full rounded-xl border px-3 py-2 text-sm"
          >
            <option value="ml">شراب / محلول (ml)</option>
            <option value="tab">أقراص / كبسولات (حبة)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">الوزن (kg)</label>
          <input
            type="number"
            step="any"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            placeholder="مثال: 12"
            className="w-full rounded-xl border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">الجرعة (mg/kg)</label>
          <input
            type="number"
            step="any"
            value={mgPerKg}
            onChange={(e) => setMgPerKg(e.target.value)}
            placeholder="15"
            className="w-full rounded-xl border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">حد أقصى للجرعة (mg)</label>
          <input
            type="number"
            step="any"
            value={maxSingleMg}
            onChange={(e) => setMaxSingleMg(e.target.value)}
            placeholder="اختياري"
            className="w-full rounded-xl border px-3 py-2 text-sm"
          />
        </div>
      </div>

      {canCalculate ? (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
          <div className="text-sm text-emerald-950 font-semibold">
            {drugName.trim() ? `الدواء: ${drugName.trim()}` : "النتيجة المحسوبة"}
          </div>
          <div className="text-base font-bold text-emerald-800">
            الكمية المطلوبة: {resultUnits.toFixed(2)} {unitType === "ml" ? "مل (ml)" : "حبة"}
          </div>
          <div className="text-xs text-emerald-900">
            الجرعة الفعالة: {targetMg.toFixed(1)} mg {capped ? "(تم التقييد بالحد الأقصى المدخل)" : ""}
          </div>
        </div>
      ) : (
        <div className="text-xs text-gray-500">
          أدخل الوزن والتركيز والجرعة لكل كغ لحساب الكمية بدقة.
        </div>
      )}
    </div>
  );
}
