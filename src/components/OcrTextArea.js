import {
  Button,
  ButtonBase,
  Container,
  Grid,
  Paper,
  TextField,
  ImageList,
  ImageListItem,
  InputLabel,
  FormControl,
  NativeSelect,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx";
import React, { useState, useRef } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { ResponsiveContainer } from "recharts";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { createWorker } from "tesseract.js";
import axios from "axios";

let API_URL = "http://127.0.0.1:5000/";

export default function OcrTextArea() {
  const [url_link, seturllink] = useState("");
  const [ocrtext, setOcrtext] = useState("");
  const [option_selected, setOptionSelect] = useState("plain");
  var fReader = new FileReader();
  const imageRef=useRef();
  let url_img = "";
  let igo = null;

  async function gettext(text) {
    
    let response = await axios.post(API_URL, { file: text });
    setOcrtext(response.data.text);

    igo = "data:image/jpeg;base64,"+response.data.image
    imageRef.current.src = igo;

    

  }

  async function docx_download(){
    
    // let response = await axios.post(API_URL+"download", { text: ocrtext });
    // // console.log(response.data)
    // // const type = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'; // modify or get it from response
    // // const blob = new Blob([response.data], {type});
    // // const url = URL.createObjectURL(blob);

    // // // Step 3: Trigger downloading the object using that URL
    // // const a = document.createElement('a');
    // // a.href = url;
    // // a.download = "Urdu Text.docx";
    // // a.click();
    // // response.data.pipe(fs.createWriteStream("Urdu OCR.docx"))
    // var sampleArr = base64ToArrayBuffer(response.data);
    // saveByteArray("Urdu OCR.docx", sampleArr);


    const doc = new Document({
      sections: [
          {
              properties: {},
              children: [
                  new Paragraph({
                      alignment: AlignmentType.RIGHT,
                      children: [
                          
                          new TextRun({
                              
                            text: ocrtext,
                            font: "Urdu Typesetting",  
                            size: 50,

                          }),
                      ],
                  }),
              ],
          },
      ],
  });

  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    saveByteArray("Urdu Text.docx", blob);
});

  }


  function base64ToArrayBuffer(base64) {
    // var binaryString = window.atob(btoa(unescape(encodeURIComponent(base64))));
    // var binaryLen = binaryString.length;
    // var bytes = new Uint8Array(binaryLen);
    // for (var i = 0; i < binaryLen; i++) {
    //    var ascii = binaryString.charCodeAt(i);
    //    bytes[i] = ascii;
    // }
    var bytes =  new Uint8Array(base64);
    return bytes;
 }
 async function saveByteArray(reportName, blob) {
  // var blob = await new Blob([byte], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
};



  function change_to_text(){
    
    // console.log(fileInput.current.files)
   
    fReader.onloadend = function (event) {
      console.log(event.target.result)
      gettext(event.target.result)
    }
    
  }

  function load_file(){
    fReader.readAsDataURL(fileInput.current.files[0]);

  }




  function download_file_text(){
    console.log(option_selected)

    if (option_selected === "plain"){
      saveFile();
    }
    else{
      docx_download();
    }


  }

  function saveFile(){

    const type = 'application/text'; // modify or get it from response
    const blob = new Blob([ocrtext], {type});
    const url = URL.createObjectURL(blob);

    // Step 3: Trigger downloading the object using that URL
    const a = document.createElement('a');
    a.href = url;
    a.download = "Urdu Text.txt";
    a.click();
  }


  const fileInput = React.useRef();
  const worker = createWorker({});

  // async function quickstart(text) {

  //     const vision = require('@google-cloud/vision');

  //     const client = new vision.ImageAnnotatorClient();

  //     const request ={
  //         "requests": [
  //           {
  //             "image": {
  //               "source": {
  //                 "imageUri": text
  //               }
  //             },
  //             "features": [
  //               {
  //                 "type": "TEXT_DETECTION"
  //               }
  //             ],
  //             "imageContext": {
  //               "languageHints": ["en"]
  //             }
  //           }
  //         ]
  //       };
  //     const [result] = await client.textDetection(request);
  //     const detections = result.responses[0].textAnnotations;
  //     detections.forEach(texts => console.log(texts));

  //     }

  let urlChange = (event) => {
    // seturllink(event.target.files[0].value);

    seturllink(fileInput.current.files[0].name);
    // var fReader = new FileReader();
    // // console.log(fileInput.current.files)
    // fReader.readAsDataURL(fileInput.current.files[0]);
    // fReader.onloadend = function (event) {
    //   // var img = document.getElementById("yourImgTag");
    //   // img.src = event.target.result;
    //   // console.log(event.target.result); //url of the image

    //   gettext(event.target.result);
      // (async () => {
      //     await worker.load();
      //     await worker.loadLanguage('urd');
      //     await worker.initialize('urd');
      //     const { data: { text } } = await worker.recognize(event.target.result);
      //     setocrtext(text)
      //     await worker.terminate();
      //   })();

      // quickstart(event.target.result);
  
    // console.log(URL.createObjectURL("D:/All Downloads/Capture.png"));
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columnSpacing={{ xs: 1, sm: 2, md: 1 }}
    >
      {/* row 1 container that holds upload image link, process, and image */}
      {/* step 1 and 2, choose file and process */}
      {/* row 1 has 3 cols */}
      <Grid
        container
        columnSpacing={{ xs: 4, sm: 5, md: 9 }}
        rowSpacing={{ xs: 5, sm: 5 }}
        sx={{ justifyContent: "center", mb: 5 }}
      >
        {/* step 1 */}
        <Grid
          item
          container
          display="flex"
          justifyContent="start"
          xs={12}
          sm={12}
          md={5}
        >
          {/* 1st stack has 2 components upload button and image link inside a box */}
          <Stack
            spacing={2}
            sx={{
              justifyContent: "start",
              px: 2,
              py: 1,
              mt: 3,
            }}
          >
            <Typography>
              <Box
                sx={{
                  textAlign: "start",
                  fontWeight: "bold",
                  fontSize: "h6.fontSize",
                  color: "black",
                }}
              >
                Step1: Choose file
              </Box>
            </Typography>

            <input
              type="file"
              style={{ display: "none" }}
              onChange={urlChange}
              ref={fileInput}
            />
            {/* choose file btn */}
            <Stack
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              direction="row"
              sx={{
                justifyContent: "start",

                borderRadius: 5,
                border: 2,
                borderColor: "#f5f5f5",
                px: 2,
                py: 1,
              }}
            >
              <Button
                size="Normal"
                variant="contained"
                onClick={() => fileInput.current.click()}
                sx={{
                  backgroundColor: "#008080",
                  borderRadius: 3,
                  "&:hover": {
                    backgroundColor: "#08b3e5",
                  },
                }}
              >
                Choose file
              </Button>
              {/* image link */}
              <TextField
                hiddenLabel
                size="Normal"
                variant="standard"
                placeholder="File Link"
                value={url_link}
                margin="dense"
              />
            </Stack>
          </Stack>
        </Grid>
        {/* image link */}

        {/* step 2 */}
        <Grid
          item
          container
          display="flex"
          justifyContent="start"
          xs={12}
          sm={12}
          md={3}
        >
          <Stack
            spacing={2}
            sx={{
              justifyContent: "start",
              px: 2,
              py: 1,

              mt: 3,
            }}
          >
            <Typography>
              <Box
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "h6.fontSize",
                  color: "black",
                  mb: 2,
                }}
              >
                Step2: Upload file
              </Box>
            </Typography>
            {/* process button */}
            <Button
              onClick={change_to_text}
              variant="contained"
              sx={{
                px: 6,
                py: 1,
                backgroundColor: "#008080",

                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "#08b3e5",
                },
              }}
            >
              Upload
            </Button>
          </Stack>
        </Grid>
        {/* step 3 */}
        <Grid
          item
          container
          display="flex"
          justifyContent="start"
          xs={12}
          sm={12}
          md={3}
        >
          <Stack
            spacing={2}
            sx={{
              justifyContent: "start",
              px: 2,
              py: 1,
              mt: 3,
            }}
          >
            <Typography>
              <Box
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "h6.fontSize",
                  color: "black",
                  mb: 2,
                }}
              >
                Step3: Process file
              </Box>
            </Typography>
            {/* process button */}
            <Button
              onClick={load_file}
              variant="contained"
              sx={{
                mt: 9,
                px: 6,
                py: 1,
                backgroundColor: "#008080",

                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "#08b3e5",
                },
              }}
            >
              Process
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* image area  image comes from api*/}
      {/* row 2 */}
      <Grid
        container
        columnSpacing={{ xs: 4, sm: 5, md: 9 }}
        rowSpacing={{ xs: 5, sm: 5 }}
        sx={{ justifyContent: "center" }}
      >
        <Grid
          item
          container
          display="flex"
          justifyContent="center"
          xs={12}
          sm={12}
          md={8}
        >
          <Box>
          <img
              ref={imageRef}
              // width="100%"
              // sx={{
              //   maxWidth: "100%",
              //   Width: "100%",
              //   height: "auto",
              //   padding: 0,
              //   margin: 0,
              // }}
              src={igo}
              // src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
             
            />
          </Box>
        </Grid>
      </Grid>

      {/* progress bar for uploading */}
      {/* <Grid item xs={12} sm={12} md={12} lg={12}>
        <LinearProgress color="success" />
      </Grid> */}

      {/* row 3 text area for converted text */}
      <Grid
        container
        columnSpacing={{ xs: 4, sm: 5, md: 9 }}
        rowSpacing={{ xs: 5, sm: 5 }}
        sx={{ justifyContent: "center", pt: 3 }}
      >
        <Grid
          item
          container
          display="flex"
          justifyContent="center"
          xs={12}
          sm={12}
          md={12}
        >
          <Box justifyContent="start" sx={{ p: 2, width: "100%" }}>
            <TextareaAutosize
              title="Image Text"
              aria-label="maximum height"
              value={ocrtext}
              wrap="True"
              style={{ width: "100%", minHeight: 300, maxWidth: "100%", direction:"RTL" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/*  download buttons */}
      <Grid container spacing={0}>
        {/* step 4 */}
        <Grid item container display="flex" justifyContent="center" xs={12}>
          <Typography>
            <Box
              sx={{
                mt: 2,
                mb: 3,
                textAlign: "start",
                fontWeight: "bold",
                fontSize: "h6.fontSize",
                color: "black",
              }}
            >
              Step4: Choose format and download file
            </Box>
          </Typography>
        </Grid>
        {/* stack has 2 components button and selector */}
        {/* select output for downloading */}

        <Grid item container display="flex" justifyContent="center" xs={12}>
          <Stack spacing={2} direction="row">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Select output format
                </InputLabel>
                <NativeSelect
                  onChange={ (e)=>{setOptionSelect(e.target.value)}  }
                  defaultValue="plain"
                  inputProps={{
                    name: "outputformat",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="plain">Text Plain (txt)</option>
                  <option value="docx">Microsoft word (docx)</option>
                  {/* <option value={30}>Thirty</option> */}
                </NativeSelect>
              </FormControl>
            </Box>
            {/* download button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#008080",
                borderRadius: 4,
                "&:hover": {
                  backgroundColor: "#08b3e5",
                },
              }}
              onClick = {download_file_text}
            >
              Download
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
