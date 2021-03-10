Document viewer atom:

```jsx harmony
import { DocumentViewer } from "ui/atoms";

const wordDoc = 'https://bricr-ui-web.s3-eu-west-1.amazonaws.com/Test-word-doc.docx';
const pdfDoc = require('../../../assets/files/dummy-pdf.pdf');
const imageDoc = require('../../../assets/files/dummy-image.jpg'); 

const style = { width: "48%", maxHeight: 500, margin: '5px 1%', float: 'left' };
<div>
    <DocumentViewer documents={[{uri: imageDoc}]} style={style} />
    <DocumentViewer documents={[{uri: pdfDoc}]} style={style} config={{ header: { disableHeader: true } }} />
    <DocumentViewer documents={[{uri: wordDoc}]} style={style} config={{ header: { disableFileName: true } }} />
    <DocumentViewer documents={[{uri: imageDoc},{uri: pdfDoc}, {uri: wordDoc}]} style={style} />
</div>
```