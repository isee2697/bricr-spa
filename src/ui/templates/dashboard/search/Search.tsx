import React, { useState, useEffect } from 'react';

import { Search as BaseSearch } from 'ui/molecules';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { AdvancedSearchResult, CrmType, ProjectType, PropertyType, SalesLabel } from 'api/types';
import { useLocale } from 'hooks';
import { BuildingIcon, MailIcon, NoteIcon, UserIcon } from 'ui/atoms/icons';
import { Box, Loader } from 'ui/atoms';

import { FormattedAdvancedSearchResult, SearchProps } from './Search.types';
import { useStyles } from './Search.styles';

export const Search = ({ results, onSearch, loading }: SearchProps) => {
  const [hasFocus, setFocus] = useState(false);
  const setOverlay = useOverlayDispatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  useEffect(() => {
    setOverlay(hasFocus);
  }, [hasFocus, setOverlay]);

  const getFormattedResults = (result?: AdvancedSearchResult): FormattedAdvancedSearchResult[] => {
    const formattedResults: FormattedAdvancedSearchResult[] = [
      ...(result?.emails || []).map(email => ({
        title: email.email,
        type: formatMessage({ id: 'search.email' }),
        icon: (
          <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
            <MailIcon />
          </Box>
        ),
      })),
      ...(result?.users || []).map(user => ({
        title: `${user.firstName} ${user.lastName}`,
        type: formatMessage({ id: 'search.contact' }),
        icon: (
          <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
            <UserIcon />
          </Box>
        ),
      })),
      ...(result?.crms || [])
        .filter(crm => crm.type === CrmType.Relation)
        .map(crm => ({
          title: `${crm.firstName || ''} ${crm.insertion || ''} ${crm.lastName}`,
          type: formatMessage({ id: 'search.crm.relation' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <NoteIcon />
            </Box>
          ),
        })),
      ...(result?.crms || [])
        .filter(crm => crm.type === CrmType.Business)
        .map(crm => ({
          title: `${crm.firstName || ''} ${crm.insertion || ''} ${crm.lastName}`,
          type: formatMessage({ id: 'search.crm.business' }),
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
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.Commercial)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.commercial' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.Agricultural)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.agricultural' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.ParkingLot)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.parking_lot' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.pims || [])
        .filter(pim => pim.propertyType === PropertyType.BuildingPlot)
        .map(pim => ({
          title: `${pim.street || ''} ${pim.houseNumber || ''}, ${pim.city}`,
          type: formatMessage({ id: 'search.pim.building_plot' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.ncps || [])
        .filter(ncp => ncp.projectType === ProjectType.NewConstruction)
        .map(ncp => ({
          title: ncp.name || '',
          type: formatMessage({ id: 'search.ncp.new_construction' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.ncps || [])
        .filter(ncp => ncp.projectType === ProjectType.Relet)
        .map(ncp => ({
          title: ncp.name || '',
          type: formatMessage({ id: 'search.ncp.relet' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.ncps || [])
        .filter(ncp => ncp.projectType === ProjectType.Commercial)
        .map(ncp => ({
          title: ncp.name || '',
          type: formatMessage({ id: 'search.ncp.commercial' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <MailIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Acquisition)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.acquisition' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <BuildingIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Lead)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.lead' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <BuildingIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Order)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.order' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <BuildingIcon />
            </Box>
          ),
        })),
      ...(result?.sales || [])
        .filter(sales => sales.label === SalesLabel.Quotation)
        .map(sales => ({
          title: sales.extraInfo || '',
          type: formatMessage({ id: 'search.sales.quotation' }),
          icon: (
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.icon}>
              <BuildingIcon />
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
      onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
      options={getFormattedResults(results)}
      loading={loading}
      loadingText={<Loader />}
    />
  );
};
