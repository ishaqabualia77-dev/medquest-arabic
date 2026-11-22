import React, { useMemo } from "react";

export type SurgicalBranchId =
  | "Surgery"
  | "Gynecology & Obstetrics"
  | "ENT"
  | "Ophthalmology"
  | "Orthopedics"
  | "Urosurgery"
  | "Oncology";

export type NonSurgicalBranchId =
  | "Internal Medicine"
  | "Pediatrics"
  | "Dermatology"
  | "Psychiatry"
  | "Radiology"
  | "Anesthesia";

export type ClassificationBranchId = SurgicalBranchId | NonSurgicalBranchId;

export const SURGICAL_MAIN_BRANCHES: Array<{ id: SurgicalBranchId; label: string; ar: string }> = [
  { id: "Surgery", label: "Surgery", ar: "الجراحة العامة" },
  { id: "Gynecology & Obstetrics", label: "Gynecology & Obstetrics", ar: "النسائية والتوليد" },
];

export const SURGICAL_MINORS: Array<{ id: SurgicalBranchId; label: string; ar: string }> = [
  { id: "ENT", label: "ENT", ar: "أنف وأذن وحنجرة" },
  { id: "Ophthalmology", label: "Ophthalmology", ar: "العيون" },
  { id: "Orthopedics", label: "Orthopedics", ar: "العظام" },
  { id: "Urosurgery", label: "Urosurgery", ar: "جراحة المسالك" },
  { id: "Oncology", label: "Oncology", ar: "الأورام" },
];

export const NON_SURGICAL_BRANCHES: Array<{ id: NonSurgicalBranchId; label: string; ar: string }> = [
  { id: "Internal Medicine", label: "Internal Medicine", ar: "الباطني" },
  { id: "Pediatrics", label: "Pediatrics", ar: "الأطفال" },
  { id: "Dermatology", label: "Dermatology", ar: "الجلدية" },
  { id: "Psychiatry", label: "Psychiatry", ar: "النفسية" },
  { id: "Radiology", label: "Radiology", ar: "الأشعة" },
  { id: "Anesthesia", label: "Anesthesia", ar: "التخدير" },
];

export const ALL_CLASSIFICATION_BRANCHES: ClassificationBranchId[] = [
  ...SURGICAL_MAIN_BRANCHES.map((b) => b.id),
  ...SURGICAL_MINORS.map((b) => b.id),
  ...NON_SURGICAL_BRANCHES.map((b) => b.id),
];

export const SURGICAL_ALL_IDS: SurgicalBranchId[] = [
  ...SURGICAL_MAIN_BRANCHES.map((b) => b.id),
  ...SURGICAL_MINORS.map((b) => b.id),
];

export const MINORS_IDS: SurgicalBranchId[] = SURGICAL_MINORS.map((b) => b.id);
export const NON_SURGICAL_IDS: NonSurgicalBranchId[] = NON_SURGICAL_BRANCHES.map((b) => b.id);

export function classifyQuestionBranch(specialty: string, questionText = ""): ClassificationBranchId {
  const s = `${specialty || ""} ${questionText || ""}`.toLowerCase();

  if (/\b(ent|otorhinolaryng|otitis|sinusitis|tonsill|laryng|pharyng)\b|أنف|أذن|حنجر/i.test(s)) return "ENT";
  if (/\b(ophthalm|glaucoma|cataract|retin|corne|conjunctiv|uveit|eye)\b|عيون|شبكي|قرني|ماء أبيض|ماء أزرق/i.test(s)) return "Ophthalmology";
  if (/\b(ortho|fractur|sprain|joint|arthritis|menisc|tendon|femur|tibia|humerus|spine|osteo)\b|عظام|كسر|مفصل|فقر/i.test(s)) return "Orthopedics";
  if (/\b(urosurg|urol|renal|kidney|nephr|prostat|bladder|hydronephros|hematuria|calcul)\b|مسالك|كلية|كلى|بروستات|مثان/i.test(s)) return "Urosurgery";
  if (/\b(oncol|carcinom|tumor|tumour|malignan|chemotherapy|lymphom|leukemi|metastas)\b|أورام|سرطان|ورم/i.test(s)) return "Oncology";
  if (/\b(gyn|obstet|pregnan|fetal|uter|ovari|cervic|preeclamps|eclampsia|labor|delivery|menstru)\b|نسائ|توليد|حمل|جنين|رحم|مبيض/i.test(s)) return "Gynecology & Obstetrics";
  if (/\b(surg|cholecyst|appendic|hernia|laparoscop|bowel|colon|trauma|abdomen)\b|جراح|مرارة|زائدة|فتق/i.test(s)) return "Surgery";

  if (/\b(pediatr|infant|neonate|child|toddler|newborn|vaccin|croup|bronchiolit)\b|أطفال|رضيع|حديث الولادة/i.test(s)) return "Pediatrics";
  if (/\b(dermat|skin|rash|psorias|eczema|dermatit|melanom|urticari|acne)\b|جلدي|طفح|صدفي|إكزيما/i.test(s)) return "Dermatology";
  if (/\b(psychiatr|depress|bipolar|schizophren|anxiety|ssri|serotonin|mania|psychos|delir)\b|نفسي|اكتئاب|ذهان|قلق/i.test(s)) return "Psychiatry";
  if (/\b(radiol|ct\b|mri\b|ultrasound|x-?ray|fluoroscop|contrast|imaging)\b|أشعة|تصوير|رنين|طبقي/i.test(s)) return "Radiology";
  if (/\b(anesthes|anaesthes|intubat|airway|sedat|epidural|spinal block|induction|propofol)\b|تخدير|تبييض|مجرى الهواء/i.test(s)) return "Anesthesia";

  return "Internal Medicine";
}

interface ClassificationFilterProps {
  selectedBranches: ClassificationBranchId[];
  onChangeBranches: (next: ClassificationBranchId[]) => void;
  questions: Array<{ specialty: string; question?: string }>;
  onEnterSelectedQuestions?: () => void;
  enterButtonLabel?: string;
  compact?: boolean;
}

export const ClassificationBranchFilter: React.FC<ClassificationFilterProps> = ({
  selectedBranches,
  onChangeBranches,
  questions,
  onEnterSelectedQuestions,
  enterButtonLabel,
  compact = false,
}) => {
  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const id of ALL_CLASSIFICATION_BRANCHES) map[id] = 0;
    for (const q of questions) {
      const b = classifyQuestionBranch(q.specialty, q.question);
      map[b] = (map[b] || 0) + 1;
    }
    return map;
  }, [questions]);

  const selectedSet = useMemo(() => new Set(selectedBranches), [selectedBranches]);
  const allSelected = ALL_CLASSIFICATION_BRANCHES.every((id) => selectedSet.has(id));

  const surgicalSelectedCount = SURGICAL_ALL_IDS.filter((id) => selectedSet.has(id)).length;
  const surgicalAllChecked = surgicalSelectedCount === SURGICAL_ALL_IDS.length;

  const minorsSelectedCount = MINORS_IDS.filter((id) => selectedSet.has(id)).length;
  const minorsAllChecked = minorsSelectedCount === MINORS_IDS.length;

  const nonSurgicalSelectedCount = NON_SURGICAL_IDS.filter((id) => selectedSet.has(id)).length;
  const nonSurgicalAllChecked = nonSurgicalSelectedCount === NON_SURGICAL_IDS.length;

  const matchingQuestionsCount = useMemo(
    () => questions.filter((q) => selectedSet.has(classifyQuestionBranch(q.specialty, q.question))).length,
    [questions, selectedSet]
  );

  const toggleAll = () => {
    onChangeBranches(allSelected ? [] : [...ALL_CLASSIFICATION_BRANCHES]);
  };

  const toggleGroup = (ids: ClassificationBranchId[], checked: boolean) => {
    const next = new Set(selectedBranches);
    if (checked) {
      ids.forEach((id) => next.add(id));
    } else {
      ids.forEach((id) => next.delete(id));
    }
    onChangeBranches(Array.from(next));
  };

  const toggleOne = (id: ClassificationBranchId) => {
    const next = new Set(selectedBranches);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onChangeBranches(Array.from(next));
  };

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #d9e2dc",
        borderRadius: 14,
        padding: compact ? 12 : 16,
        marginTop: 12,
        marginBottom: 14,
      }}
      data-testid="classification-branch-filter"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          paddingBottom: 10,
          borderBottom: "1px solid #edf2ef",
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: compact ? 14 : 15, color: "#15221b" }}>
            تخصيص أقسام التصنيفي الفلسطيني
          </div>
          <div style={{ fontSize: 12, color: "#5c6b62", marginTop: 2 }}>
            اختر قسماً محدداً أو عدة أقسام أو حدّد الكل ({selectedBranches.length} قسم مختار · {matchingQuestionsCount} سؤال)
          </div>
        </div>

        <button
          type="button"
          className={allSelected ? "btn-secondary" : "btn-primary"}
          style={{ padding: "6px 12px", fontSize: 12 }}
          onClick={toggleAll}
          data-testid="button-select-all-branches"
        >
          {allSelected ? "إلغاء تحديد الكل" : "تحديد الكل"}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: compact ? "1fr" : "repeat(auto-fit, minmax(270px, 1fr))",
          gap: 12,
          marginTop: 12,
        }}
      >
        {/* القسم الجراحي */}
        <div style={{ border: "1px solid #e3ebe6", borderRadius: 10, padding: 10, background: "#fafcfb" }}>
          <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontWeight: 800, fontSize: 13 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="checkbox"
                checked={surgicalAllChecked}
                onChange={(e) => toggleGroup(SURGICAL_ALL_IDS, e.target.checked)}
              />
              <span>القسم الجراحي (Surgical)</span>
            </span>
            <span style={{ fontSize: 11, color: "#4d6156" }}>{surgicalSelectedCount}/{SURGICAL_ALL_IDS.length}</span>
          </label>

          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8, paddingRight: 18 }}>
            {SURGICAL_MAIN_BRANCHES.map((b) => (
              <label key={b.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: 12.5 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <input
                    type="checkbox"
                    checked={selectedSet.has(b.id)}
                    onChange={() => toggleOne(b.id)}
                  />
                  <span>{b.label} <span style={{ color: "#6c7a72" }}>· {b.ar}</span></span>
                </span>
                <span style={{ fontSize: 11, color: "#6c7a72" }}>{counts[b.id] || 0}</span>
              </label>
            ))}

            {/* الماينرات الجراحية */}
            <div style={{ marginTop: 4, paddingTop: 6, borderTop: "1px dashed #d7e2db" }}>
              <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontWeight: 700, fontSize: 12, color: "#1f4e3d" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <input
                    type="checkbox"
                    checked={minorsAllChecked}
                    onChange={(e) => toggleGroup(MINORS_IDS, e.target.checked)}
                  />
                  <span>الماينرات (Surgical Minors)</span>
                </span>
                <span style={{ fontSize: 11 }}>{minorsSelectedCount}/{MINORS_IDS.length}</span>
              </label>

              <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 6, paddingRight: 16 }}>
                {SURGICAL_MINORS.map((m) => (
                  <label key={m.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: 12 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <input
                        type="checkbox"
                        checked={selectedSet.has(m.id)}
                        onChange={() => toggleOne(m.id)}
                      />
                      <span>{m.label} <span style={{ color: "#6c7a72" }}>· {m.ar}</span></span>
                    </span>
                    <span style={{ fontSize: 11, color: "#6c7a72" }}>{counts[m.id] || 0}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* القسم اللاجراحي */}
        <div style={{ border: "1px solid #e3ebe6", borderRadius: 10, padding: 10, background: "#fafcfb" }}>
          <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontWeight: 800, fontSize: 13 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="checkbox"
                checked={nonSurgicalAllChecked}
                onChange={(e) => toggleGroup(NON_SURGICAL_IDS, e.target.checked)}
              />
              <span>القسم اللاجراحي (Non-Surgical)</span>
            </span>
            <span style={{ fontSize: 11, color: "#4d6156" }}>{nonSurgicalSelectedCount}/{NON_SURGICAL_IDS.length}</span>
          </label>

          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8, paddingRight: 18 }}>
            {NON_SURGICAL_BRANCHES.map((b) => (
              <label key={b.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: 12.5 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <input
                    type="checkbox"
                    checked={selectedSet.has(b.id)}
                    onChange={() => toggleOne(b.id)}
                  />
                  <span>{b.label} <span style={{ color: "#6c7a72" }}>· {b.ar}</span></span>
                </span>
                <span style={{ fontSize: 11, color: "#6c7a72" }}>{counts[b.id] || 0}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {onEnterSelectedQuestions && (
        <div
          style={{
            marginTop: 14,
            paddingTop: 12,
            borderTop: "1px solid #e6eee9",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 12, color: selectedBranches.length === 0 ? "#b43d32" : "#43554b", fontWeight: 600 }}>
            {selectedBranches.length === 0
              ? "يرجى تحديد قسم واحد على الأقل أو الضغط على تحديد الكل"
              : `جاهز للدخول إلى ${matchingQuestionsCount} سؤالاً في الأقسام المختارة`}
          </span>

          <button
            type="button"
            className="btn-primary"
            disabled={selectedBranches.length === 0}
            style={{
              opacity: selectedBranches.length === 0 ? 0.5 : 1,
              cursor: selectedBranches.length === 0 ? "not-allowed" : "pointer",
            }}
            onClick={onEnterSelectedQuestions}
            data-testid="button-enter-selected-questions"
          >
            {enterButtonLabel ||
              (allSelected
                ? `الدخول إلى أسئلة التصنيفي الكاملة (${matchingQuestionsCount})`
                : `الدخول إلى الأسئلة المحددة (${matchingQuestionsCount})`)}
          </button>
        </div>
      )}
    </div>
  );
};
