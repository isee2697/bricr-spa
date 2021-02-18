import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { MergeDataStepProps } from '../MergeCrmRelation.types';
import { RelationCard } from '../relationCard/RelationCard';

export const SelectRelationsStep = ({ onNext, objects, onUpdate }: MergeDataStepProps) => {
  const { formatMessage } = useLocale();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelected = (id: string) => {
    if (selected.indexOf(id) === -1) {
      selected.push(id);
    } else {
      selected.splice(selected.indexOf(id), 1);
    }

    setSelected([...selected]);
  };

  return (
    <>
      <Grid container justify="space-between">
        <Grid />
        <Grid>
          <SubmitButton
            disabled={!selected.length}
            size="large"
            color="primary"
            variant="contained"
            onClick={() => {
              onUpdate({
                crm: objects.crm,
                matches: objects.matches.filter(item => selected.indexOf(item.id) !== -1),
              });
              onNext();
            }}
          >
            {formatMessage({ id: 'crm.merge_relation.goto.step_2' })}
          </SubmitButton>
        </Grid>
      </Grid>
      <Box mt={3.5} width="100%">
        {objects.matches.map(item => (
          <Box key={item.id} mb={2} width="100%">
            <RelationCard
              crm={item}
              compare={objects.crm}
              title={formatMessage({ id: 'crm.merge_relation.possible_relation.title' })}
              onCheck={() => toggleSelected(item.id)}
              isChecked={selected.indexOf(item.id) !== -1}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
