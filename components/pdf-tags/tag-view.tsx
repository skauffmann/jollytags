import ReactPDF, { Font, Text, View } from '@react-pdf/renderer';

Font.register({ family: 'Arial', fonts: [] });

const getTextFontSize = (text: string) => {
  if (text.length < 16) {
    return '18px';
  }

  if (text.length < 20) {
    return '16px';
  }

  if (text.length < 22) {
    return '14px';
  }

  return '12px';
};

interface TagViewProps {
  styles: ReactPDF.Styles;
  text: string;
}

export const TagView = ({ styles, text }: TagViewProps) => {
  const textLines = text?.split('\n') ?? [];
  return (
    <View style={styles.view}>
      {textLines.map((textLine, index) => (
        <Text key={index} style={{ fontSize: getTextFontSize(textLine) }}>
          {textLine}
        </Text>
      ))}
    </View>
  );
};
