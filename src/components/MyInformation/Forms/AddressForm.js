import * as React from "react";
import {Form, Item, Input, Label, Picker, Icon} from 'native-base';

export default function AddressForm({ street, setStreet, apt, setApt, city, setCity, state, setState, zip, setZip }) {
  const [zipError, setZipError] = React.useState(false);

  const states = ["Alabama","AL",
                  "Alaska","AK",
                  "Arizona","AZ",
                  "Arkansas","AR",
                  "California","CA",
                  "Colorado","CO",
                  "Connecticut","CT",
                  "Delaware","DE",
                  "District of Columbia","DC",
                  "Florida","FL",
                  "Georgia","GA",
                  "Hawaii","HI",
                  "Idaho","ID",
                  "Illinois","IL",
                  "Indiana","IN",
                  "Iowa","IA",
                  "Kansas","KS",
                  "Kentucky","KY",
                  "Louisiana","LA",
                  "Maine","ME",
                  "Montana","MT",
                  "Nebraska","NE",
                  "Nevada","NV",
                  "New Hampshire","NH",
                  "New Jersey","NJ",
                  "New Mexico","NM",
                  "New York","NY",
                  "North Carolina","NC",
                  "North Dakota","ND",
                  "Ohio","OH",
                  "Oklahoma","OK",
                  "Oregon","OR",
                  "Maryland","MD",
                  "Massachusetts","MA",
                  "Michigan","MI",
                  "Minnesota","MN",
                  "Mississippi","MS",
                  "Missouri","MO",
                  "Pennsylvania","PA",
                  "Rhode Island","RI",
                  "South Carolina","SC",
                  "South Dakota","SD",
                  "Tennessee","TN",
                  "Texas","TX",
                  "Utah","UT",
                  "Vermont","VT",
                  "Virginia","VA",
                  "Washington","WA",
                  "West Virginia","WV",
                  "Wisconsin","WI",
                  "Wyoming","WY"];

  function getStateOptions() {
    let options = [];
    for (let i = 0; i < 51; i = i + 2) {
      options.push(<Picker.Item label={states[i]} value={states[i+1]} key={i} />)
    }
    return options;
  }

  function isZipCode(str) {
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regexp.test(str);
  }

  function validAndUpdateZip(s) {
    setZip(s);
    if (isZipCode(s)) {
      setZipError(false);
    } else {
      setZipError(true);
    }
  }

  return (
    <Form>
      <Item floatingLabel>
        <Label>Street Address:</Label>
        <Input onChangeText={setStreet}
               value={street}/>
      </Item>
      <Item floatingLabel>
        <Label>Apartment, Suite, etc.:</Label>
        <Input onChangeText={setApt}
               value={apt}/>
      </Item>
      <Item floatingLabel>
        <Label>City:</Label>
        <Input onChangeText={setCity}
               value={city}/>
      </Item>
      <Item picker>
        <Picker mode="dropdown"
                placeholder="State"
                selectedValue={state}
                onValueChange={setState}>
          {getStateOptions()}
        </Picker>
      </Item>
      <Item floatingLabel error={zipError}>
        <Label>Zip Code:</Label>
        <Input onChangeText={(s) => validAndUpdateZip(s)}
               value={zip}/>
        {zipError ? <Icon name='close-circle' /> : <></>}
      </Item>
    </Form>
  );
}