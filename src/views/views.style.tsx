export const useViewStyle = {
  container: {
    mx: "100px",
    my: "50px",
  },
  memeBox: {
    display: "flex",
    justifyContent: "space-between",
    columnGap: "30px",
  },
  imgDefault: {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  popularItem: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    cursor: "pointer",
  },
  upLoadImgLabel: {
    height: "40px",
    display: "flex",
    mt: "10px",
  },
  uploadImgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    px: "15px",
    borderRadius: "50px",
    bgcolor: "#C0C0C0",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    cursor: "pointer",
  },
  textBox: {
    my: "15px",
    "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "50px",
      minHeight: "40px",
      maxHeight: "40px",
    },
  },
  colorTxtBox: {
    bgcolor: "#C0C0C0",
    display: "flex",
    columnGap: "5px",
    p: "3px 7px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  colorTxt: {
    height: "25px",
    width: "25px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  menuCon: {
    width: "500px",
    px: "15px",
    py: "20px",
    height: "100%",
  },
  firstMenuLabelBox: {
    display: "flex",
    alignItems: "center",
    "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "50px",
      minHeight: "35px",
      maxHeight: "35px",
    },
  },
  textAlignButtonGroup: {
    borderRadius: "50px",
    "& button": {
      minHeight: "33px",
      maxHeight: "33px",
      px: "15px",
    },
    "& button:first-of-type": {
      borderRadius: "20px 0 0 20px",
    },
    "& button:last-of-type": {
      borderRadius: "0 20px 20px 0",
    },
  },
  textTransformButtonGroup: {
    borderRadius: "50px",
    "& button": {
      minHeight: "33px",
      maxHeight: "33px",
      px: "13px",
    },
    "& button:first-of-type": {
      borderRadius: "20px 0 0 20px",
    },
    "& button:last-of-type": {
      borderRadius: "0 20px 20px 0",
    },
  },
  addTextBox: {
    display: "flex",
    justifyContent: "center",
    columnGap: 2,
    mt: "10px",
    "& button": { width: "200px", borderRadius: "50px" },
  },
  generateBox: {
    display: "flex",
    justifyContent: "space-between",
    mt: 5,
    "& button": {
      borderRadius: "50px",
    },
    "& button:first-of-type": {
      width: "200px",
    },
    "& button:last-of-type": {
      width: "150px",
    },
  },
};
