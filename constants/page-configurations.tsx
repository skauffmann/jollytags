export interface PageConfiguration {
  name: string;
  styles: {
    page: {
      marginTop: string;
      marginLeft: string;
      flexDirection: string;
    };
    view: {
      flexDirection: string;
      justifyContent: string;
      textAlign: string;
      marginRight: string;
      padding: string;
      width: string;
      height: string;
      fontSize: string;
    };
  };
  columns: number;
  rows: number;
}

export type PageConfigurationName = keyof typeof PageConfigurations;

export const PageConfigurations: { [key: string]: PageConfiguration } = {
  '21-tag-63x38': {
    name: '21 (63,5 x 38,1 mm)',
    styles: {
      page: {
        marginTop: '16mm',
        marginLeft: '7mm',
        flexDirection: 'column',
      },
      view: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: '2mm',
        padding: '1mm',
        width: '64.5mm',
        height: '38.5mm',
        fontSize: '18px',
      },
    },
    columns: 3,
    rows: 7,
  },
};
