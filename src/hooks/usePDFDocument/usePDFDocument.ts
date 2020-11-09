import { useState, useEffect } from 'react';

import { getDocumentPages } from './getDocumentPages';

interface Props {
  url: string;
}

export const usePDFDocument = ({ url }: Props) => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    const getPages = async () => {
      const canvases = await getDocumentPages({
        url,
      });

      setPages(canvases);
    };
    getPages();
  }, [url]);

  return {
    pages,
  };
};
