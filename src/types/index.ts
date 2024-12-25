export interface LeaderboardEntry {
  name: string;
  username: string;
  score: number;
}

export interface GifResponse {
  data: GifData[];
  pagination: Pagination;
  meta: Meta;
}

export interface Gif {
  id: string;
  url: string;
  title: string;
}

interface GifData {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

interface Meta {
  status: number;
  msg: string;
  response_id: string;
}
