import React, { useState, useEffect } from 'react';
import { Person } from '@material-ui/icons';

import { Search as BaseSearch } from 'ui/molecules';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { SearchResult, CrmType, ProjectType, PropertyType, SalesLabel, Entities } from 'api/types';
import { useLocale } from 'hooks';
import {
  AogIcon,
  BuildingIcon,
  CrmIcon,
  MailIcon,
  NcRentIcon,
  NcSaleIcon,
  NewConstructionIcon,
  NoteIcon,
  RoundBusinessCenterIcon,
  SaleIcon,
  UserIcon,
} from 'ui/atoms/icons';
import { Box, Loader } from 'ui/atoms';

import { FormattedAdvancedSearchResult, SearchProps } from './Search.types';
import { useStyles } from './Search.styles';

export const Search = ({ results, onSearch, loading, onClick }: SearchProps) => {
  const [hasFocus, setFocus] = useState(false);
  const setOverlay = useOverlayDispatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  useEffect(() => {
    setOverlay(hasFocus);
  }, [hasFocus, setOverlay]);

  const getFormattedResults = (result?: SearchResult): FormattedAdvancedSearchResult[] => {
    const formattedResults: FormattedAdvancedSearchResult[] = [
      ...(result?.emails || []).map(email => ({
        title: email.email,
        type: formatMessage({ id: 'search.email' }),
        onClick: () => onClick?.(Entities.Email, email.id),
        icon: (
          <Box
            onClick={() => onClick?.(Entities.Email, email.id)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.icon}
          >
            <MailIcon />
          </Box>
        ),
      })),
      ...(result?.users || []).map(user => ({
        title: `${user.firstName} ${user.lastName}`,
        type: formatMessage({ id: 'search.contact' }),
        onClick: () => onClick?.(Entities.Users, user.id),
        icon: (
          <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
            <UserIcon />
          </Box>
        ),
      })),
      ...(result?.crms || [])
        .filter(crm => crm.type === CrmType.Relation)
        .map(crm => ({
          title: `${crm.firstName || ''} ${crm.lastName}`,
          type: formatMessage({ id: 'search.crm.relation' }),
          onClick: () => onClick?.(Entities.Crm, crm.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <CrmIcon />
            </Box>
          ),
        })),
      ...(result?.crms || [])
        .filter(crm => crm.type === CrmType.Business)
        .map(crm => ({
          title: `${crm.firstName || ''} ${crm.lastName}`,
          type: formatMessage({ id: 'search.crm.business' }),
          onClick: () => onClick?.(Entities.Crm, crm.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <NoteIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.Apartment || pim.propertyType === PropertyType.House)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.residential' }),
          onClick: () => onClick?.(Entities.Pim, pim.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <BuildingIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.Commercial)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.commercial' }),
          onClick: () => onClick?.(Entities.Pim, pim.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <RoundBusinessCenterIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.Agricultural)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.agricultural' }),
          onClick: () => onClick?.(Entities.Pim, pim.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <AogIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.ParkingLot)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.parking_lot' }),
          onClick: () => onClick?.(Entities.Pim, pim.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <BuildingIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.BuildingPlot)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.building_plot' }),
          onClick: () => onClick?.(Entities.Pim, pim.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <BuildingIcon />
            </Box>
          ),
        })),
      ...(result?.ncps || [])
        .filter(ncp => ncp.projectType === ProjectType.NewConstruction)
        .map(ncp => ({
          title: ncp.name || '',
          type: formatMessage({ id: 'search.ncp.new_construction' }),
          onClick: () => onClick?.(Entities.Ncp, ncp.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <NewConstructionIcon />
            </Box>
          ),
        })),
      ...(result?.ncps || [])
        .filter(ncp => ncp.projectType === ProjectType.Relet)
        .map(ncp => ({
          title: ncp.name || '',
          type: formatMessage({ id: 'search.ncp.relet' }),
          onClick: () => onClick?.(Entities.Ncp, ncp.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <NcRentIcon />
            </Box>
          ),
        })),
      ...(result?.ncps || [])
        .filter(ncp => ncp.projectType === ProjectType.Commercial)
        .map(ncp => ({
          title: ncp.name || '',
          type: formatMessage({ id: 'search.ncp.commercial' }),
          onClick: () => onClick?.(Entities.Ncp, ncp.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <NcSaleIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Acquisition)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.acquisition' }),
          onClick: () => onClick?.(Entities.Sales, sales.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <SaleIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Lead)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.lead' }),
          onClick: () => onClick?.(Entities.Sales, sales.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <SaleIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Order)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.order' }),
          onClick: () => onClick?.(Entities.Sales, sales.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <SaleIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Quotation)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.quotation' }),
          onClick: () => onClick?.(Entities.Sales, sales.id),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <SaleIcon />
            </Box>
          ),
        })),
      ...(result?.teams || []).map(team => ({
        title: `${team.name}`,
        type: formatMessage({ id: 'search.pim.building_plot' }),
        onClick: () => onClick?.(Entities.Team, team.id),
        icon: (
          <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
            <Person />
          </Box>
        ),
      })),
    ];

    return formattedResults;
  };

  return (
    <BaseSearch
      hasFocus={hasFocus}
      setFocus={setFocus}
      onSearch={onSearch}
      options={getFormattedResults(results)}
      loading={loading}
      loadingText={<Loader />}
    />
  );
};
