import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function MyAccordian({ toggleDrawer }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Status
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Grade</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Cluster
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>SubCluster</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Dates</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="date1" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="date2" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="date3" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="date4" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="date5" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}