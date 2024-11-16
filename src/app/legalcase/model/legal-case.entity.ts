import {Documents} from "./documents.entity";

export class LegalCase {
  id: number;
  title: string;
  description: string;
  status: string;
  consultationId: number;
  documents: Documents[];

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.status = '';
    this.consultationId = 0;
    this.documents = [];
  }
}
