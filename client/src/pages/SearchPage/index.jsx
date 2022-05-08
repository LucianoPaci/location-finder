import React from 'react'
import Box from '@mui/material/Box'
import { Button, Grid } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import { TextField } from 'formik-mui'
import Api from '../../utils/api'
function SearchPage() {
  const navigate = useNavigate()
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)

  const initialValues = {
    address: '',
    city: '',
    province: '',
    country: '',
    postalCode: '',
  }

  async function handleSubmit(values) {
    const { address, city, province, country, postalCode } = values

    try {
      const res = await Api.getLocation({
        address,
        city,
        province,
        country,
        postalCode,
      })
      if (res) {
        setData(data)
        navigate('/result')
      }
    } catch (error) {
      setError(error)
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => await handleSubmit(values)}
    >
      {({ values }) => (
        <Form>
          <Grid container spacing={2} p={3}>
            <Grid item xs={6}>
              <Box>
                <h1>Where in the world? Search Anywhere</h1>
                <h3>
                  Searching just got easier, lets take you where you want to go
                </h3>
              </Box>
              <Grid container spacing={2} p={3}>
                <Grid item xs={12} md={12}>
                  <Field
                    component={StyledTextField}
                    name="address"
                    placeholder="Street Address"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={StyledTextField}
                    name="city"
                    placeholder="City"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={StyledTextField}
                    name="province"
                    placeholder="Province"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Field
                    component={StyledTextField}
                    name="country"
                    placeholder="Country"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Field
                    component={StyledTextField}
                    name="postalCode"
                    placeholder="Postal Code"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ margin: 4 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ background: 'green' }}
                    >
                      Search
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <img
                  src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=480&h=480&fit=crop&auto=format"
                  alt="travel"
                />
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

const StyledTextField = (props) => <TextField {...props} fullWidth />

export default SearchPage
