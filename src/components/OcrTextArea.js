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
  selectClasses,
} from "@mui/material";
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
    
    let response = await axios.post(API_URL+"download", { text: ocrtext });
    // console.log(response.data)
    // const type = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'; // modify or get it from response
    // const blob = new Blob([response.data], {type});
    // const url = URL.createObjectURL(blob);

    // // Step 3: Trigger downloading the object using that URL
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = "Urdu Text.docx";
    // a.click();

    var sampleArr = base64ToArrayBuffer(response.data);
    saveByteArray("Sample Report", sampleArr);

  }


  function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(btoa(unescape(encodeURIComponent(base64))));
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
       var ascii = binaryString.charCodeAt(i);
       bytes[i] = ascii;
    }
    return bytes;
 }
 function saveByteArray(reportName, byte) {
  var blob = new Blob([byte], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = "Urdu OCR.docx";
  link.download = fileName;
  link.click();
};



  function change_to_text(){
    var fReader = new FileReader();
    // console.log(fileInput.current.files)
    fReader.readAsDataURL(fileInput.current.files[0]);
    fReader.onloadend = function (event) {
      console.log(event.target.result)
      gettext(event.target.result)
    }
  }




  function download_file_text(){

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

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        alignItems="top"
        justifyContent="start"
      >
        <Grid item xs={12} sm={12} md={5} lg={5}>
          {/* 1st stack has 2 components upload button and image link inside a box */}
          <Stack
            spacing={2}
            direction="row"
            sx={{
              justifyContent: "start",
              px: 2,
              py: 1,
              borderRadius: 5,
              border: 2,
              borderColor: "#f5f5f5",
              width: "100%",
              mt: 3,
            }}
          >
            {/* upload btn */}
            <Button
              size="Normal"
              sx={{ px: 7, ms: 5 }}
              variant="contained"
              onClick={() => fileInput.current.click()}
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#08b3e5",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Upload file
            </Button>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={urlChange}
              ref={fileInput}
            />
            <TextField
              hiddenLabel
              size="Normal"
              variant="filled"
              placeholder="Image Link"
              value={url_link}
              sx={{ backgroundColor: "#f5f5f5" }}
            />
          </Stack>

          {/* process button */}
          <Button
            variant="contained"
            sx={{
              mt: 8,
              px: 8,
              py: 2,
              backgroundColor: "#008080",
              borderRadius: 4,
              "&:hover": {
                backgroundColor: "#08b3e5",
              },
            }}
            onClick={change_to_text}
          >
            Process
          </Button>
        </Grid>

        {/* image area  image comes from api*/}

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
              ref={imageRef}
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                padding: 0,
                margin: 0,
              }}
              src={igo}
              // alt="image title"
              
            />
        </Grid>
      </Grid>

      {/* progress bar for uploading */}
      {/* <Grid item xs={12} sm={12} md={12} lg={12}>
        <LinearProgress color="success" />
      </Grid> */}

      {/* text area for converted text */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box justifyContent="start" sx={{ p: 2, mx: 0, width: "100%" }}>
          <TextareaAutosize
            title="Image Text"
            aria-label="maximum height"
            value={ocrtext}
            wrap="True"
            style={{ width: "100%", minHeight: 300, maxWidth: "100%" }}
          />
        </Box>
      </Grid>

      {/* buttons */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          {/* stack has 2 components button and selector */}
          {/* select output for downloading */}
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
