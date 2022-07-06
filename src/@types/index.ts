export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
  open_issues_count?: number;
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;
  homepage?: string;
  size?: number;
  watchers_count?: number;
  forks_count: number;
  open_issues?: number;
  issue_events_url?: string;
  license?: {
    name: string;
    url: string;
  };
}
