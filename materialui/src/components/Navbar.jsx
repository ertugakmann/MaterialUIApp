import styled from "@emotion/styled";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
function Navbar() {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "7px",
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }));
  return (
    <AppBar position="fixed">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          ERT DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: "30px",
              height: "30px",
              display: { xs: "none", sm: "block" },
            }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography variant="span">Ertug</Typography>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
}

export default Navbar;
