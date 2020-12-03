import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Account() {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        style={{
          marginTop: "30px",
        }}
      >
        Tài khoản của bạn
      </Typography>
      <Container
        style={{
          borderTop: "1px solid #ECE8E7",
          marginTop: "80px",
        }}
      >
        <Grid container style={{ marginTop: "40px" }}>
          <Grid item xs={4}>
            <Typography variant="h6">TÀI KHOẢN</Typography>
            <ul>
              <li>Thông tin tài khoản</li>
              <li>Danh sách địa chỉ </li>
              <li>Đăng xuất </li>
            </ul>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">THÔNG TIN TÀI KHOẢN</Typography>
            <div
              style={{
                borderTop: "1px solid #ECE8E7",
                paddingTop: "10px",
                marginTop: "10px",
              }}
            >
              <Typography variant="h6">Bùi Thanh Toan</Typography>
              <Typography>Địa chỉ email</Typography>
              <Typography>Địa chỉ </Typography>
              <div
                style={{
                  //   border: "5px solid #D6D6D6 ",
                  paddingTop: "10px",
                  marginTop: "10px",
                }}
              >
                <Typography
                  style={{
                    borderBottom: "1px solid #ECE8E7",
                  }}
                >
                  DANH SÁCH ĐƠN HÀNG MỚI NHẤT
                </Typography>
                <ul
                  style={{
                    listStyle: "none",
                  }}
                >
                  <li style={{ float: "left" }}>
                    <Typography variant="h6">Mã đơn hàng</Typography>
                  </li>
                  <li
                    style={{
                      float: "left",
                      paddingLeft: "27px",
                    }}
                  >
                    <Typography variant="h6">Ngày đặt </Typography>
                  </li>
                  <li style={{ float: "left", paddingLeft: "27px" }}>
                    <Typography variant="h6">Thành tiền </Typography>
                  </li>
                  <li style={{ float: "left", paddingLeft: "27px" }}>
                    <Typography variant="h6">Trạng thái thanh toán</Typography>
                  </li>
                  <li style={{ float: "left", paddingLeft: "27px" }}>
                    <Typography variant="h6">Vận chuyển</Typography>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
