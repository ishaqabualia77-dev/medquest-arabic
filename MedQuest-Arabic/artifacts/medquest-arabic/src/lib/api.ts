
export type ExamTrack = {
  id: string;
  name: string;
  nameArabic: string;
};

const API_BASE = "/api";

async function apiRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getExamTracks(): Promise<ExamTrack[]> {
  return apiRequest<ExamTrack[]>("/exam-tracks");
}
