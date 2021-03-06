import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';

import { InsideGeneral, PimInsideDocument, useUpdateInsideGeneralMutation } from 'api/types';
import { AutosaveForm } from 'ui/organisms';
import { dateToYear, yearToDate } from 'form/fields';

import { InsideGeneral as InsideGeneralFields } from './InsideGeneral';
import { InsideGeneralBody } from './InsideGeneral.types';

export const InsideGeneralContainer = ({
  extension,
  windows,
  renovation,
  notes,
  dateUpdated,
  lastEditedBy,
}: InsideGeneral) => {
  const { id: pimId } = useParams<{ id: string }>();
  const [updateInsideGeneral] = useUpdateInsideGeneralMutation();

  const handleSubmit = async (body: InsideGeneralBody) => {
    try {
      const { data: result } = await updateInsideGeneral({
        variables: {
          input: {
            pimId,
            windows: {
              ...body.windows,
            },
            notes: body.notes,
            extension: {
              notes: body.extension?.notes,
              yearOfExtension: dateToYear(body.extension?.yearOfExtension),
            },
            renovation: {
              notes: body.renovation?.notes,
              yearOfRenovation: dateToYear(body.renovation?.yearOfRenovation),
            },
          },
        },
        refetchQueries: [
          {
            query: PimInsideDocument,
            variables: {
              id: pimId,
            },
          },
        ],
      });

      if (!result) {
        throw new Error();
      }

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return (
    <AutosaveForm
      initialValues={{
        extension: {
          notes: extension?.notes,
          yearOfExtension: yearToDate(extension?.yearOfExtension),
        },
        renovation: {
          notes: renovation?.notes,
          yearOfRenovation: yearToDate(renovation?.yearOfRenovation),
        },
        windows,
        notes,
      }}
      onSave={handleSubmit}
      mutators={{ ...arrayMutators }}
      subscription={{}}
    >
      <InsideGeneralFields updatedBy={lastEditedBy} dateUpdated={dateUpdated} />
    </AutosaveForm>
  );
};
