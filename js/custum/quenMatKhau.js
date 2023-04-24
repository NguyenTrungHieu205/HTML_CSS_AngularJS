//const nodemailer = require('nodemailer');

app.post(dangKyAPI, function(req, res) {
  const email = req.body.email;

  // Kiểm tra xem email của người dùng có tồn tại trong cơ sở dữ liệu của bạn.
  // Nếu không, gửi thông báo lỗi cho người dùng.
  // Nếu có, tạo một mã đặt lại mật khẩu và lưu nó trong cơ sở dữ liệu của bạn.

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      email: 'your.email@gmail.com',
      matKhau: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your.email@gmail.com',
    to: email,
    subject: 'Đặt lại mật khẩu',
    text: 'Vui lòng nhấp vào liên kết sau để đặt lại mật khẩu của bạn: http://your-website.com/reset-password/' + resetCode
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Lỗi khi gửi email.');
    } else {
      console.log('Email gửi thành công: ' + info.response);
      res.status(200).send('Yêu cầu đặt lại mật khẩu đã được gửi đến địa chỉ email của bạn.');
    }
  });
});