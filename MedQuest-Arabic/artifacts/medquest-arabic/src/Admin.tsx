import { useCallback, useEffect, useMemo, useState } from 'react';
// __TEMP_AUTH_BYPASS__: import { useAuth } from '@clerk/react';
import {
  Activity, BookOpen, ClipboardList, LayoutDashboard,
  Plus, Search, ShieldCheck, Users, CheckCircle2,
  XCircle, RefreshCw, Stethoscope
} from 'lucide-react';

const DEFAULT_RENDER_API_BASE = "https://medquest-arabic.onrender.com";
const RAW_WEB_API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const RAW_ANDROID_API_BASE = (import.meta.env.VITE_ANDROID_API_URL || "").replace(/\/+$/, "");
const IS_CAPACITOR_ORIGIN = typeof window !== "undefined" && (
  Boolean((window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.()) ||
  window.location.protocol === "capacitor:" ||
  /^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(window.location.origin)
);
const EFFECTIVE_API_BASE = IS_CAPACITOR_ORIGIN
  ? (RAW_ANDROID_API_BASE || (/^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(RAW_WEB_API_BASE) ? "" : RAW_WEB_API_BASE) || DEFAULT_RENDER_API_BASE)
  : RAW_WEB_API_BASE;
function resolveApiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : "/" + path;
  return EFFECTIVE_API_BASE ? EFFECTIVE_API_BASE + normalizedPath : normalizedPath;
}

async function safeJson<T>(res: Response, fallbackError = "تعذر قراءة استجابة الخادم بصيغة JSON."): Promise<T> {
  const rawText = await res.text();
  const trimmed = rawText.trim();
  if (!trimmed) {
    if (!res.ok) throw new Error(fallbackError);
    return {} as T;
  }
  if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html") || trimmed.startsWith("<HTML")) {
    throw new Error("تعذر الاتصال بخادم لوحة الإدارة (تم استلام صفحة HTML بدل JSON). تأكد من إعداد رابط الخادم للنسخة أو الاتصال بالشبكة.");
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    throw new Error(fallbackError);
  }
  if (!res.ok) {
    const errObj = parsed as { error?: string; message?: string };
    throw new Error(errObj?.error || errObj?.message || fallbackError);
  }
  return parsed as T;
}


type Question = {
  id: string;
  specialty: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

type Props = { questions: Question[] };

type DoctorRequestItem = {
  id: string;
  clerkUserId: string;
  email: string;
  fullName?: string | null;
  status: 'pending' | 'approved' | 'rejected';
  reviewNote?: string | null;
  createdAt?: string;
};

type ApiQuestionRow = {
  id: string | number;
  examTrackId?: string | number | null;
  topic?: string | null;
  difficulty?: string | null;
  stem?: string | null;
  options?: Array<{ id?: string; text?: string } | string> | null;
  correctOptionId?: string | null;
  explanationBasic?: string | null;
  explanationAdvanced?: string | null;
};

type ExamTrackRow = {
  id: string | number;
  name?: string | null;
  nameArabic?: string | null;
  slug?: string | null;
};

type SourceRow = {
  id: string | number;
  title?: string | null;
  name?: string | null;
};

function normalizeDifficulty(raw?: string | null): Question['difficulty'] {
  if (!raw) return 'Basic';
  const lower = raw.toLowerCase();
  if (lower === 'intermediate' || lower === 'medium') return 'Intermediate';
  if (lower === 'advanced' || lower === 'hard') return 'Advanced';
  return 'Basic';
}

export default function Admin({ questions }: Props) {
  // __TEMP_AUTH_BYPASS__: const { getToken } = useAuth();
  const getToken = async () => null;
  const [page, setPage] = useState<'overview' | 'questions' | 'add' | 'requests' | 'tracks'>('overview');
  const [search, setSearch] = useState('');
  const [track, setTrack] = useState<'all' | 'internship' | 'specialty'>('all');

  const [items, setItems] = useState(() =>
    questions.map((q) => ({
      ...q,
      track: q.id.startsWith('ip-') ? ('internship' as const) : ('specialty' as const),
    }))
  );
  const [tracks, setTracks] = useState<ExamTrackRow[]>([]);
  const [sources, setSources] = useState<SourceRow[]>([]);
  const [requests, setRequests] = useState<DoctorRequestItem[]>([]);
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});

  const [loadingData, setLoadingData] = useState(false);
  const [submittingQuestion, setSubmittingQuestion] = useState(false);
  const [submittingTrack, setSubmittingTrack] = useState(false);
  const [trackForm, setTrackForm] = useState({
    id: '',
    name: '',
    nameArabic: '',
  });
  const [reviewingId, setReviewingId] = useState<string | null>(null);
  const [bannerError, setBannerError] = useState<string | null>(null);
  const [bannerSuccess, setBannerSuccess] = useState<string | null>(null);

  const [form, setForm] = useState({
    track: 'internship',
    examTrackId: '',
    sourceId: '',
    specialty: '',
    difficulty: 'Basic',
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    answer: '0',
    explanation: '',
    explanationAdvanced: '',
  });

  const authHeaders = useCallback(async (): Promise<Record<string, string>> => {
    const token = await getToken();
    return token ? { Authorization: 'Bearer ' + token } : {};
  }, [getToken]);

  const loadAdminData = useCallback(async () => {
    setLoadingData(true);
    setBannerError(null);
    try {
      const headers = await authHeaders();

      const [reqRes, qRes, tRes, sRes] = await Promise.all([
        fetch(resolveApiUrl('/api/doctor-access/admin/requests'), { headers }),
        fetch(resolveApiUrl('/api/question-bank/questions'), { headers }),
        fetch(resolveApiUrl('/api/question-bank/exam-tracks'), { headers }),
        fetch(resolveApiUrl('/api/question-bank/sources'), { headers }),
      ]);

      if (reqRes.ok) {
        const reqData = await safeJson<unknown>(reqRes);
        if (Array.isArray(reqData)) {
          setRequests(reqData as DoctorRequestItem[]);
        }
      }

      if (tRes.ok) {
        const tData = await safeJson<unknown>(tRes);
        const tList: ExamTrackRow[] = Array.isArray(tData)
          ? tData
          : Array.isArray(tData?.tracks)
            ? tData.tracks
            : [];
        setTracks(tList);
        if (tList.length > 0) {
          setForm((prev) => ({
            ...prev,
            examTrackId: prev.examTrackId || String(tList[0].id),
          }));
        }
      }

      if (sRes.ok) {
        const sData = await safeJson<unknown>(sRes);
        const sList: SourceRow[] = Array.isArray(sData)
          ? sData
          : Array.isArray(sData?.sources)
            ? sData.sources
            : [];
        setSources(sList);
        if (sList.length > 0) {
          setForm((prev) => ({
            ...prev,
            sourceId: prev.sourceId || String(sList[0].id),
          }));
        }
      }

      if (qRes.ok) {
        const qData = await safeJson<unknown>(qRes);
        const rows: ApiQuestionRow[] = Array.isArray(qData)
          ? qData
          : Array.isArray(qData?.questions)
            ? qData.questions
            : [];
        if (rows.length > 0) {
          const mapped = rows.map((row) => {
            const rawOpts = Array.isArray(row.options) ? row.options : [];
            const optTexts = rawOpts.map((o) =>
              typeof o === 'string' ? o : String(o?.text ?? '')
            );
            const ansIdx = Math.max(
              0,
              rawOpts.findIndex((o) =>
                typeof o === 'object' && o !== null ? o.id === row.correctOptionId : false
              )
            );
            const trackVal: 'internship' | 'specialty' =
              String(row.examTrackId ?? '').toLowerCase().includes('spec')
                ? 'specialty'
                : 'internship';
            return {
              id: String(row.id),
              track: trackVal,
              specialty: row.topic || 'General Medicine',
              difficulty: normalizeDifficulty(row.difficulty),
              question: row.stem || '',
              options: optTexts.length ? optTexts : ['', '', '', ''],
              answer: ansIdx,
              explanation: row.explanationBasic || row.explanationAdvanced || '',
            };
          });
          setItems(mapped);
        }
      }
    } catch (err) {
      setBannerError(
        err instanceof Error ? err.message : 'تعذر تحميل بيانات لوحة المشرف.'
      );
    } finally {
      setLoadingData(false);
    }
  }, [authHeaders]);

  useEffect(() => {
    void loadAdminData();
  }, [loadAdminData]);

  const filtered = useMemo(
    () =>
      items.filter(
        (q) =>
          (track === 'all' || q.track === track) &&
          (q.question.toLowerCase().includes(search.toLowerCase()) ||
            q.specialty.toLowerCase().includes(search.toLowerCase()))
      ),
    [items, track, search]
  );

  const pendingCount = useMemo(
    () => requests.filter((r) => r.status === 'pending').length,
    [requests]
  );

  const handleReviewRequest = async (id: string, nextStatus: 'approved' | 'rejected') => {
    setReviewingId(id);
    setBannerError(null);
    setBannerSuccess(null);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const headers = await authHeaders();
      const targetUrl = resolveApiUrl('/api/doctor-access/admin/requests/') + encodeURIComponent(id) + '/review';
      const res = await fetch(targetUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        signal: controller.signal,
        body: JSON.stringify({
          status: nextStatus,
          reviewNote: (reviewNotes[id] ?? '').trim(),
        }),
      });
      const rawText = await res.text();
      let data: { error?: string; reviewNote?: string | null } = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        throw new Error(`استجابة غير متوقعة من الخادم (${res.status}).`);
      }
      if (!res.ok) {
        throw new Error(data.error || `تعذر تحديث حالة الطلب (${res.status}).`);
      }
      const savedNote = data.reviewNote ?? ((reviewNotes[id] ?? '').trim() || null);
      setRequests((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: nextStatus,
                reviewNote: savedNote,
              }
            : item
        )
      );
      setReviewNotes((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      setBannerSuccess(
        nextStatus === 'approved' ? 'تم اعتماد حساب الطبيب بنجاح.' : 'تم رفض طلب الطبيب.'
      );
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setBannerError('انتهت مهلة الاتصال بالخادم أثناء مراجعة الطلب.');
      } else {
        setBannerError(err instanceof Error ? err.message : 'تعذر مراجعة الطلب.');
      }
    } finally {
      clearTimeout(timer);
      setReviewingId(null);
    }
  };

  const addQuestion = async () => {
    setBannerError(null);
    setBannerSuccess(null);
    if (
      !form.specialty.trim() ||
      !form.question.trim() ||
      !form.a.trim() ||
      !form.b.trim() ||
      !form.c.trim() ||
      !form.d.trim() ||
      !form.explanation.trim()
    ) {
      setBannerError('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }

    const answerIndex = Number(form.answer);
    const optionIds = ['a', 'b', 'c', 'd'];
    const correctOptionId = optionIds[answerIndex] || 'a';
    const selectedTrackId =
      form.examTrackId || (tracks[0] ? String(tracks[0].id) : form.track);
    const selectedSourceIds = form.sourceId
      ? [form.sourceId]
      : sources[0]
        ? [String(sources[0].id)]
        : [];

    setSubmittingQuestion(true);
    try {
      const headers = await authHeaders();
      const res = await fetch(resolveApiUrl('/api/question-bank/questions'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({
          examTrackId: selectedTrackId,
          topic: form.specialty.trim(),
          difficulty: form.difficulty,
          stem: form.question.trim(),
          options: [
            { id: 'a', text: form.a.trim() },
            { id: 'b', text: form.b.trim() },
            { id: 'c', text: form.c.trim() },
            { id: 'd', text: form.d.trim() },
          ],
          correctOptionId,
          explanationBasic: form.explanation.trim(),
          explanationAdvanced: (form.explanationAdvanced || form.explanation).trim(),
          sourceIds: selectedSourceIds,
        }),
      });
      const data = await safeJson<Record<string, unknown>>(res).catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'تعذر حفظ السؤال في قاعدة البيانات.');
      }

      const createdId = String(data?.id ?? data?.question?.id ?? 'db-' + Date.now());
      const trackVal: 'internship' | 'specialty' =
        form.track === 'specialty' ? 'specialty' : 'internship';

      setItems((prev) => [
        {
          id: createdId,
          track: trackVal,
          specialty: form.specialty.trim(),
          difficulty: form.difficulty as Question['difficulty'],
          question: form.question.trim(),
          options: [form.a.trim(), form.b.trim(), form.c.trim(), form.d.trim()],
          answer: answerIndex,
          explanation: form.explanation.trim(),
        },
        ...prev,
      ]);

      setForm((prev) => ({
        ...prev,
        specialty: '',
        difficulty: 'Basic',
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer: '0',
        explanation: '',
        explanationAdvanced: '',
      }));
      setBannerSuccess('تم حفظ السؤال في قاعدة البيانات بنجاح.');
      setPage('questions');
    } catch (err) {
      setBannerError(
        err instanceof Error ? err.message : 'حدث خطأ أثناء حفظ السؤال.'
      );
    } finally {
      setSubmittingQuestion(false);
    }
  };

  const addTrack = async () => {
    setBannerError(null);
    setBannerSuccess(null);
    if (!trackForm.nameArabic.trim() || !trackForm.name.trim()) {
      setBannerError('يرجى إدخال اسم المسار بالعربية والإنجليزية.');
      return;
    }
    setSubmittingTrack(true);
    try {
      const headers = await authHeaders();
      const res = await fetch(resolveApiUrl('/api/question-bank/exam-tracks'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({
          id: trackForm.id.trim() || undefined,
          name: trackForm.name.trim(),
          nameArabic: trackForm.nameArabic.trim(),
        }),
      });
      const data = await safeJson<Record<string, unknown>>(res).catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'تعذر إضافة المسار الجديد.');
      }
      setTracks((prev) => [...prev, data as ExamTrackRow]);
      setTrackForm({ id: '', name: '', nameArabic: '' });
      setBannerSuccess('تمت إضافة المسار الجديد بنجاح.');
    } catch (err) {
      setBannerError(err instanceof Error ? err.message : 'حدث خطأ أثناء إضافة المسار.');
    } finally {
      setSubmittingTrack(false);
    }
  };

  const nav = [
    { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
    { id: 'questions', label: 'إدارة الأسئلة', icon: BookOpen },
    { id: 'add', label: 'إضافة سؤال', icon: Plus },
    { id: 'requests', label: 'طلبات الأطباء', icon: Users },
    { id: 'tracks', label: 'إضافة مسارات', icon: ClipboardList },
  ] as const;

  const field = (
    label: string,
    key: keyof typeof form,
    placeholder: string,
    area = false
  ) => (
    <label className="admin-field">
      <span>{label}</span>
      {area ? (
        <textarea
          value={form[key]}
          onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
          placeholder={placeholder}
        />
      ) : (
        <input
          value={form[key]}
          onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
          placeholder={placeholder}
        />
      )}
    </label>
  );

  return (
    <div className="admin-shell" dir="rtl">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-logo">
            <Stethoscope size={22} />
          </div>
          <div>
            <strong>MedQuest</strong>
            <small>ADMINISTRATION</small>
          </div>
        </div>
        <div className="admin-caption">إدارة المنصة</div>
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={'admin-nav ' + (page === item.id ? 'active' : '')}
              onClick={() => setPage(item.id)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
              {item.id === 'requests' && pendingCount > 0 && (
                <small style={{ marginRight: 'auto' }}>({pendingCount})</small>
              )}
            </button>
          );
        })}
        <div className="admin-sidebar-bottom">
          <ShieldCheck size={17} />
          <span>
            مساحة المشرف
            <br />
            <small>مرتبط بقاعدة البيانات</small>
          </span>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <div className="admin-eyebrow">MEDQUEST ARABIC / ADMIN</div>
            <h1>
              {page === 'overview'
                ? 'لوحة التحكم'
                : page === 'questions'
                  ? 'إدارة بنك الأسئلة'
                  : page === 'add'
                    ? 'إضافة سؤال جديد'
                    : 'طلبات اعتماد الأطباء'}
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              type="button"
              className="admin-secondary"
              disabled={loadingData}
              onClick={() => void loadAdminData()}
            >
              <RefreshCw size={15} /> {loadingData ? 'تحديث...' : 'تحديث'}
            </button>
            <div className="admin-avatar">A</div>
          </div>
        <button type="button" className="btn-secondary" onClick={()=>{if(confirm("تأكيد تسجيل الخروج؟"))location.reload();}}>تسجيل الخروج</button></header>

        {bannerError && (
          <div className="admin-notice">
            <XCircle size={17} /> {bannerError}
          </div>
        )}
        {bannerSuccess && (
          <div className="admin-notice">
            <CheckCircle2 size={17} /> {bannerSuccess}
          </div>
        )}

        {page === 'overview' && (
          <>
            <section className="admin-welcome">
              <div>
                <span>مرحباً بك في لوحة الإدارة</span>
                <h2>إدارة المحتوى وطلبات الاعتماد</h2>
                <p>تابع الأسئلة والطلبات المسجلة في قاعدة البيانات مباشرة.</p>
              </div>
              <ShieldCheck size={42} />
            </section>
            <div className="admin-stats">
              <div className="admin-stat">
                <BookOpen />
                <span>إجمالي الأسئلة</span>
                <strong>{items.length}</strong>
              </div>
              <div className="admin-stat">
                <ClipboardList />
                <span>مسار الامتياز</span>
                <strong>{items.filter((q) => q.track === 'internship').length}</strong>
              </div>
              <div className="admin-stat">
                <Activity />
                <span>التصنيفي الفلسطيني (الجراحي واللاجراحي)</span>
                <strong>{items.filter((q) => q.track === 'specialty').length}</strong>
              </div>
              <div className="admin-stat">
                <Users />
                <span>طلبات معلقة</span>
                <strong>{pendingCount}</strong>
                <small>من أصل {requests.length} طلب</small>
              </div>
            </div>
            <section className="admin-panel">
              <div className="admin-panel-head">
                <div>
                  <h3>إجراءات سريعة</h3>
                  <p>اختر المهمة التي تريد تنفيذها</p>
                </div>
              </div>
              <div className="admin-actions">
                <button onClick={() => setPage('requests')}>
                  <Users />
                  <strong>مراجعة طلبات الأطباء</strong>
                  <span>اعتماد أو رفض حسابات الأطباء ({pendingCount} معلق)</span>
                </button>
                <button onClick={() => setPage('add')}>
                  <Plus />
                  <strong>إضافة سؤال</strong>
                  <span>أضف سؤالًا جديدًا وحفظه في قاعدة البيانات</span>
                </button>
                <button onClick={() => setPage('questions')}>
                  <BookOpen />
                  <strong>مراجعة الأسئلة</strong>
                  <span>استعرض الأسئلة الموجودة</span>
                </button>
              </div>
            </section>
          </>
        )}

        {page === 'requests' && (
          <section className="admin-panel">
            <div className="admin-panel-head">
              <div>
                <h3>طلبات اعتماد الأطباء</h3>
                <p>مراجعة طلبات الوصول واعتمادها أو رفضها مع ملاحظة</p>
              </div>
            </div>
            <div className="admin-question-list">
              {requests.map((reqItem) => (
                <article className="admin-question" key={reqItem.id}>
                  <div className="admin-question-meta">
                    <span>{reqItem.fullName || 'طبيب'}</span>
                    <span>{reqItem.email}</span>
                    <span>
                      {reqItem.status === 'approved'
                        ? 'معتمد'
                        : reqItem.status === 'rejected'
                          ? 'مرفوض'
                          : 'قيد المراجعة'}
                    </span>
                  </div>
                  {reqItem.reviewNote && (
                    <p>ملاحظة سابقة: {reqItem.reviewNote}</p>
                  )}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                    <input
                      value={reviewNotes[reqItem.id] ?? ''}
                      onChange={(e) =>
                        setReviewNotes((prev) => ({ ...prev, [reqItem.id]: e.target.value }))
                      }
                      placeholder="ملاحظة للمراجعة (اختياري)..."
                      style={{ flex: 1, minWidth: '200px' }}
                    />
                    <button
                      type="button"
                      className="admin-primary"
                      disabled={reviewingId === reqItem.id}
                      onClick={() => void handleReviewRequest(reqItem.id, 'approved')}
                    >
                      <CheckCircle2 size={15} /> اعتماد
                    </button>
                    <button
                      type="button"
                      className="admin-secondary"
                      disabled={reviewingId === reqItem.id}
                      onClick={() => void handleReviewRequest(reqItem.id, 'rejected')}
                    >
                      <XCircle size={15} /> رفض
                    </button>
                  </div>
                </article>
              ))}
              {requests.length === 0 && (
                <p className="admin-empty">لا توجد طلبات اعتماد مسجلة حالياً.</p>
              )}
            </div>
          </section>
        )}

        {page === 'tracks' && (
          <section className="admin-panel">
            <div className="admin-panel-head">
              <div>
                <h3>إدارة وإضافة المسارات</h3>
                <p>أضف مسار امتحان جديد واستعرض المسارات الحالية ({tracks.length})</p>
              </div>
            </div>
            <div className="admin-form" style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
              <label className="admin-field">
                <span>اسم المسار بالعربية *</span>
                <input
                  value={trackForm.nameArabic}
                  onChange={(e) => setTrackForm((p) => ({ ...p, nameArabic: e.target.value }))}
                  placeholder="مثال: الباطنة العامة"
                />
              </label>
              <label className="admin-field">
                <span>اسم المسار بالإنجليزية *</span>
                <input
                  value={trackForm.name}
                  onChange={(e) => setTrackForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Example: Internal Medicine"
                />
              </label>
              <label className="admin-field">
                <span>معرّف المسار (اختياري - يُولّد تلقائياً)</span>
                <input
                  value={trackForm.id}
                  onChange={(e) => setTrackForm((p) => ({ ...p, id: e.target.value }))}
                  placeholder="example: internal-medicine"
                />
              </label>
              <button
                type="button"
                className="admin-primary"
                disabled={submittingTrack}
                onClick={() => void addTrack()}
              >
                {submittingTrack ? 'جاري الحفظ...' : 'إضافة المسار'}
              </button>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {tracks.map((t) => (
                <article key={String(t.id)} className="admin-card" style={{ padding: '12px' }}>
                  <strong>{t.nameArabic || t.name || String(t.id)}</strong>
                  <div style={{ fontSize: '12px', opacity: 0.75 }}>
                    {t.name || '-'} • ID: {String(t.id)}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'questions' && (
          <section className="admin-panel">
            <div className="admin-panel-head">
              <div>
                <h3>بنك الأسئلة</h3>
                <p>استعراض الأسئلة حسب المسار والبحث عنها</p>
              </div>
              <button className="admin-primary" onClick={() => setPage('add')}>
                <Plus size={16} /> إضافة سؤال
              </button>
            </div>
            <div className="admin-filters">
              <label className="admin-search">
                <Search size={17} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ابحث في الأسئلة أو التخصص..."
                />
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value as typeof track)}
              >
                <option value="all">كل المسارات</option>
                <option value="internship">الامتياز الفلسطيني</option>
                <option value="specialty">التصنيفي الفلسطيني (الجراحي واللاجراحي)</option>
              </select>
            </div>
            <div className="admin-question-list">
              {filtered.map((q, i) => (
                <article className="admin-question" key={q.id}>
                  <div className="admin-question-meta">
                    <span>{q.track === 'internship' ? 'الامتياز' : 'التصنيفي الفلسطيني (الجراحي واللاجراحي)'}</span>
                    <span>{q.specialty}</span>
                    <span>{q.difficulty}</span>
                  </div>
                  <p>
                    {i + 1}. {q.question}
                  </p>
                  <small>
                    {q.options.length} خيارات · الإجابة الصحيحة:{' '}
                    {['A', 'B', 'C', 'D'][q.answer] ?? 'A'}
                  </small>
                </article>
              ))}
              {filtered.length === 0 && (
                <p className="admin-empty">لا توجد نتائج مطابقة للبحث.</p>
              )}
            </div>
          </section>
        )}

        {page === 'add' && (
          <section className="admin-panel">
            <div className="admin-panel-head">
              <div>
                <h3>إضافة سؤال إلى بنك الأسئلة</h3>
                <p>أدخل السؤال والخيارات والتفسير السريري لحفظه في قاعدة البيانات</p>
              </div>
            </div>
            <div className="admin-form">
              <label className="admin-field">
                <span>المسار</span>
                <select
                  value={form.track}
                  onChange={(e) => setForm((p) => ({ ...p, track: e.target.value }))}
                >
                  <option value="internship">امتحان الامتياز الفلسطيني</option>
                  <option value="specialty">التصنيفي الفلسطيني (الجراحي واللاجراحي)</option>
                </select>
              </label>
              {tracks.length > 0 && (
                <label className="admin-field">
                  <span>مسار الامتحان المعتمد (DB)</span>
                  <select
                    value={form.examTrackId}
                    onChange={(e) => setForm((p) => ({ ...p, examTrackId: e.target.value }))}
                  >
                    {tracks.map((t) => (
                      <option key={String(t.id)} value={String(t.id)}>
                        {t.name || t.slug || String(t.id)}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {sources.length > 0 && (
                <label className="admin-field">
                  <span>المصدر المرجعي (DB)</span>
                  <select
                    value={form.sourceId}
                    onChange={(e) => setForm((p) => ({ ...p, sourceId: e.target.value }))}
                  >
                    {sources.map((s) => (
                      <option key={String(s.id)} value={String(s.id)}>
                        {s.title || s.name || String(s.id)}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {field('التخصص / الموضوع', 'specialty', 'مثال: Internal Medicine')}
              <label className="admin-field">
                <span>المستوى</span>
                <select
                  value={form.difficulty}
                  onChange={(e) => setForm((p) => ({ ...p, difficulty: e.target.value }))}
                >
                  <option value="Basic">Basic - أساسي</option>
                  <option value="Intermediate">Intermediate - متوسط</option>
                  <option value="Advanced">Advanced - متقدم</option>
                </select>
              </label>
              {field('نص السؤال', 'question', 'اكتب نص السؤال السريري...', true)}
              {field('الخيار A', 'a', 'الخيار الأول')}
              {field('الخيار B', 'b', 'الخيار الثاني')}
              {field('الخيار C', 'c', 'الخيار الثالث')}
              {field('الخيار D', 'd', 'الخيار الرابع')}
              <label className="admin-field">
                <span>الإجابة الصحيحة</span>
                <select
                  value={form.answer}
                  onChange={(e) => setForm((p) => ({ ...p, answer: e.target.value }))}
                >
                  <option value="0">A</option>
                  <option value="1">B</option>
                  <option value="2">C</option>
                  <option value="3">D</option>
                </select>
              </label>
              {field('التفسير الأساسي', 'explanation', 'اشرح سبب صحة الإجابة...', true)}
              {field(
                'التفسير المتقدم (اختياري)',
                'explanationAdvanced',
                'تفصيل سريري أو مرجعي إضافي...',
                true
              )}
            </div>
            <div className="admin-form-footer">
              <button
                className="admin-primary"
                disabled={submittingQuestion}
                onClick={() => void addQuestion()}
              >
                <CheckCircle2 size={17} />{' '}
                {submittingQuestion ? 'جاري الحفظ...' : 'إضافة السؤال'}
              </button>
              <button className="admin-secondary" onClick={() => setPage('questions')}>
                إلغاء
              </button>
            </div>
          </section>
        )}
        <footer className="admin-footer">MedQuest Arabic · Admin Workspace</footer>
      </main>
    </div>
  );
}
