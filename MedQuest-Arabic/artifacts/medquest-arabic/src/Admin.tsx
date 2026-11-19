import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '@clerk/react';
import {
  Activity, BookOpen, ClipboardList, LayoutDashboard,
  Plus, Search, ShieldCheck, Users, CheckCircle2,
  XCircle, RefreshCw, Stethoscope
} from 'lucide-react';

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
  const { getToken } = useAuth();
  const [page, setPage] = useState<'overview' | 'questions' | 'add' | 'requests'>('overview');
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
        const reqData = await reqRes.json();
        if (Array.isArray(reqData)) {
          setRequests(reqData as DoctorRequestItem[]);
        }
      }

      if (tRes.ok) {
        const tData = await tRes.json();
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
        const sData = await sRes.json();
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
        const qData = await qRes.json();
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
    try {
      const headers = await authHeaders();
      const res = await fetch(resolveApiUrl('/api/doctor-access/admin/requests/') + encodeURIComponent(id) + '/review', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({
          status: nextStatus,
          reviewNote: reviewNotes[id] ?? '',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'تعذر تحديث حالة الطلب.');
      }
      setRequests((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: nextStatus,
                reviewNote: data.reviewNote ?? reviewNotes[id] ?? null,
              }
            : item
        )
      );
      setBannerSuccess(
        nextStatus === 'approved' ? 'تم اعتماد حساب الطبيب بنجاح.' : 'تم رفض طلب الطبيب.'
      );
    } catch (err) {
      setBannerError(err instanceof Error ? err.message : 'تعذر مراجعة الطلب.');
    } finally {
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
      const data = await res.json().catch(() => ({}));
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

  const nav = [
    { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
    { id: 'questions', label: 'إدارة الأسئلة', icon: BookOpen },
    { id: 'add', label: 'إضافة سؤال', icon: Plus },
    { id: 'requests', label: 'طلبات الأطباء', icon: Users },
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
        </header>

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
                <span>دخول الاختصاص</span>
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
                <option value="specialty">دخول الاختصاص</option>
              </select>
            </div>
            <div className="admin-question-list">
              {filtered.map((q, i) => (
                <article className="admin-question" key={q.id}>
                  <div className="admin-question-meta">
                    <span>{q.track === 'internship' ? 'الامتياز' : 'دخول الاختصاص'}</span>
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
                  <option value="specialty">دخول الاختصاص</option>
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
