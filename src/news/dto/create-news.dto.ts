export class CreateNewDto {
  title: string;
  description: string;
  link: string;
  content: string;
  image?: string;
  category?: string;
  author?: string;
  status: boolean;
  publishDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
