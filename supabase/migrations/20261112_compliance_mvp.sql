-- Proposed Compliance MVP schema. Review before applying; not run on production.
create table if not exists public.compliance_checks (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references public.organisations(id),
  site_id uuid not null references public.sites(id),
  check_type text not null check (check_type in ('opening','closing','temperature','delivery','cleaning')),
  label text not null,
  status text not null default 'completed' check (status in ('completed','failed','needs_review')),
  measured_temperature_c numeric(6,2),
  equipment_name text,
  supplier_id uuid references public.suppliers(id),
  notes text,
  recorded_by uuid not null references auth.users(id),
  recorded_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint compliance_checks_temperature_required check (check_type <> 'temperature' or measured_temperature_c is not null)
);
create index if not exists compliance_checks_site_time on public.compliance_checks(site_id, recorded_at desc);
create index if not exists compliance_checks_org_time on public.compliance_checks(organisation_id, recorded_at desc);
alter table public.compliance_checks enable row level security;
create policy "Site members can read compliance checks" on public.compliance_checks for select to authenticated
using (exists (
  select 1 from public.site_memberships sm
  join public.sites st on st.id=sm.site_id
  where sm.site_id=compliance_checks.site_id and sm.user_id=(select auth.uid())
  and st.organisation_id=compliance_checks.organisation_id
) or exists (
  select 1 from public.organisation_members om
  where om.organisation_id=compliance_checks.organisation_id and om.user_id=(select auth.uid())
));
create policy "Site members can record compliance checks" on public.compliance_checks for insert to authenticated
with check (recorded_by=(select auth.uid()) and exists (
  select 1 from public.sites st
  where st.id=compliance_checks.site_id and st.organisation_id=compliance_checks.organisation_id
) and (
  exists (select 1 from public.site_memberships sm where sm.site_id=compliance_checks.site_id and sm.user_id=(select auth.uid()))
  or exists (select 1 from public.organisation_members om where om.organisation_id=compliance_checks.organisation_id and om.user_id=(select auth.uid()))
));
-- No UPDATE/DELETE policies: records are append-only from client roles.
-- Add corrective-action verification and immutable audit events in next migration.
