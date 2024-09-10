create index on run (created_at desc nulls last);
create index on run (created_at asc nulls last);
create index on run (duration desc nulls last);
create index on run (duration asc nulls last);
create index on run ((prompt_tokens + completion_tokens) desc nulls last);
create index on run ((prompt_tokens + completion_tokens) asc nulls last);
create index on run (cost desc nulls last);
create index on run (cost asc nulls last);
create index on external_user (created_at desc nulls last);
create index on external_user (created_at asc nulls last);
create index on external_user (last_seen desc nulls last);
create index on external_user (last_seen asc nulls last);