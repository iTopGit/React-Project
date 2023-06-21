import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material'
import { IScoreRequest, deleteAppScore } from '../../api/scoreApi'
import ImageIcon from '@mui/icons-material/Image'
import DeleteIcon from '@mui/icons-material/Delete'
import { Menu, MenuItem, Button, Icon } from '@mui/material';
import { MouseEvent, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
interface ScoreListsProps {
    scoreLists: IScoreRequest[]
    onDeleteSuccess: (deleteScoreID: number) => void
}

function ScoreLists({ scoreLists, onDeleteSuccess }: ScoreListsProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [choice, setchoice] = useState<string>('old to new');

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (x: string) => {
        setchoice(x)
        setAnchorEl(null);
    };

    const onClickDelete = async (scoreID: number) => {
        try {
            await deleteAppScore(scoreID)
            onDeleteSuccess(scoreID)
        } catch (err) { }
    }

    let sortedScores = [...scoreLists];
    if (choice === 'high to low') {
        sortedScores.sort((a, b) => b.score - a.score);
    } else if (choice === 'low to high') {
        sortedScores.sort((a, b) => a.score - b.score);
    } else if (choice === 'new to old') {
        sortedScores.sort((a, b) => b.id - a.id);
    }

    return (
        <div>
            <Button
                sx={{ minWidth: 250 }}
                fullWidth
                variant="contained"
                endIcon={<Icon component={ArrowDropDownIcon} />}
                onClick={handleClick}
            >
                sort by {choice}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(choice)} // Pass the choice to handleClose
            >
                <MenuItem onClick={() => handleClose('old to new')}>old to new</MenuItem>
                <MenuItem onClick={() => handleClose('new to old')}>new to old</MenuItem>
                <MenuItem onClick={() => handleClose('high to low')}>high to low</MenuItem>
                <MenuItem onClick={() => handleClose('low to high')}>low to high</MenuItem>
            </Menu>
            <List dense>
                {sortedScores.map((score) => (
                    <ListItem
                        key={score.id}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => onClickDelete(score.id!)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={score.score + ' ' + score.name}
                            secondary={score.projectName}
                        />
                    </ListItem>
                ))}
            </List>
        </div>

    )
}

export default ScoreLists