export type DmsDetailsSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  showImages?: boolean;
  showAttachments?: boolean;
};

export enum EditorBlocksGeneral {
  Header = 'Header',
  Footer = 'Footer',
  PageBreak = 'PageBreak',
  Cover = 'Cover',
}

export enum EditorBlocksMedia {
  Image = 'Image',
  Video = 'Video',
}

export enum EditorBlocksFormatting {
  Heading = 'Heading',
  Text = 'Text',
  Table = 'Table',
  PriceTable = 'PriceTable',
}

export enum EditorFields {
  TextField = 'TextField',
  Signature = 'Signature',
  Initials = 'Initials',
  Date = 'Date',
  Checkbox = 'Checkbox',
  Dropdown = 'Dropdown',
  Masked = 'Masked',
  Upload = 'Upload',
}

export enum EditorTokensCrm {
  Company = 'Company',
  Address = 'Address',
  Name = 'Name',
  Email = 'Email',
}
