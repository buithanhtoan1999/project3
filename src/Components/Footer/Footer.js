import { Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./Footer.css";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";
function Footer() {
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs>
            <h2>TOANBT</h2>
            <Typography>
              TOANBT. We made perfect things from head to tail for clients. Đội
              ngũ TOANBT luôn coi trọng lợi ích của khách hàng lên hàng đầu,
              chỉn chu từng bước để mang tới những sản phẩm hoàn hảo nhất từ
              “đầu tới cuối”.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <h3>Chính sách</h3>
            <ul className="footer_list">
              <li>CS ĐỔI TRẢ</li>
              <li>TK NGÂN HÀNG</li>
              <li>KT ĐƠN HÀNG</li>
              <li>MEMBERSHIP</li>
            </ul>
          </Grid>
          <Grid item xs>
            <h3>TƯ VẤN BÁN HÀNG (9:00-21:30)</h3>
            <div>
              <Typography>
                <PhoneIcon fontSize="inherit" color="primary" />
                0377 730 925
                <br />
                Tất cả các ngày trong tuần
              </Typography>
              <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
              <ul className="list_icon_ul">
                <div className="list_icon">
                  <li>
                    <FacebookIcon fontSize="large"></FacebookIcon>
                  </li>
                  <li>
                    <YouTubeIcon fontSize="large" />
                  </li>
                  <li>
                    <InstagramIcon fontSize="large" />
                  </li>
                  <li>
                    <TwitterIcon fontSize="large" />
                  </li>
                </div>
              </ul>
            </div>
          </Grid>
          <Grid item xs>
            <h3 className="footer_h3">CHĂM SÓC KHÁCH HÀNG (9:00-21:00)</h3>
            <Typography>
              <PhoneIcon fontSize="inherit" color="primary" />
              0377 730 925
              <br />
              Tất cả các ngày trong tuần
            </Typography>
          </Grid>
        </Grid>
        <p className="copyright">Copyright © 2020 TOANBT. Powered by ToanBT</p>
      </Container>
    </div>
  );
}

export default Footer;
