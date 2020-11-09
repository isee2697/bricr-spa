import pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  scale?: number;
  url: string;
}

export const getDocumentPages = async ({ url, scale = 1 }: Props) => {
  const pdf = await pdfjs.getDocument(url).promise;

  const { numPages } = pdf;

  const canvasURLs = [];

  // Now for every page in the document, we're going to add a page to the array
  for (let i = 0; i < numPages; i++) {
    const page = await pdf.getPage(i + 1);

    const viewport = page.getViewport({ scale });
    const { width, height } = viewport;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.className = 'page';
    const canvasContext = canvas.getContext('2d');

    if (canvasContext) {
      await page.render({
        canvasContext,
        viewport,
      }).promise;
    }

    canvasURLs.push(canvas.toDataURL());
  }

  return canvasURLs;
};
