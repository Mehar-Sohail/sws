import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import imge1 from "./images/img1.jpg";
import "./styles.css";
import { Button, Container, Grid, Typography } from "@mui/material";
import STextField from "./formComponents/input";
import SSelect from "./formComponents/SSelect";
import { useNavigate } from "react-router-dom";
export default function Application() {

  let [status, setStatus] = useState('basicInformation')

  const navigate = useNavigate();

  const submitApplication = () => {
    console.log("in submit application");
  }

  return (
    <>
      <Navbar />

      <div style={{ margin: '100px 0px', padding: '0px 10%', display: 'flex', gap: 40, }}>

        <img className='applicationOptionalImg' src="./img/10.jpg" style={{ height: "84%", width: "100%" }}
          alt="" />

        {status === 'basicInformation' &&
          <Container className="shadow-lg" sx={{ borderRadius: '15px', padding: '20px' }} >

            <Grid container spacing={5}>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '500' }}>Volunteer Application</Typography>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h5" sx={{ fontWeight: '500' }}>Basic Information</Typography>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <STextField label='First Name' fullWidth={true}></STextField>
              </Grid>


              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <STextField
                  // onChange={(e) => fillData('lastName', e.target.value)}
                  label='Last Name' required={false}></STextField>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <STextField label='Email' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <STextField label='Marital Status' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Current Address (detailed)' fullWidth={true}></STextField>
              </Grid>


              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Permanent Address' fullWidth={true}></STextField>
              </Grid>


              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <STextField label='Nearest Famous Location' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <SSelect label='Select Gender' sourceArr={['Male', 'Female', 'Other']} />
              </Grid>

              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <SSelect label='Select State' sourceArr={['Punjab', 'Sindh', 'Balochistan', 'KPK', 'Islamabad']} />
              </Grid>

              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <SSelect label='Select City' sourceArr={['Lahore', 'Karachi', 'Islamabad', 'Bahawalpur', 'Hyderabad']} />
              </Grid>


              <Grid item lg={12} md={12} sm={12} xm={12} xs={12} sx={{ textAlign: 'end' }}>
                <Button variant='contained' onClick={() => setStatus('contactInformation')} >Save & Next</Button>
              </Grid>


            </Grid>

          </Container>}

        {status === 'contactInformation' &&
          <Container className="shadow-lg" sx={{ borderRadius: '15px', padding: '20px' }} >

            <Grid container spacing={5}>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '500' }}>Volunteer Application</Typography>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h5" sx={{ fontWeight: '500' }}>Contact Information</Typography>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Contact Number' type='number' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Alternate Contact Number' type='number' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='CNIC Number' type='number' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xm={12} xs={12}>
                <STextField label='Postal Code' type='number' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xm={12} xs={12}>
                <STextField label='Date of Birth' type='date' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12} sx={{ textAlign: 'end' }}>
                <Button variant='contained' onClick={() => setStatus('uploadDocuments')} >Save & Next</Button>
              </Grid>


            </Grid>

          </Container>}

        {status === 'uploadDocuments' &&
          <Container className="shadow-lg" sx={{ borderRadius: '15px', padding: '20px' }} >

            <Grid container spacing={5}>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '500' }}>Volunteer Application</Typography>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h5" sx={{ fontWeight: '500' }}>Upload Documents</Typography>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='CNIC Front Side' type='file' size='medium' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='CNIC Back Side' type='file' size='medium' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Electricity Bill' type='file' size='medium' fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Gas Bill' type='file' size='medium' fullWidth={true}></STextField>
              </Grid>


              <Grid item lg={12} md={12} sm={12} xm={12} xs={12} sx={{ textAlign: 'end' }}>
                <Button variant='contained' onClick={() => setStatus('interviewQuestions')} >Save & Next</Button>
              </Grid>


            </Grid>

          </Container>}

        {status === 'interviewQuestions' &&
          <Container className="shadow-lg" sx={{ borderRadius: '15px', padding: '20px' }} >

            <Grid container spacing={5}>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '500' }}>Volunteer Application</Typography>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <Typography variant="h5" sx={{ fontWeight: '500' }}>Interview Questions</Typography>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Why you want to become a Volunteer?' multiline={true} fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='What is your motivation to become a Volunteer?' multiline={true} fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='What skills do you have to become a Volunteer?' multiline={true} fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12}>
                <STextField label='Do you have any prior experience?' multiline={true} fullWidth={true}></STextField>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xm={12} xs={12} sx={{ textAlign: 'end' }}>
                <Button variant='contained' onClick={submitApplication} >Submit</Button>
              </Grid>


            </Grid>

          </Container>}

      </div>

      <Footer />
    </>
  );
}
