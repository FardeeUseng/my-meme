import { useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { FileUpload, Settings } from "@mui/icons-material";
import blackCat from "../assets/images/black-cat.jpg";
import cat from "../assets/images/cat.jpg";
import orangeCate from "../assets/images/orange-cat.jpg";
import whiskersCat from "../assets/images/whiskers-cat.jpg";

export default function View() {
  const [defaultImage, setDefaultImage] = useState(cat);
  return (
    <Box sx={{ mx: "100px", my: "50px" }}>
      <Box my="20px">
        <Typography variant="h5">Meme Generator</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "30px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            component="img"
            sx={{ height: "100%", objectFit: "cover", width: "100%" }}
            src={defaultImage}
            alt="default"
          />
          <Box
            sx={{
              mt: "15px",
              display: "flex",
              justifyContent: "center",
              "& button": {
                borderRadius: "50px",
                width: "200px",
              },
            }}
          >
            <Button variant="contained" color="success">
              DownLoad
            </Button>
          </Box>
        </Box>

        <Box sx={{ width: "100%", height: "100%" }}>
          <Box>
            <Box mb="15px">
              <Typography>Popular</Typography>
              <Box display="flex" mt="10px" columnGap={1}>
                {[cat, blackCat, orangeCate, whiskersCat].map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    onClick={() => setDefaultImage(img)}
                    sx={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    src={img}
                    alt="popular"
                  />
                ))}
              </Box>
            </Box>
            <Box>
              <Typography>Upload Image</Typography>
              <Box
                component="label"
                sx={{
                  height: "40px",
                  display: "flex",
                  mt: "10px",
                }}
              >
                <Box
                  display="flex"
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    px: "15px",
                    borderRadius: "50px",
                    bgcolor: "#C0C0C0",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    cursor: "pointer",
                  }}
                >
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
              my="15px"
              sx={{
                "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  minHeight: "40px",
                  maxHeight: "40px",
                },
              }}
            >
              <Typography>Text 1</Typography>
              <Box mt="10px">
                <TextField
                  placeholder="Text 1"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            bgcolor: "#C0C0C0",
                            display: "flex",
                            columnGap: "5px",
                            p: "3px 7px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          <Box
                            sx={{
                              height: "25px",
                              width: "25px",
                              borderRadius: "5px",
                              bgcolor: "#000",
                              cursor: "pointer",
                            }}
                          />
                          <Box
                            sx={{
                              height: "25px",
                              width: "25px",
                              borderRadius: "5px",
                              bgcolor: "#fff",
                            }}
                          />
                        </Box>
                        <IconButton>
                          <Settings />
                        </IconButton>
                      </Box>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box
              my="15px"
              sx={{
                "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  minHeight: "40px",
                  maxHeight: "40px",
                },
              }}
            >
              <Typography>Text 2</Typography>
              <Box mt="10px">
                <TextField
                  placeholder="Text 2"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            bgcolor: "#C0C0C0",
                            display: "flex",
                            columnGap: "5px",
                            p: "3px 7px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          <Box
                            sx={{
                              height: "25px",
                              width: "25px",
                              borderRadius: "5px",
                              bgcolor: "#000",
                              cursor: "pointer",
                            }}
                          />
                          <Box
                            sx={{
                              height: "25px",
                              width: "25px",
                              borderRadius: "5px",
                              bgcolor: "#fff",
                            }}
                          />
                        </Box>
                        <IconButton>
                          <Settings />
                        </IconButton>
                      </Box>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              mt={10}
              sx={{
                "& button": {
                  borderRadius: "50px",
                },
                "& button:first-of-type": {
                  width: "200px",
                },
                "& button:last-of-type": {
                  width: "150px",
                },
              }}
            >
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
