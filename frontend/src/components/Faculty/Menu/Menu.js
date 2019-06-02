import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

const SimpleMenu=(props)=> {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        variant="contained"
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
      >
        Options
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <Link to={`/takeattendance/${props.courseid}/${props.classid}`} className="noUnderline"><MenuItem onClick={handleClose}>Take Attendance</MenuItem></Link>
          <Link to={`/viewattendance/${props.courseid}/${props.classid}`} className="noUnderline"><MenuItem onClick={handleClose}>View Attendance</MenuItem></Link>
          <Link to={`/updateattendance/${props.courseid}/${props.classid}`} className="noUnderline"><MenuItem onClick={handleClose}>Update Attendance</MenuItem></Link>
      </Menu>
    </div>
  );
}

export default SimpleMenu;