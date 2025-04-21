// Supabase 클라이언트 직접 초기화
const SUPABASE_URL = "https://dfomeijvzayyszisqflo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmb21laWp2emF5eXN6aXNxZmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NjYwNDIsImV4cCI6MjA2MDQ0MjA0Mn0.-r1iL04wvPNdBeIvgxqXLF2rWqIUX5Ot-qGQRdYo_qk";

let supabaseClient;

// Supabase 클라이언트 초기화 함수
function initSupabase() {
    if (!supabaseClient) {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
    return supabaseClient;
}

window.supabase = initSupabase();

// 특정 날짜의 스케줄 데이터를 가져오는 함수 (code.gs의 getScheduleData 대체)
async function getScheduleData(dateStr) {
  try {
    console.log("요청된 날짜:", dateStr);
    
    // index.html에서 이미 초기화된 클라이언트 사용
    const client = supabaseClient;
    
    if (!client) {
      throw new Error("Supabase 클라이언트가 초기화되지 않았습니다.");
    }
    
    // dateStr과 일치하는 데이터만 조회
    const { data, error } = await client
      .from('activities_choice')
      .select('*')
      .eq('날짜', dateStr);
    
    if (error) {
      console.error("오류 발생:", error);
      return [];
    }
    
    console.log("필터링된 데이터 개수:", data.length);
    return data;
  } catch (error) {
    console.error("오류 발생:", error);
    return [];
  }
}

// 모든 수업 데이터 가져오기 (code.gs의 getClassAll_gs 대체)
async function getClassAll() {
  try {
    const client = supabaseClient;
    
    if (!client) {
      throw new Error("Supabase 클라이언트가 초기화되지 않았습니다.");
    }
    
    const { data, error } = await client
      .from('activities_choice')
      .select('*');
    
    if (error) {
      console.error("오류 발생:", error);
      return [];
    }
    
    return data;
  } catch (error) {
    console.error("오류 발생:", error);
    return [];
  }
}
