import { useState } from "react";
// mui and icon
import {
  Box,
  Grid,
  Menu,
  Button,
  Slider,
  TextField,
  IconButton,
  Typography,
  ButtonGroup,
} from "@mui/material";
import { FileUpload, Settings } from "@mui/icons-material";
// style
import { useViewStyle as classes } from "./views.style";
// image
import blackCat from "../assets/images/black-cat.jpg";
import cat from "../assets/images/cat.jpg";
import orangeCate from "../assets/images/orange-cat.jpg";
import whiskersCat from "../assets/images/whiskers-cat.jpg";

const initTextStyle = {
  color: "#000",
  fontSize: 16,
  textAlign: "left",
  textTransform: "capitalize",
  textSpacing: 0,
  textShadow: "",
  opacity: 1,
};

export default function View() {
  const [defaultImage, setDefaultImage] = useState(cat);
  const [textStyle, setTextStyle] = useState(initTextStyle);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [textLenght, setTextLenght] = useState(2);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function valuetext(value: number) {
    return `${value}PX`;
  }

  return (
    <Box sx={classes.container}>
      <Box my="20px">
        <Typography
          variant="h5"
          sx={{
            ...textStyle,
            fontSize: `${textStyle.fontSize}px`,
            letterSpacing: `${textStyle.textSpacing}px`,
          }}
        >
          Meme Generator
        </Typography>
      </Box>
      <Box sx={classes.memeBox}>
        <Box sx={{ width: "100%" }}>
          <Box
            component="img"
            sx={classes.imgDefault}
            src={defaultImage}
            alt="default"
          />
        </Box>

        <Box width="100%" height="100%">
          <Box>
            <Box mb="15px">
              <Typography>Popular</Typography>
              <Box display="flex" mt="10px" columnGap={1}>
                {[cat, blackCat, orangeCate, whiskersCat].map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    onClick={() => setDefaultImage(img)}
                    sx={classes.popularItem}
                    src={img}
                    alt="popular"
                  />
                ))}
              </Box>
            </Box>
            <Box>
              <Typography>Upload Image</Typography>
              <Box component="label" sx={classes.upLoadImgLabel}>
                <Box sx={classes.uploadImgBox}>
                  <Typography>Upload Image</Typography>
                  <FileUpload />
                </Box>
                <input
                  id="input-file"
                  type="file"
                  style={{ display: "none" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                maxHeight: "195px",
                overflowY: textLenght > 2 ? "scroll" : "",
                mt: "10px",
              }}
            >
              {[...Array(textLenght)].map((_, index) => (
                <Box key={index} sx={classes.textBox}>
                  <Typography>Text {index + 1}</Typography>
                  <Box mt="10px">
                    <TextField
                      placeholder={`Text ${index + 1}`}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <Box display="flex" alignItems="center">
                            <Box sx={classes.colorTxtBox}>
                              {["#000", "#fff"].map((color, index) => (
                                <Box
                                  key={index}
                                  bgcolor={color}
                                  sx={classes.colorTxt}
                                  onClick={() =>
                                    setTextStyle({ ...textStyle, color: color })
                                  }
                                />
                              ))}
                            </Box>
                            <Box>
                              <IconButton
                                id={`demo-positioned-button-${index}`}
                                aria-controls={
                                  open
                                    ? `demo-positioned-menu-${index}`
                                    : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                              >
                                <Settings />
                              </IconButton>
                              <Menu
                                id={`demo-positioned-menu-${index}`}
                                aria-labelledby={`demo-positioned-button-${index}`}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                  vertical: "top",
                                  horizontal: "right",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "right",
                                }}
                                sx={{ top: "20px" }}
                              >
                                <Grid container sx={classes.menuCon}>
                                  <Grid
                                    item
                                    xs={12}
                                    sx={classes.firstMenuLabelBox}
                                  >
                                    <Grid item xs={3.8}>
                                      <Typography mr={3}>1.Color</Typography>
                                    </Grid>
                                    <Grid item xs={8.2}>
                                      <TextField
                                        placeholder="#000000"
                                        defaultValue={textStyle.color}
                                        fullWidth
                                        onChange={(e) =>
                                          setTextStyle({
                                            ...textStyle,
                                            color: e.target.value,
                                          })
                                        }
                                      />
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    mt={2}
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <Grid item xs={3.8}>
                                      <Typography mr={3}>
                                        2.Font Size
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={8.2} px={1}>
                                      <Slider
                                        defaultValue={16}
                                        min={0}
                                        max={100}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                        sx={{ mt: "5px" }}
                                        onChange={(e: any) =>
                                          setTextStyle({
                                            ...textStyle,
                                            fontSize: e.target.value,
                                          })
                                        }
                                      />
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <Grid item xs={3.8}>
                                      <Typography mr={3}>3.Opacity</Typography>
                                    </Grid>
                                    <Grid item xs={8.2} px={1}>
                                      <Slider
                                        defaultValue={1.0}
                                        step={0.1}
                                        min={0.0}
                                        max={1.0}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                        sx={{ mt: "5px" }}
                                        onChange={(e: any) =>
                                          setTextStyle({
                                            ...textStyle,
                                            opacity: e.target.value,
                                          })
                                        }
                                      />
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    mt={2}
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <Grid item xs={3.8}>
                                      <Typography mr={3}>
                                        4.Text Align
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={8.2}>
                                      <ButtonGroup
                                        variant="contained"
                                        sx={classes.textAlignButtonGroup}
                                      >
                                        {["left", "center", "right"].map(
                                          (txt, index) => (
                                            <Button
                                              key={index}
                                              onClick={() =>
                                                setTextStyle({
                                                  ...textStyle,
                                                  textAlign: txt,
                                                })
                                              }
                                              color={
                                                textStyle.textAlign === txt
                                                  ? "primary"
                                                  : "secondary"
                                              }
                                            >
                                              <Typography textTransform="capitalize">
                                                {txt}
                                              </Typography>
                                            </Button>
                                          )
                                        )}
                                      </ButtonGroup>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    mt={2}
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <Grid item xs={3.8}>
                                      <Typography mr={3}>
                                        4.Text Transform
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={8.2}>
                                      <ButtonGroup
                                        variant="contained"
                                        sx={classes.textTransformButtonGroup}
                                      >
                                        {[
                                          "upperCase",
                                          "lowerCase",
                                          "capitalize",
                                        ].map((txt, index) => (
                                          <Button
                                            key={index}
                                            color={
                                              textStyle.textTransform === txt
                                                ? "primary"
                                                : "secondary"
                                            }
                                          >
                                            <Typography textTransform="capitalize">
                                              {txt}
                                            </Typography>
                                          </Button>
                                        ))}
                                      </ButtonGroup>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    mt={2}
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <Grid item xs={3.8}>
                                      <Typography mr={3}>
                                        5.Letter Spacing
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={8.2} px={1}>
                                      <Slider
                                        min={0}
                                        max={60}
                                        defaultValue={0}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                        sx={{ mt: "5px" }}
                                        getAriaLabel={() => "Temperature"}
                                        getAriaValueText={() => valuetext(5)}
                                        onChange={(e: any) =>
                                          setTextStyle({
                                            ...textStyle,
                                            textSpacing: e.target.value,
                                          })
                                        }
                                      />
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    mt={2}
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <Grid item xs={3.8}>
                                      <Typography mr={3}>
                                        6.Text Shadow
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={8.2} px={1}>
                                      <Slider
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                        sx={{ mt: "5px" }}
                                        getAriaLabel={() => "Temperature"}
                                        getAriaValueText={() => valuetext(5)}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Menu>
                            </Box>
                          </Box>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={classes.addTextBox}>
              <Button
                variant="contained"
                color="success"
                onClick={() => setTextLenght(textLenght + 1)}
              >
                <Typography sx={{ textTransform: "capitalize" }}>
                  Add Text {textLenght + 1}
                </Typography>
              </Button>
              {textLenght > 2 && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setTextLenght(textLenght - 1)}
                >
                  <Typography sx={{ textTransform: "capitalize" }}>
                    Remove Text {textLenght}
                  </Typography>
                </Button>
              )}
            </Box>
            <Box sx={classes.generateBox}>
              <Button variant="contained">Generate Meme</Button>
              <Button variant="outlined" color="warning">
                Reset
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
