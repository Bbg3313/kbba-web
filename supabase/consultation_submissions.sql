create extension if not exists pgcrypto;

create table if not exists public.consultation_submissions (
  id uuid primary key default gen_random_uuid(),
  submitted_at timestamptz not null default timezone('utc', now()),
  locale text not null check (locale in ('en', 'th')),
  full_name text,
  nickname text,
  facebook text,
  line_id text not null,
  email text not null,
  phone text not null,
  course text not null,
  course_label text not null,
  hear_about text,
  hear_about_label text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  admin_note text
);

create index if not exists consultation_submissions_submitted_at_idx
  on public.consultation_submissions (submitted_at desc);

create index if not exists consultation_submissions_status_idx
  on public.consultation_submissions (status);

alter table public.consultation_submissions enable row level security;
