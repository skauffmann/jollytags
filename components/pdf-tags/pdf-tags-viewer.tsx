import { PDFViewer } from '@react-pdf/renderer';
import { ITagConfiguration } from '../../types';
import { PDFTagsDocument } from './pdf-tags-document';

export const PDFTagViewer = ({
  pageConfigurationId,
  offset,
  tagsContent,
}: ITagConfiguration) => (
  <PDFViewer width={500} height={800}>
    <PDFTagsDocument
      pageConfigurationId={pageConfigurationId}
      tagsContent={tagsContent}
      offset={offset}
    />
  </PDFViewer>
);
