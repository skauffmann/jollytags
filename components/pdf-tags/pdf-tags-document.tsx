import React from 'react';
import ReactPDF, {
  Document,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer';
import { PageConfigurations } from '../../constants/page-configurations';
import { ITagConfiguration } from '../../types';
import { TagView } from './tag-view';

export const PDFTagsDocument = ({
  pageConfigurationId,
  tagsContent,
  offset,
}: ITagConfiguration) => {
  const pageConfiguration = PageConfigurations[pageConfigurationId];
  const styles = StyleSheet.create(pageConfiguration.styles as ReactPDF.Styles);

  console.log(tagsContent);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {Array.from({ length: pageConfiguration.rows }, (_, row) => (
          <View style={{ flexDirection: 'row' }} key={row}>
            {Array.from({ length: pageConfiguration.columns }, (_, column) => {
              const rowNumber = row * pageConfiguration.columns + column;
              const tagContent =
                rowNumber >= offset
                  ? tagsContent[rowNumber - offset]
                  : '' ?? '';
              return <TagView styles={styles} text={tagContent} key={column} />;
            })}
          </View>
        ))}
      </Page>
    </Document>
  );
};
