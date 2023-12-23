import { Box } from "@mui/material";

function Rihtbar() {
  return (
    <Box
      bgcolor={"lightcoral"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default Rihtbar;
