import React, { useState } from 'react';

import { ContentBlocks } from 'api/mocks/dms';

import { DmsContentBlocks } from './DmsContentBlocks';
import { DmsBlockItem } from './DmsContentBlocks.types';

export const DmsContentBlocksContainer = () => {
  const [blocks, setBlocks] = useState<DmsBlockItem[]>(ContentBlocks);

  const handleAddBlock = async () => {
    return undefined;
  };

  const handleUpdateBlock = async (block: DmsBlockItem) => {
    const index = blocks.findIndex(item => item.id === block.id);
    blocks[index] = block;
    setBlocks([...blocks]);
  };

  return <DmsContentBlocks contentBlocks={blocks} onAdd={handleAddBlock} onUpdate={handleUpdateBlock} />;
};
