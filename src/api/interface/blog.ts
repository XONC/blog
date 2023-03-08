export interface SaveOrUpdateBlogPayload {
  id?: number;
  contextHtml: string;
  tagIds: string | null;
  title: string;
  context: string;
  picture: string;
}

export type Blog = {
  id: number;
  updateDateTime: null | string;
  createdDateTime: null | string;
  tags: Tag[];
} & Omit<SaveOrUpdateBlogPayload, 'id'>;

export interface Tag {
  id: number;
  name: string;
  crtId: string;
  crtNm: string;
  crtDt: string;
}
