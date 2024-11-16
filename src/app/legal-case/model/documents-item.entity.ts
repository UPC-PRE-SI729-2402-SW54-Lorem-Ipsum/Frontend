export class DocumentsItem {
  id: number;
  title: string;
  description: string;
  type: number;
  status: number;
  legalCaseId: number;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.type = 0;
    this.status = 0;
    this.legalCaseId = 0;
  }
}
