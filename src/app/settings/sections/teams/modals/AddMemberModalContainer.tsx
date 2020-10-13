import React from 'react';
import { useParams } from 'react-router-dom';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { GetTeamDetailsDocument, Profile, TeamMember, useAddUserToTeamMutation, useGetUsersQuery } from 'api/types';
import { usePagination } from 'hooks';
import { AddMemberModal } from 'app/settings/sections/teams/modals/AddMemberModal';

export const AddMemberModalContainer = ({
  isOpened,
  onClose,
  teamMembers,
}: ModalContainerProps & { teamMembers: TeamMember[] }) => {
  const { id } = useParams<{ id: string }>();
  const [addTeamMember] = useAddUserToTeamMutation();
  const teamMemberIds = teamMembers.map(member => member.user.id);

  const { query: paginationQuery } = usePagination({
    itemsCount: 0,
    perPageOptions: ['All'],
  });

  const { data: listData } = useGetUsersQuery({
    variables: { ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  const searchMembers =
    listData?.getAllProfiles?.items?.filter((member: Profile) => !teamMemberIds.includes(member.id)) || [];

  const handleSave = async (data: { profileIds: string[] }) => {
    try {
      const response = await addTeamMember({
        variables: {
          input: {
            teamId: id,
            userId: data.profileIds[0],
            permissions: {
              createPermission: false,
              readPermission: true,
              updatePermission: false,
              deletePermission: false,
            },
          },
        },
        refetchQueries: [
          {
            query: GetTeamDetailsDocument,
            variables: { id },
          },
        ],
      });

      if (!response) {
        throw Error();
      }

      onClose();

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <AddMemberModal isOpened={isOpened} onClose={onClose} onSubmit={handleSave} userList={searchMembers} />;
};
