import React from 'react';

import { render, fireEvent } from 'tests';

import { ProfileItem } from './ProfileItem';

const profileData = {
  name: 'Christian van Gils',
  avatar: 'https://source.unsplash.com/featured/?building',
  phone: '12345678',
  email: 'christian@test.com',
  notes: 'This is Christian profile item',
  teamNames: ['Team 1', 'Team 2'],
  rights: ['Admin', 'Super'],
  functionDescription: 'Christian functionality',
  inActive: true,
  hideMenuButton: true,
};

describe('ProfileItem', () => {
  test('render correctly', () => {
    const onClick = jest.fn();

    const { getByText, container } = render(
      <ProfileItem
        name={profileData.name}
        avatar={profileData.avatar}
        phone={profileData.phone}
        email={profileData.email}
        notes={profileData.notes}
        teamNames={profileData.teamNames}
        rights={profileData.rights}
        functionDescription={profileData.functionDescription}
        inActive={profileData.inActive}
        hideMenuButton={profileData.hideMenuButton}
        onClick={onClick}
      />,
    );

    expect(getByText(profileData.name)).toBeInTheDocument();
    expect(getByText(profileData.phone)).toBeInTheDocument();
    expect(getByText(profileData.email)).toBeInTheDocument();
    expect(getByText(profileData.notes)).toBeInTheDocument();
    expect(container.querySelector('.MuiAvatar-img')).toHaveAttribute('src', profileData.avatar);
    profileData.teamNames.forEach(teamName => {
      expect(getByText(teamName)).toBeInTheDocument();
    });
    profileData.rights.forEach(right => {
      expect(getByText(right)).toBeInTheDocument();
    });
    expect(getByText(profileData.functionDescription)).toBeInTheDocument();

    expect(container.children[0]).toHaveStyle('filter: grayscale(1)');

    fireEvent.click(getByText(profileData.name));

    expect(onClick).toBeCalled();
  });
});
