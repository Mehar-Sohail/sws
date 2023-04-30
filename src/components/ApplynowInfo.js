import React from 'react'
import Footer from './Footer'

import Navbar from './Navbar'
import { Button, Container, Grid, Typography } from '@mui/material'
import STextField from './formComponents/input'
import SSelect from './formComponents/SSelect'
function ApplynowInfo() {
  return (
    <>
      <Navbar />
      <section className="row d-flex justify-content-center" style={{ marginTop: "8%", width: "100%" }}>
        <div className="tab-content col-md-6 shadow-1-strong mb-4" style={{ borderRadius: "10px" }}>


          {/* <!-- Progress Bar --> */}
          {/* <div className="container d-flex justify-content-center align-items-center my-3">

              <div className="progresses">


                <div className="steps">
                  <span><i className="fa fa-check"></i></span>
                </div>

                <p className="position-absolute" style={{ margin: "5% 0 0 0.2%", fontWeight: "bold" }}>Info</p>

                <span className="line1 "></span>

                <div className="steps">
                  <span className="fontWeight-bold">2</span>
                </div>
                <p className="position-absolute" style={{ margin: "5% 0 0 9.6%", fontWeight: "bold" }}>Address</p>

                <span className="line1"></span>

                <div className="steps">
                  <span className="fontWeight-bold">3</span>
                </div>
                <p className="position-absolute" style={{ margin: "5% 0 0 19.9%", fontWeight: "bold" }}>Contact</p>

                <span className="line1"></span>

                <div className="steps">
                  <span className="fontWeight-bold">4</span>
                </div>
                <p className="position-absolute" style={{ margin: "5% 0 0 29.5%", fontWeight: "bold" }}>Documents</p>

                <span className="line1"></span>

                <div className="steps">
                  <span className="fontWeight-bold">5</span>
                </div>
                <p className="position-absolute" style={{ margin: "5% 0 0 42%", fontWeight: "bold" }}>Bank</p>
              </div>

            </div>
            <hr /> */}


          <div className="text-center" style={{ marginBottom: "4%", marginTop: "3%" }}>
            <h4>Personal Information</h4>
          </div>

          {/* <Container className="shadow-lg" sx={{ borderRadius: '15px', padding: '20px' }} > */}

          <Grid container spacing={5}>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='First Name' fullWidth={true}></STextField>
            </Grid>


            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField
                // onChange={(e) => fillData('lastName', e.target.value)}
                label='Last Name' required={false}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='CNIC Number' type='number' fullWidth={true}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <SSelect label='Select Marital Status' sourceArr={['Married', 'UnMarried']} />
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <SSelect label='House' sourceArr={['Rental', 'Owned']} />
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='House Area (Marla)' type='number' fullWidth={true}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='No. of Children' type='number' fullWidth={true}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <SSelect label='Grant Category' sourceArr={['Needy', 'Educational Grant', 'Marriage Grant', 'Rental']} />
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='Monthly Income' type='number' fullWidth={true}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='Monthly Expenses' type='number' fullWidth={true}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='Average Monthly Gas Bill' type='number' fullWidth={true}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <STextField label='Average Monthly Electricity Bill' type='number' fullWidth={true}></STextField>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <SSelect label='Job Type' sourceArr={['Labout', 'Government Employee', 'Shop', 'Stall']} />
            </Grid>

            <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
              <SSelect label='Select City' sourceArr={['Lahore', 'Karachi', 'Islamabad', 'Bahawalpur', 'Hyderabad']} />
            </Grid>


            <Grid item lg={12} md={12} sm={12} xm={12} xs={12} sx={{ textAlign: 'end', marginBottom: '10px' }} >
              <Button variant='contained' onClick={() => { }} >Save & Next</Button>
            </Grid>


          </Grid>

          {/* </Container> */}

          <form>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text"
                    id="form6Example1"
                    className="form-control"
                    style={{ border: "1px solid black" }}
                  />
                  <label className="form-label">First name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form6Example2"
                    style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example2">Last name</label>
                </div>
              </div>
            </div>

            {/* <!-- Text input --> */}

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="CNIC"
                    style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="CNIC">CNIC</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" style={{ border: "1px solid black" }}
                      type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Married</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" style={{ border: "1px solid black" }}
                      name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">unMarried</label>
                  </div>

                </div>
              </div>
            </div>
            {/* <!-- Text input --> */}


            <div className="row mb-4">
              <div className="col">
                <select className="form-select" aria-label="Default select example">
                  <option selected>House</option>
                  <option value="own">Owned</option>
                  <option value="rent">Rented</option>
                </select>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form6Example2"
                    style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example2">House Area(in Marla)</label>
                </div>
              </div>
            </div>

            {/* <!-- No of Children --> */}
            <div className="row mb-4">
              <div className="col">
                <div className='form-outline'>
                  <input type="text" id="form6Example1"
                    style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example1">No of Children</label>
                </div>
              </div>

              {/* <!-- Case Category --> */}
              <div className="col">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Grant Gategory</option>
                  <option value="needy">Needy</option>
                  <option value="edu">Educational Grant</option>
                  <option value="marriage">Marriage Grant</option>
                  <option value="ration">Ration</option>
                </select>
              </div>
            </div>

            {/* <!-- Monthly income --> */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form6Example1"
                    style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example1">Monthly Income</label>
                </div>
              </div>
              {/* <!-- Monthly Expenses --> */}
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form6Example2" style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example2">Monthly Expenses</label>
                </div>
              </div>
            </div>

            {/* <!-- Bills Monthly --> */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form6Example1" style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example1">Avg Monthly Gas Bill</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form6Example2"
                    style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example2">Avg Monthly Elec Bill</label>
                </div>
              </div>
            </div>
            {/* <!-- Utility Bills --> */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form6Example1" style={{ border: "1px solid black" }}
                    className="form-control" />
                  <label className="form-label" htmlFor="form6Example1">Avg Monthly Gas Bill</label>
                </div>
              </div>
              <div className="col">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Job Type</option>
                  <option value="needy">Labour</option>
                  <option value="edu">Govt Employ</option>
                  <option value="marriage">Shop/stall</option>

                </select>
              </div>
            </div>
            <p>*All fields are required. please provide Authentic data.</p>
            {/* <!-- Submit button --> */}
            <div className="row">
              <div className="col">
                <a href='/apprules'> <button type="button" className="btn btn-primary mb-4">Back</button>
                </a> </div>
              <div className="col">
                <a href="/apadr"> <button type="button" className="btn btn-primary mb-4" style={{ marginLeft: "75%" }}>Next</button></a>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default ApplynowInfo