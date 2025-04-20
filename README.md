# 스케줄 테이블 수파베이스 연동 프로젝트

이 프로젝트는 기존 Google Apps Script를 사용한 서버를 Supabase로 마이그레이션하는 프로젝트입니다.

## 기술 스택

- Supabase (백엔드 서버)
- HTML/CSS/JavaScript (프론트엔드)

## 테이블 구조

Supabase의 `activities_choice` 테이블은 다음과 같은 구조를 가집니다:

```
수업신청_id uuid primary key default uuid_generate_v4(),
계획_id text,
날짜 int4,
차수 text,
시작시간 text,
종료시간 text,
직원번호 text,
직원명 text,
활동명 text,
생활영역 text,
회원번호 text,
회원명 text,
생년월일 int4,
created_at timestamp with time zone default now()
```

## 설정 방법

1. `supabase.js` 파일 생성
2. Supabase 연결 정보 설정
3. 기존 Apps Script 함수를 Supabase 쿼리로 마이그레이션

## 사용 방법

index.html에서 스크립트를 포함하여 수파베이스 데이터를 조회하고 표시합니다.
