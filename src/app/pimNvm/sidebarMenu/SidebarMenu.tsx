import React, { useEffect, useRef, useState } from 'react';

import { useLocale } from 'hooks';
import {
  Button,
  Collapse,
  Box,
  Grid,
  SidebarHideButton,
  Slide,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  Checkbox,
} from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, BuildingIcon, CheckIcon } from 'ui/atoms/icons';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';
import { ConstructionTypes, DaysOnFunda, PropertyTypes, Status, Locations, TypesOfConstruction } from './dictionaries';

export const SidebarMenu = ({ onHide, isVisible }: SidebarMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { formatMessage } = useLocale();
  const [width, setWidth] = useState<number | string>('auto');
  const [toggledSections, setToggled] = useState<{ [key: string]: boolean }>({
    showPrice: true,
    showTypeOfProperty: true,
    showDaysOnFunda: true,
    showStatus: true,
    showUsageArea: true,
    showPlotArea: true,
    showAmountOfRooms: true,
    showAmountOfBedrooms: true,
    showOutdoorSpace: true,
    showConstructionPeriod: true,
    showLocation: true,
    showTypeOfConstruction: true,
    showGarage: true,
    showPresenceOf: true,
    showAccessbility: true,
    showEnergyLabel: true,
  });

  const classes = useStyles({
    width: ref?.current?.clientWidth ?? 'auto',
  });

  const handleWindowResize = () => {
    setWidth('auto');
  };

  window.addEventListener('resize', handleWindowResize);

  useEffect(() => {
    if (width !== ref?.current?.clientWidth) {
      setWidth(ref?.current?.clientWidth ?? 'auto');
    }

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [ref, width, setWidth]);

  return (
    <Slide unmountOnExit mountOnEnter in={isVisible} direction="right">
      <Grid ref={ref} item xs={12} sm={4} md={3} lg={2} className={classes.container}>
        <div className={classes.root}>
          <div className={classes.hideButton} onClick={onHide}>
            <SidebarHideButton />
          </div>
          <div className={classes.menuWrapper}>
            <div className={classes.banner}>
              <BuildingIcon />
              <Typography variant="h5">{formatMessage({ id: 'nvm.title' })}</Typography>
            </div>
            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showPrice: !current.showPrice }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showPrice ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.price` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group} mt={1}>
              <Collapse in={toggledSections.showPrice}>
                <TextField
                  variant="outlined"
                  name="priceFrom"
                  label={formatMessage({ id: 'nvm.price_from' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="priceTo"
                  label={formatMessage({ id: 'nvm.price_to' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showTypeOfProperty: !current.showTypeOfProperty }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showTypeOfProperty ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.type_of_property` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showTypeOfProperty}>
                {PropertyTypes.map(type => (
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" color="textSecondary">
                          {type.label}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          230
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showDaysOnFunda: !current.showDaysOnFunda }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showDaysOnFunda ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.days_on_funda` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showDaysOnFunda}>
                {DaysOnFunda.map(type => (
                  <FormControlLabel
                    className={classes.radio}
                    control={<Radio color="primary" />}
                    label={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" color="textSecondary">
                          {type.label}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          230
                        </Typography>
                      </Box>
                    }
                  />
                ))}
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="fundaDaysAmount"
                  label={formatMessage({ id: 'nvm.days_on_funda.since_amount_of_days' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showStatus: !current.showStatus }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showStatus ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.status` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showStatus}>
                {Status.map(type => (
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    className={classes.radio}
                    label={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" color="textSecondary">
                          {type.label}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          230
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showUsageArea: !current.showUsageArea }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showUsageArea ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.usage_area` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showUsageArea}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  className={classes.radio}
                  label={
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h4" color="textSecondary">
                        250 m2
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        230
                      </Typography>
                    </Box>
                  }
                />
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="surfaceAmount"
                  label={formatMessage({ id: 'nvm.usage_area.amount_of_surface' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showPlotArea: !current.showPlotArea }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showPlotArea ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.plot_area` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showPlotArea}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  className={classes.radio}
                  label={
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h4" color="textSecondary">
                        250 m2
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        230
                      </Typography>
                    </Box>
                  }
                />
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="surfaceAmount"
                  label={formatMessage({ id: 'nvm.plot_area.amount_of_surface' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showAmountOfRooms: !current.showAmountOfRooms }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showAmountOfRooms ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.rooms` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showAmountOfRooms}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  className={classes.radio}
                  label={
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h4" color="textSecondary">
                        250 m2
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        230
                      </Typography>
                    </Box>
                  }
                />
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="surfaceAmount"
                  label={formatMessage({ id: 'nvm.rooms.amount_of_rooms' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() =>
                setToggled(current => ({ ...current, showAmountOfBedrooms: !current.showAmountOfBedrooms }))
              }
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showAmountOfBedrooms ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.bedrooms` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showAmountOfBedrooms}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  className={classes.radio}
                  label={
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h4" color="textSecondary">
                        250 m2
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        230
                      </Typography>
                    </Box>
                  }
                />
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="surfaceAmount"
                  label={formatMessage({ id: 'nvm.bedrooms.amount_of_bedrooms' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showOutdoorSpace: !current.showOutdoorSpace }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showOutdoorSpace ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.outdoor_space` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showOutdoorSpace}>
                {ConstructionTypes.map(type => (
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    className={classes.radio}
                    label={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" color="textSecondary">
                          {formatMessage({ id: type.label })}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          230
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() =>
                setToggled(current => ({ ...current, showConstructionPeriod: !current.showConstructionPeriod }))
              }
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showConstructionPeriod ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.outdoor_space` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showConstructionPeriod}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  className={classes.radio}
                  label={
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h4" color="textSecondary">
                        2020 -
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        230
                      </Typography>
                    </Box>
                  }
                />
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="constructionPeriodFrom"
                  label={formatMessage({ id: 'common.from' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Box mt={1} />
                <TextField
                  variant="outlined"
                  name="constructionPeriodTo"
                  label={formatMessage({ id: 'common.to' })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showOutdoorSpace: !current.showOutdoorSpace }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showOutdoorSpace ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.outdoor_space` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showOutdoorSpace}>
                {ConstructionTypes.map(type => (
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    className={classes.radio}
                    label={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" color="textSecondary">
                          {formatMessage({ id: type.label })}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          230
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() => setToggled(current => ({ ...current, showLocation: !current.showLocation }))}
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showLocation ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.location` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showLocation}>
                {Locations.map(location => (
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    className={classes.radio}
                    label={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" color="textSecondary">
                          {formatMessage({ id: location.label })}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          230
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Collapse>
            </Box>

            <Button
              className={classes.showHideButton}
              onClick={() =>
                setToggled(current => ({ ...current, showTypeOfConstruction: !current.showTypeOfConstruction }))
              }
            >
              <Box display="flex" alignItems="center">
                {toggledSections.showTypeOfConstruction ? <ArrowUpIcon /> : <ArrowDownIcon />}
                <Typography variant="h4">{formatMessage({ id: `nvm.location` })}</Typography>
              </Box>
              <Box className={classes.checkIcon}>
                <CheckIcon color="inherit" />
              </Box>
            </Button>
            <Box className={classes.group}>
              <Collapse in={toggledSections.showTypeOfConstruction}>
                {TypesOfConstruction.map(type => (
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    className={classes.radio}
                    label={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4" color="textSecondary">
                          {formatMessage({ id: type.label })}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          230
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Collapse>
            </Box>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
