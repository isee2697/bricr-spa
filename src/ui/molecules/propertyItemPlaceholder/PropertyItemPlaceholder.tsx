import React from 'react';

import { Box, Placeholder } from 'ui/atoms';

export const PropertyItemPlaceholder = () => (
  <Box display="flex">
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex" mb={1}>
        <Box>
          <Placeholder width={176} height={112} marginRight={2} />
        </Box>
        <Box width="100%">
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Placeholder width={56} height={8} mb={1.5} />
              <Placeholder width={328} height={16} mb={0.5} />
              <Placeholder width={196} height={16} mb={2} />
            </Box>
          </Box>
          <Box display="flex" width="100%" justifyContent="space-between" mb={1}>
            <Placeholder width={56} height={8} />
            <Placeholder width={88} height={8} />
          </Box>
          <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
            <Box display="flex">
              <Placeholder width={80} height={16} marginRight={1} />
              <Placeholder width={80} height={16} />
            </Box>
            <Box display="flex">
              <Placeholder width={57} height={24} borderRadius={16} marginRight={1} />
              <Placeholder width={57} height={24} borderRadius={16} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Placeholder width={123} height={16} mb={0.5} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Placeholder width={86} height={12} />
          <Placeholder width={104} height={16} />
        </Box>
      </Box>
    </Box>
  </Box>
);
