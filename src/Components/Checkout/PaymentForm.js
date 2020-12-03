import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FormLabel, Radio, RadioGroup, FormControl } from "@material-ui/core";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        1.Chọn hình thức giao hàng
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="order" name="order">
          <FormControlLabel
            value="24h"
            control={<Radio />}
            label="Giao hàng ngay trong 24h"
          />
          <FormControlLabel
            value="5h"
            control={<Radio />}
            label="Giao hàng trong vòng 3-5h"
          />
          <FormControlLabel control={<Radio />} label="Trong vòng 1 tuần " />
        </RadioGroup>
      </FormControl>

      <Typography variant="h6" gutterBottom>
        2.Chọn hình thức thanh toán
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="order" name="order">
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label="Thanh toán bằng tiền mặt"
          />
          <FormControlLabel
            value="5h"
            control={<Radio />}
            label="Thanh toán bằng momo"
          />
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
}
