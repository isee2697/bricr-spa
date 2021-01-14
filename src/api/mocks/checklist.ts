import { DateTime } from 'luxon';

import { CheckList } from 'app/pimDetails/sections/documents/checklist/checklistItem/CheckList.types';
import {
  DocumentCondition,
  DocumentRequestStatus,
  DocumentType,
} from 'app/pimDetails/sections/summary/auditChecklist/documents/Documents.types';

export const CHECKLIST_ITEMS: CheckList[] = [
  {
    id: '0001',
    type: DocumentType.AnnualStatementLastYear,
    steps: [
      {
        status: 'rejected',
        step: DocumentRequestStatus.Request,
        date: DateTime.local(),
      },
      {
        status: 'rejected',
        step: DocumentRequestStatus.Uploaded,
        date: DateTime.local(),
      },
      {
        status: 'inactive',
        step: DocumentRequestStatus.Accepted,
        date: DateTime.local(),
      },
    ],
    condition: DocumentCondition.Mandatory,
    document: {
      name: 'choosing-a-pdf.pdf',
      url: 'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf',
    },
  },
  {
    id: '0002',
    type: DocumentType.AnnualStatementLastYear,
    steps: [
      {
        status: 'completed',
        step: DocumentRequestStatus.Request,
        date: DateTime.local(),
      },
      {
        status: 'rejected',
        step: DocumentRequestStatus.Uploaded,
        date: DateTime.local(),
      },
      {
        status: 'rejected',
        step: DocumentRequestStatus.Accepted,
        date: DateTime.local(),
      },
    ],
    condition: DocumentCondition.Mandatory,
    document: {
      name: 'choosing-a-pdf.pdf',
      url: 'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf',
    },
  },
  {
    id: '0003',
    type: DocumentType.AnnualStatementLastYear,
    steps: [
      {
        status: 'completed',
        step: DocumentRequestStatus.Request,
        date: DateTime.local(),
      },
      {
        status: 'completed',
        step: DocumentRequestStatus.Uploaded,
        date: DateTime.local(),
      },
      {
        status: 'completed',
        step: DocumentRequestStatus.Accepted,
        date: DateTime.local(),
      },
    ],
    condition: DocumentCondition.Mandatory,
    document: {
      name: 'choosing-a-pdf.pdf',
      url: 'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf',
    },
  },
];
