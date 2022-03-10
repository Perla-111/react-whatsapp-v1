import './hoverIcons.css';

import CommentIcon from '@material-ui/icons/Comment';
import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const HoverIcons = () => {
    return (
        <div >
                                <div className="details">
                        <IconButton style={{height:"40px",width:"40px"}} >
                            <CreateIcon  />
                        </IconButton>
                        </div>
                    <div className="contacts">
                        <IconButton>
                            <CommentIcon style={{color:"white"}} />
                        </IconButton>
                       </div>
        </div>
    );
}
export default HoverIcons;